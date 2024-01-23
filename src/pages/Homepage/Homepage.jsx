import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

function Homepage() {
  return (
    <div className="my-5">
      <Carousel>
        <Carousel.Item>
          <img src="src\assets\carr1_crop.jpg" alt="" />
        </Carousel.Item>
        <Carousel.Item>
          <img src="/src/assets/carr2_crop.jpg" alt="" />
        </Carousel.Item>
        <Carousel.Item>
          <img src="/src/assets/carr3_crop.jpg" alt="" />
        </Carousel.Item>
      </Carousel>
      <div className="container d-flex justify-content-center">
        <Nav.Link as={Link} to="/commande">
          <Button className="my-3 btn-secondary">Passer Commande !</Button>
        </Nav.Link>
      </div>
    </div>
  );
}

export default Homepage;
