import React from "react";

function ListItem(props) {
  // estilos
  const pigStyles = {
    fontSize: props.calories <= 300 ? "16px" : "32px",
  };
  return (
    <>
      <img src={props.image} alt={props.name} height="32px" />
      <h4>{props.name}</h4>
      <p> 👤 {props.servings}</p>
      <p style={pigStyles}> 🐷 {props.calories} </p>
      <button onClick={() => handleDelete(index)}> Delete </button>
    </>
  );
}

export default ListItem;
