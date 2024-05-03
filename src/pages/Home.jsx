
import AddRecipe from "../components/AddRecipe";
import RecipesList from "../components/RecipesList";

export default function Home(props) {
  return (
    <>
      <RecipesList recipesToShow={props.recipesToShow} setRecipesToShow ={props.setRecipesToShow}/>
    </>
  );
}
