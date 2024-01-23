import { useContext } from "react";
import { AuthContext } from "../utils/context/authentication/AuthProvider";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Login = () => {
  const { loginUser, loading, user } = useContext(AuthContext);
  const navigate = useNavigate();

  if (user) {
    navigate("/");
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    loginUser(email, password)
      .then((result) => {
        navigate("/");
      })
      .catch((error) => console.log(error.message));

    e.target.reset();
  };

  return (
    <Form onSubmit={handleFormSubmit} className="w-50 m-auto shadow p-3">
      <Form.Group className="mb-3" controlId="email">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Entrez votre mail" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="password">
        <Form.Label>Mot de passe</Form.Label>
        <Form.Control type="password" placeholder="Votre mot de passe" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Se connecter
      </Button>
    </Form>
  );
};

export default Login;
