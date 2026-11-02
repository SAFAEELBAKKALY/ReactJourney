export async function getRecipeFromMistral(ingredientsArr) {
    try {
        const response = await fetch("http://localhost:11434/v1/chat/completions", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                model: "llama3.2:1b",
                messages: [
                    { role: "system", content: "You suggest a recipe from the user's ingredients. Answer in markdown." },
                    { role: "user", content: `I have ${ingredientsArr.join(", ")}. Please give me a recipe!` },
                ],
            }),
        })
        const data = await response.json()
        return data.choices[0].message.content
    } catch (err) {
        console.error(err.message)
    }
}