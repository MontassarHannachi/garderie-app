const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const garderie = {
  nom: "Les Petits Soleils",
  slogan: "Un environnement sûr et joyeux pour votre enfant",
  description: "Une équipe bienveillante et des activités éducatives pour chaque enfant.",
  adresse: "Tozeur, Tunisie",
  telephone: "+21625580496",
  email: "montassarmh04@gmail.com",
  horaires: "Lundi - Vendredi : 7h30 - 18h00",
};

const services = [
  { id: 1, icone: "🍎", titre: "Garde à la journée", description: "Accueil de 7h30 à 18h avec repas équilibrés." },
  { id: 2, icone: "🎨", titre: "Ateliers d'éveil", description: "Dessin, musique et jeux pour développer la créativité." },
  { id: 3, icone: "📚", titre: "Aide aux devoirs", description: "Accompagnement scolaire pour les enfants de 6 à 10 ans." },
];

const activites = [
  { id: 1, nom: "Peinture", ageMin: 3, ageMax: 6, horaire: "Lundi 10h" },
  { id: 2, nom: "Chansons et comptines", ageMin: 2, ageMax: 5, horaire: "Mardi 9h30" },
  { id: 3, nom: "Jeux de plein air", ageMin: 4, ageMax: 10, horaire: "Mercredi 15h" },
  { id: 4, nom: "Lecture de contes", ageMin: 3, ageMax: 7, horaire: "Jeudi 16h" },
];

app.get("/api/garderie", (req, res) => res.json(garderie));
app.get("/api/services", (req, res) => res.json(services));
app.get("/api/activites", (req, res) => res.json(activites));

app.listen(PORT, () => console.log(`API démarrée sur http://localhost:${PORT}`));
