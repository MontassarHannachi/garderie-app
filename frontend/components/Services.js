export default function Services() {
  return (
    <section id="services" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-4">Nos services</h2>
        <div className="row g-4">
          <div className="col-12 col-md-4">
            <div className="card h-100 shadow-sm text-center">
              <div className="card-body">
                <div className="fs-1">🍎</div>
                <h5 className="card-title">Garde à la journée</h5>
                <p className="card-text">Accueil de 7h30 à 18h avec repas équilibrés.</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="card h-100 shadow-sm text-center">
              <div className="card-body">
                <div className="fs-1">🎨</div>
                <h5 className="card-title">Ateliers d'éveil</h5>
                <p className="card-text">Dessin, musique et jeux pour développer la créativité.</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="card h-100 shadow-sm text-center">
              <div className="card-body">
                <div className="fs-1">📚</div>
                <h5 className="card-title">Aide aux devoirs</h5>
                <p className="card-text">Accompagnement scolaire pour les enfants de 6 à 10 ans.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
