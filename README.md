# 🌞 Garderie App

Application web pour la garderie d'enfants « Les Petits Soleils » : une landing page
responsive (Next.js + Bootstrap 5) alimentée dynamiquement par une API REST
Node.js/Express.

## Présentation

Le projet comporte deux parties :

- un **frontend** Next.js qui affiche une landing page composée de trois sections
  (Navbar, Hero, Services) et la liste des activités ;
- un **backend** Express qui expose trois routes REST renvoyant des données JSON.

Le développement a été réalisé avec un workflow Git par branches : chaque étape a
été faite dans une branche dédiée, suivie d'un commit et d'une fusion dans `main`.

## Technologies utilisées

| Partie | Technologies |
|---|---|
| Frontend | Next.js (App Router), React, Bootstrap 5 |
| Backend | Node.js, Express, CORS |
| Versionnement | Git, GitHub |

## Structure des dossiers

```
garderie-app/
├── backend/
│   ├── server.js            # API Express (3 routes)
│   └── package.json
├── frontend/
│   ├── app/
│   │   ├── layout.js        # Layout global + import de Bootstrap
│   │   ├── BootstrapClient.js
│   │   └── page.js          # Page principale (assemble les composants)
│   ├── components/
│   │   ├── Navbar.js
│   │   ├── Hero.js
│   │   └── Services.js
│   └── package.json
├── .gitignore
└── README.md
```

## Installation et exécution

### Prérequis

- Node.js 18 ou supérieur
- Git

### 1. Cloner le dépôt

```bash
git clone https://github.com/MontassarHannachi/garderie-app.git
cd garderie-app
```

### 2. Lancer le backend (http://localhost:5000)

```bash
cd backend
npm install
npm start
```

### 3. Lancer le frontend (http://localhost:3000)

Dans un second terminal :

```bash
cd frontend
npm install
npm run dev
```

Le frontend utilise par défaut `http://localhost:5000` comme URL de l'API. Pour la
modifier, créer un fichier `frontend/.env.local` :

```
NEXT_PUBLIC_API_URL=http://localhost:5000
```

Ouvrir ensuite http://localhost:3000 dans le navigateur (le backend doit être lancé).

## Documentation des API

URL de base : `http://localhost:5000`

| Méthode | Route | Description |
|---|---|---|
| GET | `/api/garderie` | Informations générales de la garderie |
| GET | `/api/services` | Liste des services proposés |
| GET | `/api/activites` | Liste des activités pour les enfants |

### GET /api/garderie

```json
{
  "nom": "Les Petits Soleils",
  "slogan": "Un environnement sûr et joyeux pour votre enfant",
  "description": "Une équipe bienveillante et des activités éducatives pour chaque enfant.",
  "adresse": "Tozeur, Tunisie",
  "telephone": "+216 00 000 000",
  "email": "contact@petitssoleils.tn",
  "horaires": "Lundi - Vendredi : 7h30 - 18h00"
}
```

### GET /api/services

```json
[
  { "id": 1, "icone": "🍎", "titre": "Garde à la journée", "description": "Accueil de 7h30 à 18h avec repas équilibrés." },
  { "id": 2, "icone": "🎨", "titre": "Ateliers d'éveil", "description": "Dessin, musique et jeux pour développer la créativité." },
  { "id": 3, "icone": "📚", "titre": "Aide aux devoirs", "description": "Accompagnement scolaire pour les enfants de 6 à 10 ans." }
]
```

### GET /api/activites

```json
[
  { "id": 1, "nom": "Peinture", "ageMin": 3, "ageMax": 6, "horaire": "Lundi 10h" },
  { "id": 2, "nom": "Chansons et comptines", "ageMin": 2, "ageMax": 5, "horaire": "Mardi 9h30" }
]
```

(Extrait : la route renvoie quatre activités.)

## Workflow Git

| Branche | Contenu |
|---|---|
| `feature/landing-page` | Landing page responsive dans un seul fichier |
| `feature/components` | Extraction de Navbar, Hero et Services en composants |
| `feature/backend` | API REST Express |
| `feature/api-integration` | Connexion du frontend aux API |
| `docs/readme` | Rédaction de ce README |

Chaque branche a été fusionnée dans `main` avec un commit de fusion (`--no-ff`).

## Auteur

Montassar Hannachi
