import React, { useState } from "react";

function AddRecipe(props) {
  // States
  const [nameValue, setNameValue] = useState("");
  const [imgValue, setImgValue] = useState("");
  const [caloriesValue, setCaloriesValue] = useState(0);
  const [servingsValue, setServingValue] = useState(0);

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

    // nuevo componente
    const newRecipe = {
      id: String(Math.floor(Math.random() * 900)),
      name: nameValue,
      calories: caloriesValue,
      image: imgValue,
      servings: servingsValue,
    };

    props.setRecipesToShow([...props.recipesToShow, newRecipe]);

    //actualizar los inputs de 0
    setNameValue("")
    setImgValue("")
    setCaloriesValue(0)
    setServingValue(0)
  };



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

        <button type="submit"> 🐷+ Añadir Cerdirreceta </button>
      </form>
    </div>
  );
}

export default AddRecipe;
