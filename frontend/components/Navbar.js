export default function Navbar() {
  return (
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
  );
}
