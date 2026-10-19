"use client";
import { useEffect, useState } from "react";
import { API } from "@/lib/api";

export default function Contact() {
  const [g, setG] = useState(null);

  useEffect(() => {
    fetch(`${API}/api/garderie`)
      .then((r) => r.json())
      .then(setG)
      .catch(() => setG(null));
  }, []);

  return (
    <footer id="contact" className="footer-dark pt-5">
      <div className="container py-4">
        <div className="row g-4">
          <div className="col-md-4">
            <h4 className="mb-3">🌞 {g?.nom ?? "Garderie"}</h4>
            <p className="muted">{g?.description ?? ""}</p>
          </div>
          <div className="col-md-4">
            <h5 className="mb-3">Contact</h5>
            <p className="mb-2">📍 {g?.adresse ?? "-"}</p>
            <p className="mb-2">📞 <a href={`tel:${g?.telephone ?? ""}`}>{g?.telephone ?? "-"}</a></p>
            <p className="mb-2">✉️ <a href={`mailto:${g?.email ?? ""}`}>{g?.email ?? "-"}</a></p>
          </div>
          <div className="col-md-4">
            <h5 className="mb-3">Horaires</h5>
            <p className="mb-4">🕒 {g?.horaires ?? "-"}</p>
            <a href={`mailto:${g?.email ?? ""}`} className="btn btn-sun">Inscrire mon enfant</a>
          </div>
        </div>
        <hr className="my-4 border-secondary" />
        <p className="text-center muted mb-0">
          © {new Date().getFullYear()} {g?.nom ?? "Garderie"} - Tous droits réservés
        </p>
      </div>
    </footer>
  );
}
