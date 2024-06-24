document.getElementById('search').addEventListener('input', function() {
    const query = this.value.toLowerCase();

    fetch('/api/recipes')
        .then(response => response.json())
        .then(data => {
            const filteredRecipes = data.filter(recipe => 
                recipe.name.toLowerCase().includes(query) ||
                recipe.ingredients.toLowerCase().includes(query)
            );

            displayRecipes(filteredRecipes);
        })
        .catch(error => console.error('Error:', error));
});

function displayRecipes(recipes) {
    const recipesList = document.getElementById('recipes-list');
    recipesList.innerHTML = '';

    recipes.forEach(recipe => {
        const recipeElement = document.createElement('div');
        recipeElement.classList.add('recipe');
        recipeElement.innerHTML = `
            <h3>${recipe.name}</h3>
            <p><strong>Ingredients:</strong> ${recipe.ingredients}</p>
            <p><strong>Instructions:</strong> ${recipe.instructions}</p>
        `;

        recipesList.appendChild(recipeElement);
    });
}

// Initial fetch to display all recipes
fetch('/api/recipes')
    .then(response => response.json())
    .then(data => displayRecipes(data))
    .catch(error => console.error('Error:', error));
