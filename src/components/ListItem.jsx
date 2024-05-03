import React from "react";
//import ItemDetails from "../pages/ItemDetails";
import { Link } from "react-router-dom";

function ListItem(props) {
  // destructuring
  const { calories, id, name, servings, image } = props.eachRecipe;
  // estilos
  const pigStyles = {
    fontSize: calories <= 300 ? "16px" : "32px",
  };
  const recipeCardStyles = {
    backgroundColor: "#fff",
    color: "#04283d",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    margin: "8px",
    borderRadius: "8px",
    height: "80px",
  };

  return (
    <div>
      <Link to={`/item-details/${id}`} style={{ textDecoration: "none" }}>
        <div style={recipeCardStyles}>
          <img src={image} alt={name} height="32px" />
          <h4>{name}</h4>
          <p> 👤 {servings}</p>
          <p style={pigStyles}> 🐷 {calories} </p>
        </div>
      </Link>
      <button onClick={() => props.handleDelete(props.index)}> Delete </button>
    </div>
  );
}

export default ListItem;
