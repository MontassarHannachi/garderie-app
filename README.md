# 🌲 Garderie App

Application web pour la garderie d'enfants « Petite Forêt » : une landing page
moderne et responsive (Next.js + Bootstrap 5), alimentée dynamiquement par une API REST
Node.js/Express, avec un formulaire d'inscription pour les parents.

## Présentation

Le projet comporte deux parties :

- un **frontend** Next.js : Navbar, Hero, Services, Activités, Contact et une fenêtre
  d'inscription ;
- un **backend** Express qui expose quatre routes REST (trois en lecture, une en écriture).

Le développement a été réalisé avec un workflow Git par branches : chaque étape a été
faite dans une branche dédiée, suivie d'un commit et d'une fusion dans `main`.

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
│   ├── server.js              # API Express (4 routes)
│   └── package.json
├── frontend/
│   ├── app/
│   │   ├── layout.js          # Layout global, police et styles
│   │   ├── globals.css        # Design (couleurs, cartes, boutons)
│   │   ├── BootstrapClient.js # Chargement du JS Bootstrap (menu mobile)
│   │   └── page.js            # Page principale (assemble les composants)
│   ├── components/
│   │   ├── Navbar.js
│   │   ├── Hero.js
│   │   ├── Services.js
│   │   ├── Activites.js
│   │   ├── Contact.js
│   │   └── Inscription.js     # Formulaire d'inscription (fenêtre modale)
│   ├── lib/
│   │   ├── api.js             # URL de l'API
│   │   └── inscription.js     # Ouverture de la fenêtre d'inscription
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
| POST | `/api/inscriptions` | Enregistre une demande d'inscription |

### GET /api/garderie

```json
{
  "nom": "Petite Forêt",
  "slogan": "Un environnement sûr et joyeux pour votre enfant",
  "description": "Une équipe bienveillante et des activités éducatives pour chaque enfant.",
  "adresse": "Tozeur, Tunisie",
  "telephone": "+21625580496",
  "email": "montassarmh04@gmail.com",
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

### POST /api/inscriptions

Corps de la requête (JSON) :

```json
{
  "parentNom": "Test Parent",
  "telephone": "+21625580496",
  "email": "parent@example.com",
  "enfantNom": "Yassine",
  "enfantAge": 4,
  "service": "Garde à la journée",
  "message": "Bonjour"
}
```

Champs obligatoires : `parentNom`, `telephone`, `enfantNom`, `enfantAge` (entre 0 et 12).
Les champs `email`, `service` et `message` sont facultatifs.

Réponse en cas de succès (`201`) :

```json
{ "message": "Inscription enregistrée", "id": 1760000000000 }
```

Réponse en cas de données invalides (`400`) :

```json
{ "erreurs": ["L'âge de l'enfant doit être compris entre 0 et 12 ans."] }
```

Les inscriptions sont enregistrées dans `backend/inscriptions.json`. Ce fichier est créé
automatiquement et exclu du dépôt Git (`.gitignore`), car il contient des données personnelles.

## Workflow Git

| Branche | Contenu |
|---|---|
| `feature/landing-page` | Landing page responsive dans un seul fichier |
| `feature/components` | Extraction de Navbar, Hero et Services en composants |
| `feature/backend` | API REST Express |
| `feature/api-integration` | Connexion du frontend aux API |
| `docs/readme` | Première version de ce README |
| `feature/modern-design` | Refonte moderne du design, sections Activités et Contact |
| `feature/inscription` | Formulaire d'inscription et route POST /api/inscriptions |
| `docs/readme-update` | Mise à jour du README |
| `feature/rename-petite-foret` | Renommage de la garderie en « Petite Forêt » |
| `feature/theme-foret` | Nouveau thème de couleurs (vert forêt) |

Chaque branche a été fusionnée dans `main` avec un commit de fusion (`--no-ff`).

## Auteur

Montassar Hannachi
