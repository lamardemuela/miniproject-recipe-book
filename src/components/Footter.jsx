import githubLogo from "../assets/images/github.png"

export default function Footter() {
    const footerStyles = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#04273D",
        margin: "0px",
        padding: "8px 64px 8px 64px",
        position: "relative",
        bottom: "0px"
    }
  return (
    <footer style={footerStyles}>
        <a href="https://github.com/lamardemuela/miniproject-recipe-book">
            <img src={githubLogo} alt="github logo" height="24px"/>
        </a>
    </footer>
  )
}
