export default function RecipeSuggestions(props) {
    // The suggestions from the API are likely coming back as a string, not an array of objects
    // We need to parse it if it's JSON
    let parsedSuggestions = [];
    
    try {
        if (typeof props.suggestions === 'string') {
            parsedSuggestions = JSON.parse(props.suggestions);
        } else {
            parsedSuggestions = props.suggestions;
        }
    } catch (error) {
        console.error("Failed to parse suggestions:", error);
    }
    
    const recipeSuggestionsListItems = Array.isArray(parsedSuggestions) 
        ? parsedSuggestions.map((suggestion, index) => (
            <li key={index}>
                <strong>{suggestion.title}</strong>: {suggestion.description}
            </li>
        ))
        : <li>No valid suggestions available</li>;

    return (
        <section>
            <h2>Recipe suggestions:</h2>
            <ul className="recipe-suggestions-list" aria-live="polite">
                {recipeSuggestionsListItems}
            </ul>
            <button onClick={props.getRecipe} className="get-recipe-button">
                Get full recipe
            </button>
        </section>
    );
}

//{props.ingredients.length > 3 && <div className="get-recipe-suggestions-container">
//<div>
//<h3>Ready for suggestions?</h3>
//<p>Generate recipe suggestions from your list of ingredients.</p>
//</div>
//<button onClick={props.getSuggestions}>Get recipe ideas</button>
//</div>}
