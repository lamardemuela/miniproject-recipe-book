import { Link } from 'react-router-dom'

export default function Sidebar() {
  
const sideBarStyles = {
    backgroundColor: "#fff",
    color: "#04283d",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    padding: "16px",
    textDecoration: "none",
    width: "16vw"
}

const aStyles = {
    textDecoration: "none",
    color: "#04283d",
    fontWeigth: "bold"
}
  return (
    <nav style={sideBarStyles}>
        <Link to="/" style={aStyles}>Home</Link>
        <Link to ="/about" style={aStyles}>About</Link>
    </nav>
  )
}
