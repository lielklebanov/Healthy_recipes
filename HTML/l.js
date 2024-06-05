document.addEventListener('DOMContentLoaded', () => {
    const recipeForm = document.getElementById('recipeForm');
    const recipesContainer = document.getElementById('recipesContainer');

    recipeForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const recipeName = document.getElementById('recipeName').value;
        const recipeIngredients = document.getElementById('recipeIngredients').value;
        const recipeInstructions = document.getElementById('recipeInstructions').value;
        const recipePhoto = document.getElementById('recipePhoto').files[0];

        addRecipe(recipeName, recipeIngredients, recipeInstructions, recipePhoto);

        // Reset form
        recipeForm.reset();
    });

    function addRecipe(name, ingredients, instructions, photo) {
        const recipeCard = document.createElement('div');
        recipeCard.classList.add('recipe-card');

        const photoURL = photo ? URL.createObjectURL(photo) : 'placeholder.jpg';

        recipeCard.innerHTML = `
            <h3>${name}</h3>
            <p><strong>Ingredients:</strong> ${ingredients}</p>
            <p><strong>Instructions:</strong> ${instructions}</p>
            <img src="${photoURL}" alt="${name} Photo">
        `;

        recipesContainer.appendChild(recipeCard);
    }
});
