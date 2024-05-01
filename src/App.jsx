import "./App.css";
import Footter from "./components/Footter";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Recipes from "./components/Recipes";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <Navbar />
      <div id="main-container">
        <Sidebar />
        <Home />
      </div>

      <Footter />
    </>
  );
}

export default App;
