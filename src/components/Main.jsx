import React from "react";
import IngredientsList from "./IngredientsList";
import ClaudeRecipe from "./Recipe";
import { getRecipeFromChefClaude, getRecipeSuggestions } from "../ai";
import RecipeSuggestions from "./RecipeSuggestions";

function Main() {
  const [ingredients, setIngredients] = React.useState(
    ["chicken", "all the main spices", "corn", "heavy cream", "pasta"]
  )

  const [recipe, setRecipe] = React.useState("")

  async function getRecipe() {
    const recipeMarkdown = await getRecipeFromChefClaude(ingredients)
    setRecipe(recipeMarkdown)
  }

  const [suggestions, setSuggestions] = React.useState({})

  async function getSuggestions() {
    const recipeSuggestions = await getRecipeSuggestions(ingredients)
    setSuggestions(recipeSuggestions)
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
      {ingredients.length > 3 && <IngredientsList ingredients={ingredients} getSuggestions={getSuggestions} />}
      {suggestions.length > 1 && <RecipeSuggestions suggestions={suggestions} getRecipe={getRecipe} />}
      {recipe && <ClaudeRecipe recipe={recipe} />}
    </main>
  );
}

export default Main;
