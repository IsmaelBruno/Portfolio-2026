# Portfolio Bruno Ismaël Razafindratsimba

## Lancer avec Docker

Ouvre Docker Desktop, puis un terminal PowerShell dans le dossier du projet.

Pour le premier lancement, construis l’image et démarre le site :

```powershell
docker compose up --build -d
```

Ouvre ensuite [http://localhost:3000](http://localhost:3000). Dans le conteneur, Next.js écoute sur le port 3000, qui est également publié sur ton ordinateur.

Au prochain démarrage, si le code n’a pas changé :

```powershell
docker compose up -d
```

Pour arrêter le portfolio :

```powershell
docker compose down
```

`up` démarre le site. `--build` demande à Docker de reconstruire l’image avec les derniers fichiers. `-d` laisse le site tourner en arrière-plan. `down` arrête et retire le conteneur du portfolio.

Si le port 3000 est déjà pris, choisis-en un autre dans PowerShell, puis relance Compose :

```powershell
$env:PORTFOLIO_PORT = "3001"
docker compose up -d
```

Le site sera alors disponible sur [http://localhost:3001](http://localhost:3001).

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
