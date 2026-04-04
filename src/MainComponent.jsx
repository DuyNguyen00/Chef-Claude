import React from "react"
import ClaudeRecipe from "./ClaudeRecipe"
import IngredientsList from "./IngredientsList"

export default function MainComponent() {
    // State to hold the list of ingredients
    const [ingredients, setIngredients] = React.useState([])
    const [recipeShown , setRecipeShown] = React.useState(false)

    // Create list items for each ingredient in the state
    const ingredientsListItems = ingredients.map(ingredient => (
        <li key={ingredient}>{ingredient}</li>
    ))

    function toggleRecipeShown() {
        setRecipeShown(prevShown => !prevShown)
    }

    // Handler for form submission to add a new ingredient
    function addIngredient(formData) {
        const newIngredient = formData.get("ingredient")
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
    }

    // Render the form and the list of ingredients
    return (
        <main>
            <form className="add-ingredient-form" action={addIngredient}>
                <input
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add Ingredients"
                    name="ingredient"
                />
                <button>Add Ingredients</button>
            </form>
            {
                ingredients.length > 0 && <IngredientsList />
            }
            {
                recipeShown && <ClaudeRecipe />
            }
        </main>
    )
}