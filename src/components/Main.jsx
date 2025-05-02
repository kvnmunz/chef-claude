import React from "react";
import IngredientsList from "./components/IngredientsList"
import Recipe from "./components/Recipe"

function Main() {
  const [ingredients, setIngredients] = React.useState(
    ["chicken", "all the main spices", "corn", "heavy cream", "pasta"]
  )

  const [recipe, setRecipe] = React.useState("")

  async function getRecipe() {
    const recipeMarkdown = await getRecipeFromChefClaude(ingredients)
    setRecipe(recipeMarkdown)
  }

  function addIngredient(formData) {
    const newIngredient = formData.get("ingredient");
    setIngredients(prevIngredients => [...prevIngredients, newIngredient]);
  }

  return (
    <main>
      <form action={addIngredient} className="addIngredientForm">
        <input
          type="text"
          placeholder="e.g. oregano"
          aria-label="Add ingredient"
          name="ingredient"
        />
        <button>Add ingredient</button>
      </form>
      {ingredients.length > 0 && <IngredientsList ingredients={ingredients} getRecipe={getRecipe} />}
      {recipe && <Recipe recipe={recipe} />}
    </main>
  );
}

export default Main;
