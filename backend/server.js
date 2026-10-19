const express = require("express");
const fs = require("fs");
const path = require("path");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const garderie = {
  nom: "Petite Forêt",
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

// ---- Inscriptions ----
const INSCRIPTIONS_FILE = path.join(__dirname, "inscriptions.json");
let inscriptions = [];
try {
  inscriptions = JSON.parse(fs.readFileSync(INSCRIPTIONS_FILE, "utf8"));
} catch {
  inscriptions = [];
}

const txt = (v) => String(v ?? "").trim();

app.post("/api/inscriptions", (req, res) => {
  const b = req.body || {};
  const parentNom = txt(b.parentNom);
  const telephone = txt(b.telephone);
  const email = txt(b.email);
  const enfantNom = txt(b.enfantNom);
  const enfantAge = Number(b.enfantAge);
  const erreurs = [];

  if (parentNom.length < 2) erreurs.push("Le nom du parent est obligatoire.");
  if (!/^[+0-9\s]{8,16}$/.test(telephone)) erreurs.push("Le numéro de téléphone est invalide.");
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) erreurs.push("L'adresse email est invalide.");
  if (enfantNom.length < 2) erreurs.push("Le nom de l'enfant est obligatoire.");
  if (b.enfantAge === "" || !Number.isFinite(enfantAge) || enfantAge < 0 || enfantAge > 12) {
    erreurs.push("L'âge de l'enfant doit être compris entre 0 et 12 ans.");
  }
  if (erreurs.length) return res.status(400).json({ erreurs });

  const inscription = {
    id: Date.now(),
    parentNom,
    telephone,
    email,
    enfantNom,
    enfantAge,
    service: txt(b.service),
    message: txt(b.message),
    date: new Date().toISOString(),
  };
  inscriptions.push(inscription);
  fs.writeFileSync(INSCRIPTIONS_FILE, JSON.stringify(inscriptions, null, 2));

  res.status(201).json({ message: "Inscription enregistrée", id: inscription.id });
});

app.listen(PORT, () => console.log(`API démarrée sur http://localhost:${PORT}`));
