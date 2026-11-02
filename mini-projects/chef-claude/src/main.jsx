import React from "react";
import ClaudeRecipe from "./ClaudeRecipe.jsx";
import IngredientsList from "./IngredientsList.jsx";
import { getRecipeFromMistral } from "../ai.js"

export default function Main()
{
    const [ingredients, setIngredients] = React.useState([]);
    const [recipe, setRecipe] = React.useState("");
    
    function addIngredient(formData)
    {
        const newIngredient = formData.get("ingredient")
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
    }

    async function getRecipe()
    {
        const recipeMarkdown = await getRecipeFromMistral(ingredients)
        setRecipe(recipeMarkdown)
    }
 
    return(
        <main>
            <form 
                className="add-ingredient-form"
                action={addIngredient}
            >
                <input 
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name='ingredient'
                />
                <button>Add ingredient</button>
            </form>
            
            {ingredients.length > 0 && <IngredientsList ingredients={ingredients} toggleRecipe={getRecipe}/>}
            {recipe && <ClaudeRecipe recipe={recipe} />}
        </main>
    )
}