"use client";
import { useEffect, useState } from "react";
import { API } from "@/lib/api";

export default function Hero() {
  const [garderie, setGarderie] = useState(null);

  useEffect(() => {
    fetch(`${API}/api/garderie`)
      .then((r) => r.json())
      .then(setGarderie)
      .catch(() => setGarderie(null));
  }, []);

  return (
    <header id="accueil" className="hero">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-6">
            <span className="pill">✨ Inscriptions ouvertes</span>
            <h1 className="display-4 mt-3">
              {garderie?.slogan ?? "Bienvenue chez nous"}
            </h1>
            <p className="lead mb-4">{garderie?.description ?? ""}</p>
            <div className="d-flex flex-wrap gap-3 mb-4">
              <a href="#contact" className="btn btn-sun btn-lg">Inscrire mon enfant</a>
              <a href="#services" className="btn btn-ghost btn-lg">Nos services</a>
            </div>
            <div>
              <span className="pill">🛡️ Lieu sécurisé</span>
              <span className="pill">🍎 Repas équilibrés</span>
              <span className="pill">👩‍🏫 Équipe qualifiée</span>
            </div>
          </div>
          <div className="col-lg-6">
            <img
              src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=900"
              alt="Enfants qui jouent"
              className="img-fluid hero-img" />
          </div>
        </div>
      </div>
    </header>
  );
}
