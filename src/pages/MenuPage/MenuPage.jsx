import { useContext } from "react";
import { MealsContext } from "../../utils/context/MealsContext";
import MealCard from "./MealCard";
import Cart from "./Cart";

function MenuPage() {
  const { meals } = useContext(MealsContext);

  return (
    <div className="container my-5">
      <div className="row">
        <div className="d-flex justify-content-beetween flex-wrap col-9">
          {meals.map((meal) => (
            <MealCard key={meal.id} meal={meal} />
          ))}
        </div>
        <div className="col-3 sticky-top">
          <Cart />
        </div>
      </div>
    </div>
  );
}

export default MenuPage;
