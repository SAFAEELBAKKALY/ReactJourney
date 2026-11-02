import React from "react";
import ClaudeRecipe from "./ClaudeRecipe.jsx";
import IngredientsList from "./IngredientsList.jsx";

export default function Main()
{
    const [ingredients, setIngredients] = React.useState(["all the main spices", "pasta", "ground beef", "tomato paste"]);
    const [recipeShown, setRecipeShown] = React.useState([false]);

    function addIngredient(formData)
    {
        const newIngredient = formData.get("ingredient")
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
    }

    function toggleRecipe()
    {
        setRecipeShown(prevRecipe => !prevRecipe)
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
            
            {ingredients.length > 0 && <IngredientsList ingredients={ingredients} toggleRecipe={toggleRecipe}/>}
            {recipeShown && <ClaudeRecipe />}
        </main>
    )
}