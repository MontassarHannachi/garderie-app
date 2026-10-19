"use client";
import { useEffect, useState } from "react";
import { API } from "@/lib/api";

const FONDS = ["#fff0d9", "#d9f5f2", "#e0f4fd"];

export default function Services() {
  const [services, setServices] = useState([]);
  const [erreur, setErreur] = useState(false);

  useEffect(() => {
    fetch(`${API}/api/services`)
      .then((r) => r.json())
      .then(setServices)
      .catch(() => setErreur(true));
  }, []);

  return (
    <section id="services" className="py-5">
      <div className="container py-4">
        <div className="text-center mb-5">
          <h2 className="section-title display-6">Nos services</h2>
          <p className="section-sub">Tout ce qu'il faut pour que votre enfant s'épanouisse.</p>
        </div>

        {erreur && (
          <p className="text-center text-danger">
            Impossible de charger les services. Vérifiez que l'API est démarrée.
          </p>
        )}

        <div className="row g-4">
          {services.map((s, i) => (
            <div className="col-12 col-md-4" key={s.id}>
              <div className="card service-card h-100 text-center">
                <div className="card-body">
                  <div className="icon-circle" style={{ background: FONDS[i % FONDS.length] }}>
                    {s.icone}
                  </div>
                  <h5 className="card-title">{s.titre}</h5>
                  <p className="card-text text-secondary">{s.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
