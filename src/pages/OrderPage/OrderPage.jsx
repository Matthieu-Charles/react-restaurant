import Cart from "../MenuPage/Cart";
import OrderForm from "./OrderForm";

function OrderPage() {
  return (
    <div className="my-5 container d-flex justify-content-between">
      <div className="col-3">
        <Cart isOrderContext={true} />
      </div>
      <div className="col-7">
        <OrderForm />
      </div>
    </div>
  );
}

export default OrderPage;
