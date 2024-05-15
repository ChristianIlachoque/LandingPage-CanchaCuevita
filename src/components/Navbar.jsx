import { Link } from "react-scroll";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-dark navbar-expand-lg bg-success fixed-top">
      <div className="container">
        <a className="navbar-brand text-white" href="#">
          Cancha Cuevita
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mb-2 mb-lg-0 ms-auto">
            <li className="nav-item">
              <Link
                className="nav-link"
                activeClass="active"
                to="home"
                aria-current="page"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
              >
                Inicio
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                activeClass="active"
                to="activities"
                aria-current="page"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
              >
                Actividad
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                activeClass="active"
                to="questions"
                aria-current="page"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
              >
                Preguntas Frecuentes
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                activeClass="active"
                to="contact"
                aria-current="page"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
              >
                Contacto
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
