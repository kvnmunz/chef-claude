import React from "react";

function Main() {
  const [ingredients, setIngredients] = React.useState([]);
  const ingredientListItems = ingredients.map((ingredient) => (
    <li>{ingredient}</li>
  ));

  function addIngredient(formData) {
    const newIngredient = formData.get("ingredient");
    setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
  }

  function hasIngredients() {
    if(ingredients.length > 0 ) {
        return true
    } else {
        return false
    }
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
      {hasIngredients() && <section>
        <h2>Ingredients on hand:</h2>
        <ul className="ingredients-list" aria-live="polite">{ingredientsListItems}</ul>
        <div className="get-recipe-container">
            <div>
              <h3>Ready for a recipe?</h3>
              <p>Generate a recipe from your list of ingredients.</p>
            </div>
            <button>Get a recipe</button>
        </div>
      </section>}
    </main>
  );
}

export default Main;
