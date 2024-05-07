import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Searchbar(props) {
    const [searchValue, setSearchValue] = useState("")

    // event
    const handleSearch = (event) => {
       setSearchValue(event.target.value)

       
        
    }
  return (
    <div>
        <input type="text" value={searchValue} onChange={handleSearch} placeholder='Buscar cerdirreceta'/>
        {props.recipesToShow
        .filter((eachRecipe) => {
            if (searchValue === ""){
                return false
            }else{
                return eachRecipe.name.startsWith(searchValue)
            }
        })
        .slice(0, 3)
        .map((eachRecipe) => {
            return(
                <p key={eachRecipe.id} style={{backgroundColor: "#eef1f8"}}>
                    <Link style={{textDecoration:"none", color: "#4b6e91"}} to={`/item-details/${eachRecipe.id}`} >{eachRecipe.name}</Link>
                </p>
            )
        })}
    </div>
  )
}

export default Searchbar