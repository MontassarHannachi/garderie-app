export default function Hero() {
  return (
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
  );
}
