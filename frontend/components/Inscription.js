"use client";
import { useEffect, useState } from "react";
import { API } from "@/lib/api";

const VIDE = {
  parentNom: "",
  telephone: "",
  email: "",
  enfantNom: "",
  enfantAge: "",
  service: "",
  message: "",
};

export default function Inscription() {
  const [ouvert, setOuvert] = useState(false);
  const [form, setForm] = useState(VIDE);
  const [services, setServices] = useState([]);
  const [statut, setStatut] = useState("idle");
  const [erreurs, setErreurs] = useState([]);

  const fermer = () => {
    setOuvert(false);
    setStatut("idle");
    setErreurs([]);
  };

  useEffect(() => {
    const ouvrir = () => setOuvert(true);
    window.addEventListener("ouvrir-inscription", ouvrir);
    return () => window.removeEventListener("ouvrir-inscription", ouvrir);
  }, []);

  useEffect(() => {
    if (!ouvert) return;
    fetch(`${API}/api/services`)
      .then((r) => r.json())
      .then(setServices)
      .catch(() => setServices([]));
    document.body.style.overflow = "hidden";
    const echap = (e) => { if (e.key === "Escape") fermer(); };
    window.addEventListener("keydown", echap);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", echap);
    };
  }, [ouvert]);

  const maj = (champ) => (e) => setForm({ ...form, [champ]: e.target.value });

  async function envoyer(e) {
    e.preventDefault();
    setStatut("envoi");
    setErreurs([]);
    try {
      const r = await fetch(`${API}/api/inscriptions`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await r.json();
      if (!r.ok) {
        setErreurs(data.erreurs ?? ["Une erreur est survenue."]);
        setStatut("idle");
        return;
      }
      setForm(VIDE);
      setStatut("ok");
    } catch {
      setErreurs(["Impossible de contacter le serveur. Vérifiez que l'API est démarrée."]);
      setStatut("idle");
    }
  }

  if (!ouvert) return null;

  return (
    <>
      <div className="modal fade show d-block" tabIndex={-1} role="dialog" onClick={fermer}>
        <div className="modal-dialog modal-dialog-centered modal-lg" onClick={(e) => e.stopPropagation()}>
          <div className="modal-content modal-sun">
            <div className="modal-header border-0 pb-0">
              <h4 className="modal-title">🌲 Inscrire mon enfant</h4>
              <button type="button" className="btn-close" onClick={fermer} aria-label="Fermer"></button>
            </div>

            <div className="modal-body p-4">
              {statut === "ok" ? (
                <div className="text-center py-4">
                  <div style={{ fontSize: "4rem" }}>🎉</div>
                  <h4 className="mt-2">Merci pour votre demande !</h4>
                  <p className="text-secondary">
                    Votre inscription a bien été enregistrée. Nous vous contacterons très bientôt.
                  </p>
                  <button type="button" className="btn btn-sun" onClick={fermer}>Fermer</button>
                </div>
              ) : (
                <form onSubmit={envoyer}>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label className="form-label fw-semibold">Nom du parent *</label>
                      <input className="form-control" required value={form.parentNom} onChange={maj("parentNom")} />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label fw-semibold">Téléphone *</label>
                      <input className="form-control" required placeholder="+216 ..." value={form.telephone} onChange={maj("telephone")} />
                    </div>
                    <div className="col-md-12">
                      <label className="form-label fw-semibold">Email</label>
                      <input type="email" className="form-control" value={form.email} onChange={maj("email")} />
                    </div>
                    <div className="col-md-8">
                      <label className="form-label fw-semibold">Nom de l'enfant *</label>
                      <input className="form-control" required value={form.enfantNom} onChange={maj("enfantNom")} />
                    </div>
                    <div className="col-md-4">
                      <label className="form-label fw-semibold">Âge (ans) *</label>
                      <input type="number" min="0" max="12" className="form-control" required value={form.enfantAge} onChange={maj("enfantAge")} />
                    </div>
                    <div className="col-12">
                      <label className="form-label fw-semibold">Service souhaité</label>
                      <select className="form-select" value={form.service} onChange={maj("service")}>
                        <option value="">Choisir un service...</option>
                        {services.map((s) => (
                          <option key={s.id} value={s.titre}>{s.titre}</option>
                        ))}
                      </select>
                    </div>
                    <div className="col-12">
                      <label className="form-label fw-semibold">Message</label>
                      <textarea className="form-control" rows={3} value={form.message} onChange={maj("message")}></textarea>
                    </div>
                  </div>

                  {erreurs.length > 0 && (
                    <div className="alert alert-danger mt-3 mb-0">
                      <ul className="mb-0">
                        {erreurs.map((er, i) => (<li key={i}>{er}</li>))}
                      </ul>
                    </div>
                  )}

                  <div className="d-flex justify-content-end gap-2 mt-4">
                    <button type="button" className="btn btn-ghost" onClick={fermer}>Annuler</button>
                    <button type="submit" className="btn btn-sun" disabled={statut === "envoi"}>
                      {statut === "envoi" ? "Envoi..." : "Envoyer l'inscription"}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="modal-backdrop fade show"></div>
    </>
  );
}
