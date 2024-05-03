import React, { useState } from "react";
import ItemDetails from "../pages/ItemDetails";

function EditRecipe(props) {
  // States
  const [nameValue, setNameValue] = useState(props.nameValue);
  
  const [imgValue, setImgValue] = useState(props.imgValue);
  const [caloriesValue, setCaloriesValue] = useState(props.caloriesValue);
  const [servingsValue, setServingValue] = useState(props.servingsValue);

  // event
  const handleNameChange = (event) => {
    setNameValue(event.target.value);
  };

  const handleImgValueChange = (event) => {
    setImgValue(event.target.value);
  };

  const handleCaloriesValueChange = (event) => {
    setCaloriesValue(event.target.value);
  };

  const handleServingsValueChange = (event) => {
    setServingValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // actualizamos el componente
    const updatedRecipe = {
        name: nameValue,
        calories: caloriesValue,
        image: imgValue,
        servings: servingsValue,
      };
      
      console.log(props.foundItem)
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre
          <input
            name="name"
            type="text"
            value={nameValue}
            onChange={handleNameChange}
          />
        </label>
        <label>
          Imagen
          <input
            name="image"
            type="url"
            value={imgValue}
            onChange={handleImgValueChange}
          />
        </label>
        <label>
          Calorías
          <input
            name="calorias"
            type="number"
            value={caloriesValue}
            onChange={handleCaloriesValueChange}
          />
        </label>
        <label>
          ¿Para cuántos gorrinos es esta receta?
          <input
            name="comensales"
            type="number"
            value={servingsValue}
            onChange={handleServingsValueChange}
          />
        </label>

        <button type="submit"> ✏️  Guardar Cerdicambios </button>
      </form>
    </div>
  );
}

export default EditRecipe;
