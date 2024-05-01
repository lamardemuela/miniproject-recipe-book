import React from 'react'
import { useState } from "react";
import allRecipesArr from "../data/recipes.json";
import ListItem from './ListItem';

function List() {
    // estilos
  const recipeDivStyles = {
    width: "84vw",
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
    <div style={recipeDivStyles}>
      {recipesToShow.map((eachRecipe, index) => {
        return (
            <div key={index} style={recipeCardStyles}>
                <ListItem id= {eachRecipe.id} image = {eachRecipe.image} name = {eachRecipe.name} calories = {eachRecipe.calories} servings = {eachRecipe.servings}/>
            </div>
        );
      })}
    </div>
  )
}

export default List