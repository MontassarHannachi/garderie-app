"use client";
import { useEffect, useState } from "react";
import { API } from "@/lib/api";
import { ouvrirInscription } from "@/lib/inscription";

export default function Navbar() {
  const [garderie, setGarderie] = useState(null);

  useEffect(() => {
    fetch(`${API}/api/garderie`)
      .then((r) => r.json())
      .then(setGarderie)
      .catch(() => setGarderie(null));
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-glass sticky-top py-3">
      <div className="container">
        <a className="navbar-brand d-flex align-items-center fw-bold fs-4" href="#accueil">
          <span className="me-2">🌞</span>
          {garderie?.nom ?? "Garderie"}
        </a>
        <button className="navbar-toggler border-0" type="button"
          data-bs-toggle="collapse" data-bs-target="#menu" aria-label="Menu">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="menu">
          <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-2">
            <li className="nav-item"><a className="nav-link" href="#accueil">Accueil</a></li>
            <li className="nav-item"><a className="nav-link" href="#services">Services</a></li>
            <li className="nav-item"><a className="nav-link" href="#activites">Activités</a></li>
            <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
            <li className="nav-item ms-lg-2">
              <button className="btn btn-sun btn-sun-sm" type="button" onClick={ouvrirInscription}>Inscription</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
