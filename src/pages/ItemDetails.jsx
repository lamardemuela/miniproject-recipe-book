import React, { useState } from "react";
import { useParams } from "react-router-dom";
import AddRecipe from "../components/AddRecipe";
import EditRecipe from "../components/EditRecipe";

function ItemDetails(props) {
  // params
  const paramsDinamicos = useParams();
  const foundItem = props.recipesToShow.find((eachItem) => {
    return eachItem.id === paramsDinamicos.itemId;
  });
  console.log(foundItem.name)
  // state
  const [isFormShowing, setIsFormShowing]= useState(false)
  // events
  const handleEdit = () => {
    console.log("editando")
    setIsFormShowing(!isFormShowing)
  }

  // estilos
  const pigStyles = {
    fontSize: props.recipesToShow.calories <= 300 ? "16px" : "32px",
  };

  const recipeItemStyles = {
    backgroundColor: "#fff",
    color: "#04283d",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    margin: "8px",
    borderRadius: "8px",
    padding: "24px"
    //height: "80px",
    
  };

  return (
    <div>
      <h3>🐽Información de la receta🐽</h3>
      {foundItem === undefined ? (
        <p>No hay recetas con esa información</p>
      ) : (
        <div style={recipeItemStyles}>
          <img
            src={foundItem.image}
            alt={foundItem.name}
            height="100px"
          />
          <h4>{foundItem.name}</h4>
          <p> 👤 {foundItem.servings}</p>
          <p style={pigStyles}> 🐷 {foundItem.calories} </p>
          
          {isFormShowing === true && (
        <button
          className="primary-btn"
          onClick={handleEdit}
          style={{ backgroundColor: "#fff" }}
        >
          
          ❌ Cerrar Edición
        </button>
      )}
      {isFormShowing === false && (
        <button className="primary-btn" onClick={handleEdit}>
          
          🐷 Editar
        </button>
      )}
          {isFormShowing === true && 
          <EditRecipe
          nameValue = {foundItem.name}
          imgValue = {foundItem.image}
          caloriesValue = {foundItem.calories}
          servingsValue = {foundItem.servings}
          recipesToShow = {props.recipesToShow}
          setRecipesToShow = {props.setRecipesToShow}
          foundItem = {foundItem}
          />}
          
        </div>
      )}
    </div>
  );
}

export default ItemDetails;
