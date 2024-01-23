import { createContext, useState, useEffect } from "react";
import { addItem, modifyItem } from ".";

export const MealsContext = createContext();

function dynamicSort(ascOrDsc) {
  return function compare(a, b) {
    if (a.title < b.title) {
      return ascOrDsc === "ASC" ? -1 : 1;
    }
    if (a.title > b.title) {
      return ascOrDsc === "ASC" ? 1 : -1;
    }
    return 0;
  };
}

export const MealsProvider = ({ children }) => {
  const [call, setCall] = useState(true);
  const [meals, setMeals] = useState([]);
  const [orderAscOrDesc, setMealsAscOrDesc] = useState("ASC");

  useEffect(() => {
    fetch("http://localhost:3000/meals")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setMeals(data);
      });
  }, [call]);

  function onSortByNameClick() {
    setMealsAscOrDesc(orderAscOrDesc === "ASC" ? "DESC" : "ASC");
    const mealsOrdered = meals.sort(dynamicSort(orderAscOrDesc));
    setMeals(mealsOrdered);
  }

  async function onModifyMeal(modifiedMeal) {
    modifiedMeal = mapIngredients(modifiedMeal);
    await modifyItem(
      `http://localhost:3000/meals/${modifiedMeal.id}`,
      modifiedMeal
    );
    setCall(!call);
  }

  async function onCreateMeal(newMeal) {
    newMeal = mapIngredients(newMeal);
    newMeal.imageLink = `src/assets/meal${Math.floor(Math.random() * 7)}.jpg`;
    await addItem("http://localhost:3000/meals", newMeal);
    setCall(!call);
  }

  function mapIngredients(meal) {
    const ingredients = [];
    ingredients.push(meal.ingredient1);
    meal.ingredient2 != "" ? ingredients.push(meal.ingredient2) : "";
    meal.ingredient3 != "" ? ingredients.push(meal.ingredient3) : "";
    meal.ingredient4 != "" ? ingredients.push(meal.ingredient4) : "";
    delete meal.ingredient1;
    delete meal.ingredient2;
    delete meal.ingredient3;
    delete meal.ingredient4;
    meal.ingredients = ingredients;
    return meal;
  }

  return (
    <MealsContext.Provider
      value={{
        meals,
        onSortByNameClick,
        orderAscOrDesc,
        onModifyMeal,
        onCreateMeal,
        call,
      }}
    >
      {children}
    </MealsContext.Provider>
  );
};
