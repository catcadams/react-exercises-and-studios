import recipedata from "./recipe.json";

function RecipeImage() {
  const recipeImage = recipedata.map((recipe) => (
    <div>
      <img
        key={recipe.name}
        src={recipe.recipeImage}
        alt={recipe.name}
        className="recipeImage"
      />
    </div>
  ));
  return recipeImage;
}

export default RecipeImage;

//import json file for the data
//apply css for className recipeImage
