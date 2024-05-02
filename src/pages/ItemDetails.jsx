import React from "react";
import ItemsJSON from "../data/recipes.json";
import { useParams } from "react-router-dom";

function ItemDetails() {
  const paramsDinamicos = useParams();

  const foundItemList = ItemsJSON.find((eachItem) => {
    console.log(eachItem);
    return eachItem.id === paramsDinamicos.itemId;
  });

  console.log(foundItemList);
  const pigStyles = {
    fontSize: foundItemList.calories <= 300 ? "16px" : "32px",
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
      {foundItemList === undefined ? (
        <p>No hay recetas con esa información</p>
      ) : (
        <div style={recipeItemStyles}>
          <img
            src={foundItemList.image}
            alt={foundItemList.name}
            height="100px"
          />
          <h4>{foundItemList.name}</h4>
          <p> 👤 {foundItemList.servings}</p>
          <p style={pigStyles}> 🐷 {foundItemList.calories} </p>
        </div>
      )}
    </div>
  );
}

export default ItemDetails;
