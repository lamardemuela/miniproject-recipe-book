import React from "react";
//import ItemDetails from "../pages/ItemDetails";

function ListItem(props) {
  // destructuring
  const {calories, id, name, servings, image} = props.eachRecipe
  console.log(props)
  // estilos
  const pigStyles = {
    fontSize: calories <= 300 ? "16px" : "32px",
  };

  

  

  return (
    <>
      <img src={image} alt={name} height="32px" />
      <h4>{name}</h4>
      <p> 👤 {servings}</p>
      <p style={pigStyles}> 🐷 {calories} </p>
      <button onClick={() => props.handleDelete(props.index)}> Delete </button>
    </>
  );
}

export default ListItem;
