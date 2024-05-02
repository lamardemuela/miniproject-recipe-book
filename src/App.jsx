import "./App.css";
import Footter from "./components/Footter";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound"
import ItemDetails from "./pages/ItemDetails";
import About from "./pages/About";

function App() {
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
          <Route path="/" element={<Home />}></Route>
          <Route path="*" element={<NotFound/>}></Route>
          <Route path="/item-details/:itemId" element={<ItemDetails />}></Route>
          <Route path="/about" element={<About/>}></Route>
        </Routes>
        </div>
        </div>

      <Footter />
      
    </>
  );
}

export default App;
