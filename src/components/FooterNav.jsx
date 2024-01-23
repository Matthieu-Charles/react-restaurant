import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../utils/context/authentication/AuthProvider";

function FooterNav() {
  const { user, logOut, loading } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 mt-4 px-4 border-top bg-light">
      <p className="col-md-4 mb-0 text-muted">© 2024 Thynk Cafe</p>

      <ul className="nav col-md-6 justify-content-end">
        <li className="nav-item">
          <Link to="/accueil" className="nav-link px-2 text-muted">
            Accueil
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/presentation" className="nav-link px-2 text-muted">
            Présentation
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/carte" className="nav-link px-2 text-muted">
            Carte
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/localisation" className="nav-link px-2 text-muted">
            Localisation
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/" className="nav-link px-2 text-muted">
            Plan du site
          </Link>
        </li>
        {user && (
          <li className="nav-item">
            <Link to="/gestion" className="nav-link px-2 text-muted">
              Gestion des stocks
            </Link>
          </li>
        )}
      </ul>
    </footer>
  );
}

export default FooterNav;
