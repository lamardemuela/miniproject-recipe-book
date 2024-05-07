
import imgLogo from "../assets/images/cerdo.png"
import Searchbar from "./Searchbar"

export default function Navbar(props) {
  
    const navbarStyles = {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#04273D",
        margin: "0px",
        padding: "0 64px 0 64px"
    }
  return (
    <div style={navbarStyles}>
        
        <img src={imgLogo} alt="logo cerdo" height="40px"/>
        <p>Cerdirrecetas</p>
        <Searchbar recipesToShow ={props.recipesToShow} />
    </div>
  )
}
