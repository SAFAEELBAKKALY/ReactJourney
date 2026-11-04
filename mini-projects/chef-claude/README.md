# Chef Claude

A recipe assistant built with React as part of my [React Journey](../../) learning project. The user enters the ingredients they have, and an AI model suggests a recipe.

## Preview

![Chef Claude Preview]
<img width="1347" height="596" alt="image" src="https://github.com/user-attachments/assets/30aeb64d-5707-40cc-a41e-e88b31e11e74" />
<img width="1352" height="595" alt="image" src="https://github.com/user-attachments/assets/8d84d407-1748-4f95-85c7-14dd6c3b2661" />


## About

This mini-project practices React state and asynchronous code. Ingredients are added through a form and stored in state. When enough ingredients are listed, a button sends them to a language model, and the recipe it returns (in markdown) is rendered on the page.

The AI runs locally with [Ollama](https://ollama.com), so no API key or paid credits are needed.

## Concepts Practiced

- `useState` for the ingredients list and the generated recipe
- Form handling with a form `action` and `FormData`
- Conditional rendering (`&&`) to show sections only when needed
- Splitting the UI into components (`Header`, `IngredientsList`, `ClaudeRecipe`)
- Async functions with `async/await` and `fetch`
- Rendering markdown with `react-markdown`

## Tech Stack

- React
- Vite
- Ollama (`llama3.2:1b`)
- react-markdown
- CSS

## Getting Started

1. Install [Ollama](https://ollama.com) and download the model:

```bash
ollama pull llama3.2:1b
```

2. Make sure Ollama is running in the background.

3. Install and start the project:

```bash
npm install
npm run dev
```

## Notes

The project was first built with a hosted model through Hugging Face, but its free inference credits ran out, so I switched to a local model. The API call lives in a single file (`ai.js`), which makes it easy to swap the model or provider.

## Author

**Safae El Bakkaly** — Full Stack Web Developer
[GitHub](https://github.com/SAFAEELBAKKALY) · [LinkedIn](https://linkedin.com/in/safae-el-bakkaly)
