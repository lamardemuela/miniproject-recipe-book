import imgLogo from "../assets/images/cerdo.png"

export default function Navbar() {
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
    </div>
  )
}
