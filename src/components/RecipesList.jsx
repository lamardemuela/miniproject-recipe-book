import React from "react";
import { useState } from "react";
import ListItem from "./ListItem";
import AddRecipe from "./AddRecipe";
import { useSearchParams } from "react-router-dom";

function List(props) {
  // States
  const [isFormShowing, setIsFormShowing] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  //console.log(searchParams);
  let calories = searchParams.get("calories");
  // Events
  const handleCaloriesChange = (event) => {
    console.log("cambiando calories", event.target.value);
    if (event.target.value === "") {
      setSearchParams();
    } else {
      setSearchParams({ calories: event.target.value });
    }
  };

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
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "32px",
          alignItems: "center",
        }}
      >
        {isFormShowing === true && (
          <button
            className="primary-btn"
            onClick={handleShowForm}
            style={{ backgroundColor: "#fff" }}
          >
            {" "}
            ❌ Cerrar Cerdirreceta{" "}
          </button>
        )}
        {isFormShowing === false && (
          <button className="primary-btn" onClick={handleShowForm}>
            {" "}
            🐷+ Añadir Cerdirreceta{" "}
          </button>
        )}

        <select style={{ height: "24px" }} onChange={handleCaloriesChange} value={calories || ""}>
          <option value=""> Fit - Fat </option>
          <option value="fit"> Cerdirrecetas Fit </option>
          <option value="fat"> Cerdirrecetas Fat </option>
        </select>
      </div>

      {isFormShowing === true && (
        <AddRecipe
          recipesToShow={props.recipesToShow}
          setRecipesToShow={props.setRecipesToShow}
        />
      )}

      {props.recipesToShow
        .filter((eachRecipe) => {
          if (calories === null) {
            return true;
          } else {
            // calories = "fat"
            if(calories === "fit"){

              return eachRecipe.calories < 300
            } else if(calories === "fat") {
              return eachRecipe.calories >= 350
            }
          }
        })
        .map((eachRecipe, index) => {
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
