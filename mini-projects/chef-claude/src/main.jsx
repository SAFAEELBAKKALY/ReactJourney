export default function Main()
{
    const ingredients = ["Chicken", "Oregano", "Tomatoes"]
    const ingredientsList = ingredients.map((ingredient) => (<li key={ingredient}>{ingredient}</li>))

    function submitFunction(event) 
    {   event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const newIngredient = formData.get("ingredient")
        ingredients.push(newIngredient)
        console.log(ingredients)
    }
 
    return(
        <main>
            <form 
                className="add-ingredient-form"
                onSubmit={submitFunction}
            >
                <input 
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name='ingredient'
                />
                <button>Add ingredient</button>
            </form>
            <ul>
                {ingredientsList}
            </ul>
        </main>
    )
}