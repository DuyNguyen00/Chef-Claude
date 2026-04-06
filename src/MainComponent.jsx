import React from "react"
import ClaudeRecipe from "./ClaudeRecipe"
import IngredientsList from "./IngredientsList"
import { getRecipeFromAI } from "./ai"


export default function MainComponent() {
    // State to hold the list of ingredients
    const [ingredients, setIngredients] = React.useState([])

    const [recipe, setRecipe] = React.useState("")

    async function getRecipe() {
       const recipeMarkdown = await getRecipeFromAI(ingredients)
       setRecipe(recipeMarkdown)
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
                ingredients.length > 0 && 
                <IngredientsList ingredients={ingredients} getRecipe={getRecipe} />
            }
            {
                recipe && <ClaudeRecipe recipe={recipe} />
            }
        </main>
    )
}