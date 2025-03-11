import Cookie from "../recipes/Cookie";
import Brownie from "../recipes/Brownie";
import CarrotCake from "../recipes/CarrotCake";
import CinnamonRoll from "../recipes/CinnamonRoll";
import WetCake from "../recipes/WetCake";
import { useParams } from "react-router-dom";

function RecipeDetail() {
  const { id } = useParams();

  const recipes = {
    cookie: Cookie,
    brownie: Brownie,
    carrotCake: CarrotCake,
    cinnamonRoll: CinnamonRoll,
    wetCake: WetCake,
  };

  const RecipeComponent = recipes[id]; // dynamic component selection

  if (!RecipeComponent) return <h2>Recipe couldn't found</h2>;

  return <RecipeComponent />;
}

export default RecipeDetail;
