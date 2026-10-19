"use client";
import { useEffect, useState } from "react";
import { API } from "@/lib/api";

const COULEURS = ["#ff9f1c", "#2ec4b6", "#4cc9f0", "#ff6b6b"];

export default function Activites() {
  const [activites, setActivites] = useState([]);
  const [erreur, setErreur] = useState(false);

  useEffect(() => {
    fetch(`${API}/api/activites`)
      .then((r) => r.json())
      .then(setActivites)
      .catch(() => setErreur(true));
  }, []);

  return (
    <section id="activites" className="py-5" style={{ background: "#fff" }}>
      <div className="container py-4">
        <div className="text-center mb-5">
          <h2 className="section-title display-6">Nos activités</h2>
          <p className="section-sub">Des moments ludiques et éducatifs toute la semaine.</p>
        </div>

        {erreur && (
          <p className="text-center text-danger">
            Impossible de charger les activités. Vérifiez que l'API est démarrée.
          </p>
        )}

        <div className="row g-4">
          {activites.map((a, i) => (
            <div className="col-12 col-md-6" key={a.id}>
              <div className="activity-card d-flex justify-content-between align-items-center"
                style={{ borderLeftColor: COULEURS[i % COULEURS.length] }}>
                <div>
                  <h5 className="mb-1">{a.nom}</h5>
                  <small className="text-secondary">👶 {a.ageMin} - {a.ageMax} ans</small>
                </div>
                <span className="badge-soft">🕒 {a.horaire}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
