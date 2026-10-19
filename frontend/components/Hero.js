"use client";
import { useEffect, useState } from "react";

const API = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

export default function Hero() {
  const [garderie, setGarderie] = useState(null);

  useEffect(() => {
    fetch(`${API}/api/garderie`)
      .then((r) => r.json())
      .then(setGarderie)
      .catch(() => setGarderie(null));
  }, []);

  return (
    <header id="accueil" className="py-5">
      <div className="container">
        <div className="row align-items-center g-4">
          <div className="col-md-6">
            <h1 className="display-5 fw-bold">{garderie?.slogan ?? "Bienvenue"}</h1>
            <p className="lead">{garderie?.description ?? ""}</p>
            <a href="#contact" className="btn btn-warning btn-lg">Inscrire mon enfant</a>
          </div>
          <div className="col-md-6">
            <img
              src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800"
              alt="Enfants qui jouent" className="img-fluid rounded-4 shadow" />
          </div>
        </div>
      </div>
    </header>
  );
}
