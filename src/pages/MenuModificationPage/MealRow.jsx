import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";

function MealRow({ meal }) {
  return (
    <tr>
      <td>
        <Nav.Link as={Link} to={`/meal/${meal.id.replace(/^0+/, "")}`}>
          {meal.title}
        </Nav.Link>
      </td>
      <td>{meal.country}</td>
      <td>{meal.category}</td>
      <td>
        <Nav.Link as={Link} to={`/meal/modification/${meal.id}`}>
          ✏️
        </Nav.Link>
      </td>
    </tr>
  );
}

export default MealRow;
