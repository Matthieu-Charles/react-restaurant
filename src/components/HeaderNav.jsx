import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../utils/context/CartContext";
import { AuthContext } from "../utils/context/authentication/AuthProvider";
import { ConfettiContext } from "../utils/context/ConfettiContext";

function HeaderNav() {
  const { cartValue } = useContext(CartContext);
  const { user, logOut, loading } = useContext(AuthContext);
  const { confetti, onClickOnSwitch } = useContext(ConfettiContext);

  const navigate = useNavigate();

  const handleSignOut = () => {
    logOut()
      .then(() => {
        navigate("/login");
      })
      .catch((error) => console.error(error));
  };

  return (
    <Navbar expand="lg" className="p-0">
      <Container>
        <Navbar.Brand className="p-0">
          <Link to="/accueil">
            <img
              src="src/assets/logo_restaurant.jpg"
              height="60"
              className="d-inline-block align-top"
              alt="Think Restaurant logo"
            />
          </Link>
        </Navbar.Brand>
        <Form onClick={onClickOnSwitch}>
          <Form.Check type="switch" id="custom-switch" label="" />
        </Form>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Link as={Link} to="/presentation">
              Présentation
            </Nav.Link>
            <Nav.Link as={Link} to="/carte">
              Carte
            </Nav.Link>
            <Nav.Link as={Link} to="/localisation">
              Localisation
            </Nav.Link>
            {user && (
              <Nav.Link as={Link} to="/gestion">
                Gestion
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
        <Nav>
          <Nav.Link as={Link} to="/commande">
            <Button variant="secondary">🛒 Mon Panier : {cartValue}€</Button>
          </Nav.Link>
        </Nav>
        <Nav></Nav>
        {!user && (
          <>
            <Nav.Link as={Link} to="/login">
              <Button variant="primary mx-1">Se connecter</Button>
            </Nav.Link>
            <Nav.Link as={Link} to="/signup">
              <Button variant="secondary mx-1">S'inscrire</Button>
            </Nav.Link>
          </>
        )}
        {user && (
          <Nav.Link as={Link} to="/logout">
            <Button variant="danger" onClick={handleSignOut}>
              Se déconnecter
            </Button>
          </Nav.Link>
        )}
      </Container>
    </Navbar>
  );
}

export default HeaderNav;
