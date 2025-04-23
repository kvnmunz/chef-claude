import React from "react";

function Main() {
  const [ingredients, setIngredients] = React.useState([
    "Chicken",
    "Oregano",
    "Tomatoes",
  ]);
  const ingredientListItems = ingredients.map((ingredient) => (
    <li>{ingredient}</li>
  ));

  function handleSubmit(event) {
    const newIngredient = formData.get("ingredient");
    console.log(ingredients);
    setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
  }

  return (
    <main>
      <form action={handleSubmit} className="addIngredientForm">
        <input
          type="text"
          placeholder="e.g. oregano"
          aria-label="Add ingredient"
          name="ingredient"
        />
        <button>Add ingredient</button>
      </form>
      <ul>{ingredientListItems}</ul>
    </main>
  );
}

export default Main;
