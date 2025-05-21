# Keycloak Themes

Ce dépôt contient **plusieurs thèmes Keycloak** créés avec [Keycloakify](https://docs.keycloakify.dev), dont :

- `my-sandbox`: une interface login personnalisée au style dark/violet ✨
- `dino`: un thème ludique et coloré inspiré des dinosaures 🦖

---

## 📦 Installation

```bash
cd my-sandbox   # ou dino
npm install
````

---

## 🧪 Lancer Storybook (aperçu local sans Keycloak)

```bash
npm run storybook
```

---

## 🛠️ Build du thème Keycloak

```bash
npm run build-keycloak-theme
```

> Génère le dossier `build_keycloak/<nom-du-theme>/` prêt à être intégré dans Keycloak.

---

## 🐳 Tester le thème avec Keycloak via Docker

```bash
npm run build-keycloak-theme
npx keycloakify start-keycloak --keycloak-version 26.1.1
```

➡️ Accède à [http://localhost:8080](http://localhost:8080)

* Login : `admin`
* MDP : `admin`
* Ton thème est disponible dans `Realm Settings > Themes`

---

## 🏗️ Intégrer le thème dans un Keycloak sur VM (OpenJDK)

1. Sur ta VM (ex: Ubuntu avec Proxmox), place le thème dans le dossier Keycloak :

```bash
scp -r ./build_keycloak/<theme> user@ip:/home/user/keycloak/themes/
```

2. Si ton Keycloak tourne avec `kc.sh`, redémarre avec :

```bash
./bin/kc.sh start-dev --themes-dir=themes
```

> Si installé via OpenJDK (ex: `/opt/keycloak`), adapte les chemins selon ta structure.

---

## 📁 Structure recommandée du repo

```
keycloak-themes/
├── login-theme/
│   ├── src/keycloak-theme/
│   ├── public/
│   ├── package.json
│   └── build_keycloak/
├── dino-theme/
│   ├── src/keycloak-theme/
│   ├── public/
│   ├── package.json
│   └── build_keycloak/
└── README.md
```

---

## ✨ Personnalisation

* Logos, images, icônes : `src/keycloak-theme/resources/img/`
* Couleurs / polices : `main.css`
* Polices recommandées :

  * `League Spartan` pour les titres
  * `DM Sans` pour les textes

---

## 🧼 Nettoyage

```bash
rm -rf build_keycloak
```

---

## 🙋‍♀️ Auteure

Julie Montoux — 2025
Projet Keycloakify multi-thèmes (Login / Dinosaures)
[GitHub](https://github.com/ton-github)