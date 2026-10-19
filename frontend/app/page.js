export default function Home() {
  return (
    <>
      {/* NAVBAR */}
      <nav className="navbar navbar-expand-lg bg-warning-subtle sticky-top">
        <div className="container">
          <a className="navbar-brand d-flex align-items-center fw-bold" href="#">
            <span className="fs-3 me-2">🌞</span> Les Petits Soleils
          </a>
          <button className="navbar-toggler" type="button"
            data-bs-toggle="collapse" data-bs-target="#menu">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="menu">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><a className="nav-link" href="#accueil">Accueil</a></li>
              <li className="nav-item"><a className="nav-link" href="#services">Services</a></li>
              <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <header id="accueil" className="py-5">
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-md-6">
              <h1 className="display-5 fw-bold">Un environnement sûr et joyeux pour votre enfant</h1>
              <p className="lead">
                Une équipe bienveillante, des activités éducatives et un cadre
                chaleureux pour accompagner chaque enfant dans son éveil.
              </p>
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

      {/* SERVICES */}
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

      <footer id="contact" className="py-4 text-center bg-warning-subtle">
        <p className="mb-0">📞 +216 00 000 000 — contact@petitssoleils.tn</p>
      </footer>
    </>
  );
}
