export default function IngredientsList() {
    const ingredientListItems = ingredients.map((ingredient) => (
        <li>{ingredient}</li>
    ));
    
    return (
        <section>
            <h2>Ingredients on hand:</h2>
            <ul className="ingredients-list" aria-live="polite">{ingredientListItems}</ul>
            {ingredients.length > 3 && <div className="get-recipe-container">
                <div>
                    <h3>Ready for a recipe?</h3>
                    <p>Generate a recipe from your list of ingredients.</p>
                    <button>Get a recipe</button>
                </div>
            </div>}
        </section>
    )
}