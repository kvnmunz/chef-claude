
function Main() {
    let ingredients = ["Chicken", "Oregano","Tomatoes"]
    const ingrMap = ingredients.map(ingr => <li>{ingr}</li>)

    const ingredientsListItems = ingredients.map(ingredient => (
        <li key={ingredient}>{ingredient}</li>
    ))
    
    function handleSubmit(event) {
        event.preventDefault()
        console.log("Form submitted!")
        const formData = new FormData(event.target)
        const newIngredient = formData.get("ingredient")
        console.log(newIngredient)
        ingredients.push(newIngredient)
    }
    
    return (
        <main>
            <form onSubmit={handleSubmit}className="addIngredientForm">
                <input type="text" placeholder="e.g. oregano" aria-label="Add ingredient"/>
                <button>Add ingredient</button>
            </form>
            <ul>
                {ingrMap}
            </ul>
        </main>
    )
}

export default Main