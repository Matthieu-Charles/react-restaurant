import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/esm/Button";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { MealsContext } from "../../utils/context/MealsContext";
import MealRow from "./MealRow";

function MenuModificationPage() {
  const { meals, orderAscOrDesc, onSortByNameClick } = useContext(MealsContext);
  const navigate = useNavigate();

  return (
    <>
      <Button className="primary my-4" onClick={() => navigate("/new")}>
        Ajouter un plat
      </Button>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th onClick={() => onSortByNameClick()}>
              Intitulé <span>{orderAscOrDesc === "ASC" ? "🔽" : "🔼"}</span>
            </th>
            <th>Pays d'origine</th>
            <th>Catégorie</th>
          </tr>
        </thead>
        <tbody>
          {meals.map((meal) => (
            <MealRow key={meal.id} meal={meal} />
          ))}
        </tbody>
      </Table>
    </>
  );
}

export default MenuModificationPage;
