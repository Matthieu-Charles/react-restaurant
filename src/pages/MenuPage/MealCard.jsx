import { useContext } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/esm/Button";
import { CartContext } from "../../utils/context/CartContext";

function MealCard({ meal }) {
  const { onAddItemToCart } = useContext(CartContext);

  return (
    <Card
      className="card-meal"
      onClick={() => {
        onAddItemToCart(meal);
      }}
    >
      <Card.Img variant="top" src={meal?.imageLink} />
      <Card.Body>
        <Card.Title>{meal?.title}</Card.Title>
        <Card.Text>{meal?.presentation}</Card.Text>
      </Card.Body>
      <Card.Footer>
        Ingrédients:
        {meal?.ingredients.map((ingredient) => (
          <Button
            key={ingredient}
            className="btn-sm btn-secondary p-1 mx-1 my-1"
          >
            {ingredient}
          </Button>
        ))}
      </Card.Footer>
    </Card>
  );
}

export default MealCard;
