import Recipes from "./Recipes"

export default function Home() {
  const homeStyles = {
    color: "#04283d"
  }
  return (
    <div style={homeStyles}>
      <Recipes />
    </div>
  )
}
