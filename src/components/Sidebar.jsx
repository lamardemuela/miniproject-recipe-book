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
        <a href="" style={aStyles}>Home</a>
        <a href="" style={aStyles}>About</a>
    </nav>
  )
}
