"use client";
import { useEffect, useState } from "react";

const API = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

export default function Services() {
  const [services, setServices] = useState([]);
  const [activites, setActivites] = useState([]);
  const [erreur, setErreur] = useState(false);

  useEffect(() => {
    Promise.all([
      fetch(`${API}/api/services`).then((r) => r.json()),
      fetch(`${API}/api/activites`).then((r) => r.json()),
    ])
      .then(([s, a]) => {
        setServices(s);
        setActivites(a);
      })
      .catch(() => setErreur(true));
  }, []);

  if (erreur) {
    return (
      <section id="services" className="py-5 bg-light">
        <p className="text-center text-danger mb-0">
          Impossible de charger les données. Vérifiez que l'API est démarrée.
        </p>
      </section>
    );
  }

  return (
    <section id="services" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-4">Nos services</h2>
        <div className="row g-4">
          {services.map((s) => (
            <div className="col-12 col-md-4" key={s.id}>
              <div className="card h-100 shadow-sm text-center">
                <div className="card-body">
                  <div className="fs-1">{s.icone}</div>
                  <h5 className="card-title">{s.titre}</h5>
                  <p className="card-text">{s.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <h3 className="text-center mt-5 mb-3">Nos activités</h3>
        <ul className="list-group">
          {activites.map((a) => (
            <li key={a.id} className="list-group-item d-flex justify-content-between align-items-center">
              <span>
                {a.nom} <small className="text-muted">({a.ageMin}-{a.ageMax} ans)</small>
              </span>
              <span className="badge text-bg-warning">{a.horaire}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
