document.getElementById('recipe-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const ingredients = document.getElementById('ingredients').value;
    const instructions = document.getElementById('instructions').value;

    if (name && ingredients && instructions) {
        const recipe = { name, ingredients, instructions };

        fetch('/api/recipes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(recipe)
        })
        .then(response => response.json())
        .then(data => {
            alert('Recipe submitted successfully!');
            document.getElementById('recipe-form').reset();
        })
        .catch(error => console.error('Error:', error));
    } else {
        alert('Please fill out all fields.');
    }
});
