"use client";

import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight, Workflow } from "lucide-react";

export default function ProfileCard({ email }) {
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const springX = useSpring(pointerX, { stiffness: 150, damping: 22, mass: 0.55 });
  const springY = useSpring(pointerY, { stiffness: 150, damping: 22, mass: 0.55 });
  const rotateY = useTransform(springX, [-0.5, 0.5], [-7, 7]);
  const rotateX = useTransform(springY, [-0.5, 0.5], [6, -6]);
  const reduceMotion = useReducedMotion();

  function handlePointerMove(event) {
    if (reduceMotion || event.pointerType !== "mouse") return;
    const bounds = event.currentTarget.getBoundingClientRect();
    pointerX.set((event.clientX - bounds.left) / bounds.width - 0.5);
    pointerY.set((event.clientY - bounds.top) / bounds.height - 0.5);
  }

  function resetTilt() {
    pointerX.set(0);
    pointerY.set(0);
  }

  return (
    <div className="profile-card-stage">
      <motion.a
        animate={{ opacity: 1, y: 0 }}
        className="hover-3d profile-card-link my-12 mx-2 cursor-pointer"
        href={`mailto:${email}`}
        initial={false}
        onPointerLeave={resetTilt}
        onPointerMove={handlePointerMove}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        transition={{ duration: reduceMotion ? 0 : 0.4 }}
        aria-label="Contacter Bruno Ismaël Razafindratsimba par e-mail"
      >
        <div className="card profile-credit-card bg-black text-white">
          <div className="card-body profile-card-body">
            <div className="profile-card-head">
              <span>BRUNO ISMAËL<i>/</i> DATA</span>
              <Workflow aria-hidden="true" size={27} strokeWidth={1.3} />
            </div>
            <div className="profile-card-footer">
              <div>
                <small>DATA & BUSINESS INTELLIGENCE</small>
              </div>
            </div>
            <span className="profile-card-open">ÉCRIRE <ArrowUpRight aria-hidden="true" size={14} /></span>
          </div>
        </div>
      </motion.a>
      <p className="profile-card-caption">CARTE DE CONTACT <span>·</span> MADAGASCAR</p>
    </div>
  );
}