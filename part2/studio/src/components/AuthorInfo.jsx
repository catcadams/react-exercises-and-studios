import recipedata from "./recipe.json";
import "./styling.css";

function AuthorInfo() {
  const recipeAuthor = recipedata.map((recipe) => (
    <div key={recipe.name}>{recipe.author}</div>
  ));
  const recipeAuthorImage = recipedata.map((recipe) => (
    <div key={recipe.name}>
      <img
        src={recipe.authorImage}
        alt={recipe.author}
        className="authorImage"
      />
    </div>
  ));
  const recipeWebsite = recipedata.map((recipe) => (
    <div key={recipe.name}>
      <a href={recipe.website}>{recipe.website}</a>
    </div>
  ));
  return (
    <div>
      {recipeAuthorImage}
      {recipeAuthor}
      {recipeWebsite}
    </div>
  );
}

export default AuthorInfo;

//import styles.css
//import json file for author info
//image, name, website
//css for styling image
