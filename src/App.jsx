import "./App.css";
import Footter from "./components/Footter";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound"
import ItemDetails from "./pages/ItemDetails";
import About from "./pages/About";
import { useState } from "react";
import allRecipesArr from "./data/recipes.json";

function App() {
  // state
  const [recipesToShow, setRecipesToShow] = useState(allRecipesArr);

  const pageStyle = {
    width: "84vw",
    color: "#04283d"
  }

  return (


    <>
    
      <Navbar />
      <div id="main-container">
        <Sidebar />
        <div style={pageStyle}>
        <Routes>
          <Route path="/" element={<Home recipesToShow={recipesToShow} setRecipesToShow ={setRecipesToShow}/>}></Route>
          <Route path="*" element={<NotFound/>}></Route>
          <Route path="/item-details/:itemId" element={<ItemDetails 
          recipesToShow={recipesToShow} setRecipesToShow ={setRecipesToShow}
          />}></Route>
          <Route path="/about" element={<About/>}></Route>
        </Routes>
        </div>
        </div>

      <Footter />
      
    </>
  );
}

export default App;
