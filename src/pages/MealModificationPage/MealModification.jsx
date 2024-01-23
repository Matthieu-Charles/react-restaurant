import { useContext, useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import { MealsContext } from "../../utils/context/MealsContext";
import { useNavigate, useParams } from "react-router-dom";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
import { getItem } from "../../utils/context";

function MealModification() {
  const { id } = useParams("id");
  const { onModifyMeal } = useContext(MealsContext);
  const [meal, setMeal] = useState([]);

  useEffect(() => {
    getItem("http://localhost:3000/meals", id).then((data) => {
      setMeal(data);
      reset(data);
    });
  }, []);

  const navigate = useNavigate();
  const handleOnClick = () => navigate("/carte");

  const onValid = (data) => {
    data.id = id;
    onModifyMeal(data);
    handleOnClick();
  };
  const onError = (errors) => {
    console.log("Errors: ", errors);
  };

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();

  return (
    <div className="mt-4 w-50 m-auto">
      <Form onSubmit={handleSubmit(onValid, onError)}>
        <div className="row my-3">
          <div className="col">
            <Form.Label>Titre*</Form.Label>
            <Form.Control
              {...register("title", {})}
              defaultValue={meal.title || ""}
            />
          </div>
        </div>

        <div className="row my-3">
          <div className="col">
            <Form.Label>Pays*</Form.Label>
            <Form.Control
              {...register("country", {})}
              defaultValue={meal.country || ""}
            />
          </div>
        </div>

        <div className="row my-3">
          <div className="col">
            <Form.Label>Présentation*</Form.Label>
            <Form.Control
              {...register("presentation", {})}
              defaultValue={meal.presentation || ""}
            />
          </div>
        </div>

        <div className="row my-3">
          <div className="col-3">
            <Form.Label>Ingrédient 1*</Form.Label>
            <Form.Control
              {...register("ingredient1")}
              defaultValue={meal.ingredients ? meal.ingredients[0] : ""}
            />
          </div>
          <div className="col-3">
            <Form.Label>Ingrédient 2</Form.Label>
            <Form.Control
              {...register("ingredient2")}
              defaultValue={meal.ingredients ? meal.ingredients[1] : ""}
            />
          </div>
          <div className="col-3">
            <Form.Label>Ingrédient 3</Form.Label>
            <Form.Control
              {...register("ingredient3")}
              defaultValue={meal.ingredients ? meal.ingredients[2] : ""}
            />
          </div>
          <div className="col-3">
            <Form.Label>Ingrédient 4</Form.Label>
            <Form.Control
              {...register("ingredient4")}
              defaultValue={meal.ingredients ? meal.ingredients[3] : ""}
            />
          </div>
        </div>

        <div className="row my-3">
          <div className="col-6">
            <Form.Label>Prix*</Form.Label>
            <Form.Control
              {...register("price")}
              defaultValue={meal.price || ""}
            />
          </div>
          <div className="col-6">
            <Form.Label>Categorie*</Form.Label>
            <Form.Select
              {...register("category", {})}
              defaultValue={meal.category || "entree"}
            >
              <option>Sélectionner la catégorie</option>
              <option value="entree">Entrée</option>
              <option value="plat">Plat</option>
              <option value="dessert">Dessert</option>
            </Form.Select>
          </div>
        </div>

        <Button className="mt-4" variant="primary" type="submit">
          Valider Modification plat
        </Button>
      </Form>
    </div>
  );
}

export default MealModification;
