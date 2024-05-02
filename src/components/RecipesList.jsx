import React from "react";
import { useState } from "react";
import allRecipesArr from "../data/recipes.json";
import ListItem from "./ListItem";
import { Link } from 'react-router-dom'

function List() {
  // estilos
  

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

  // States
  const [recipesToShow, setRecipesToShow] = useState(allRecipesArr);

  // Events
  const handleDelete = (indexToDelete) => {
    console.log("clickando")
    const clone = JSON.parse(JSON.stringify(recipesToShow));
    clone.splice(indexToDelete, 1);
    console.log(clone)
    setRecipesToShow(clone);
  };

  return (
    <>
      {recipesToShow.map((eachRecipe, index) => {
        return (
          <Link style={{textDecoration: "none"}}key={index} to={`/item-details/${eachRecipe.id}`}>
          <div style={recipeCardStyles}>
            
            <ListItem eachRecipe={eachRecipe} handleDelete= {handleDelete} index={index}/>
            
          </div>
          </Link>
        );
      })}
    </>
  );
}

export default List;
