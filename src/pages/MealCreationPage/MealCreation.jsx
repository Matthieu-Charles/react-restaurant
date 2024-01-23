import { useContext } from "react";
import Button from "react-bootstrap/Button";
import { MealsContext } from "../../utils/context/MealsContext";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";

function MealCreation() {
  const { onCreateMeal } = useContext(MealsContext);
  const navigate = useNavigate();

  const onValid = (data) => {
    onCreateMeal(data);
    navigate("/gestion");
  };
  const onError = (errors) => {
    console.log("Errors: ", errors);
  };

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  return (
    <div className="mt-4 w-50 m-auto">
      <Form onSubmit={handleSubmit(onValid, onError)}>
        <div className="row my-3">
          <div className="col">
            <Form.Label>Titre*</Form.Label>
            <Form.Control
              {...register("title", {
                required: true,
                validate: {
                  longEnough: (value) => value.length > 1,
                },
              })}
              placeholder="Entrez le nom du plat"
            />
            {errors.title && errors.title.type === "longEnough" && (
              <p className="error">votre titre n'est pas assez long</p>
            )}
            {errors.title && errors.title.type === "required" && (
              <p className="error">ce champ est obligatoire</p>
            )}
          </div>
        </div>

        <div className="row my-3">
          <div className="col">
            <Form.Label>Pays*</Form.Label>
            <Form.Control
              {...register("country", {
                required: true,
                validate: {
                  longEnough: (value) => value.length > 1,
                },
              })}
              placeholder="Entrez le pays d'origine"
            />
            {errors.country && errors.country.type === "longEnough" && (
              <p className="error">le nom du pays n'est pas assez long</p>
            )}
            {errors.country && errors.country.type === "required" && (
              <p className="error">ce champ est obligatoire</p>
            )}
          </div>
        </div>

        <div className="row my-3">
          <div className="col">
            <Form.Label>Présentation*</Form.Label>
            <Form.Control
              {...register("presentation", {
                required: true,
                validate: {
                  longEnough: (value) => value.length > 1,
                },
              })}
              placeholder="Décrivez le plat"
            />
            {errors.presentation &&
              errors.presentation.type === "longEnough" && (
                <p className="error">la description n'est pas assez longue</p>
              )}
            {errors.presentation && errors.presentation.type === "required" && (
              <p className="error">ce champ est obligatoire</p>
            )}
          </div>
        </div>

        <div className="row my-3">
          <div className="col-3">
            <Form.Label>Ingrédient 1*</Form.Label>
            <Form.Control
              {...register("ingredient1", {
                required: true,
                validate: {
                  longEnough: (value) => value.length > 1,
                },
              })}
            />
            {errors.ingredient1 && errors.ingredient1.type === "required" && (
              <p className="error">ce champ est obligatoire</p>
            )}
          </div>
          <div className="col-3">
            <Form.Label>Ingrédient 2</Form.Label>
            <Form.Control {...register("ingredient2")} />
          </div>
          <div className="col-3">
            <Form.Label>Ingrédient 3</Form.Label>
            <Form.Control {...register("ingredient3")} />
          </div>
          <div className="col-3">
            <Form.Label>Ingrédient 4</Form.Label>
            <Form.Control {...register("ingredient4")} />
          </div>
        </div>

        <div className="row my-3">
          <div className="col-6">
            <Form.Label>Prix*</Form.Label>
            <Form.Control
              {...register("price", {
                required: true,
              })}
              placeholder="Indiquez le prix"
            />
            {errors.presentation && errors.presentation.type === "required" && (
              <p className="error">ce champ est obligatoire</p>
            )}
          </div>
          <div className="col-6">
            <Form.Label>Categorie*</Form.Label>
            <Form.Select
              {...register("category", {
                required: true,
              })}
            >
              <option>Sélectionner la catégorie</option>
              <option value="entree">Entrée</option>
              <option value="plat">Plat</option>
              <option value="dessert">Dessert</option>
            </Form.Select>
            {errors.presentation && errors.presentation.type === "required" && (
              <p className="error">ce champ est obligatoire</p>
            )}
          </div>
        </div>

        <Button className="mt-4" variant="primary" type="submit">
          Créer nouveau plat
        </Button>
      </Form>
    </div>
  );
}

export default MealCreation;
