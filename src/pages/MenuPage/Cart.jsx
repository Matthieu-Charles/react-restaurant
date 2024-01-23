import { useContext } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CloseButton from "react-bootstrap/CloseButton";
import ListGroup from "react-bootstrap/ListGroup";
import { CartContext } from "../../utils/context/CartContext";
import { Link } from "react-router-dom";

function Cart({ isOrderContext }) {
  const {
    cartItems,
    cartValue,
    onDeleteItemOfCart,
    onModifyItemQuantityOfCart,
  } = useContext(CartContext);

  return (
    <Card>
      <Card.Header>Votre Panier</Card.Header>
      <Card.Body>
        <ListGroup variant="flush">
          {cartItems?.map((cartItem) => (
            <ListGroup.Item key={cartItem?.id} className="d-flex container">
              <div>
                <CloseButton
                  className="btn-sm"
                  onClick={() => onDeleteItemOfCart(cartItem)}
                ></CloseButton>
              </div>
              <div>
                <Button
                  className="btn-sm"
                  onClick={() => onModifyItemQuantityOfCart(cartItem, "plus")}
                >
                  ➕
                </Button>
                {cartItem.quantity > 0 && (
                  <Button
                    className="btn-sm"
                    onClick={() =>
                      onModifyItemQuantityOfCart(cartItem, "minus")
                    }
                  >
                    ➖
                  </Button>
                )}
              </div>
              <div>
                <span className="bold">{cartItem?.quantity} x </span>
                {cartItem?.title}
              </div>
            </ListGroup.Item>
          ))}
        </ListGroup>
        <div className="mt-4">
          <p className="total text-end pe-2">Total: {cartValue} €</p>
        </div>
        {isOrderContext ? (
          ""
        ) : (
          <>
            <div className="d-flex justify-content-center py-3">
              <Link to="/commande">
                <Button variant="primary">Passer la commande</Button>
              </Link>
            </div>
          </>
        )}
      </Card.Body>
    </Card>
  );
}

export default Cart;
