import React from "react";
import { useState } from "react";
import ListItem from "./ListItem";
import AddRecipe from "./AddRecipe";

function List(props) {
  // States
  const [isFormShowing, setIsFormShowing] = useState(false);

  // Events
  const handleDelete = (indexToDelete) => {
    const clone = JSON.parse(JSON.stringify(props.recipesToShow));
    clone.splice(indexToDelete, 1);
    props.setRecipesToShow(clone);
  };

  const handleShowForm = () => {
    setIsFormShowing(!isFormShowing);
  };

  return (
    <>
      {isFormShowing === true && (
        <button
          id="primary-btn"
          onClick={handleShowForm}
          style={{ backgroundColor: "#fff" }}
        >
          {" "}
          ❌ Cerrar Cerdirreceta{" "}
        </button>
      )}
      {isFormShowing === false && (
        <button id="primary-btn" onClick={handleShowForm}>
          {" "}
          🐷+ Añadir Cerdirreceta{" "}
        </button>
      )}

      {isFormShowing === true && (
        <AddRecipe
          recipesToShow={props.recipesToShow}
          setRecipesToShow={props.setRecipesToShow}
        />
      )}

      {props.recipesToShow.map((eachRecipe, index) => {
        return (
          <ListItem
            key={index}
            eachRecipe={eachRecipe}
            handleDelete={handleDelete}
            index={index}
          />
        );
      })}
    </>
  );
}

export default List;
