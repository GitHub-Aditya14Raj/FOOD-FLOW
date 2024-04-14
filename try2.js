function getRecipes() {
    const ingredients = document.getElementById('ingredients').value.trim();
  
    if (ingredients === '') {
      alert('Please enter some ingredients');
      return;
    }
  
    fetch(`https://api.edamam.com/search?q=${encodeURIComponent(ingredients)}&app_id=815a736d&app_key=your api key`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        displayRecipes(data.hits);
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
  }
  
  function displayRecipes(recipes) {
    const recipesContainer = document.getElementById('recipes');
    recipesContainer.innerHTML = '';
  
    if (recipes.length === 0) {
      recipesContainer.innerHTML = '<p>No recipes found.</p>';
      return;
    }
  
    const ul = document.createElement('ul');
    recipes.forEach(recipe => {
      const li = document.createElement('li');
      li.innerHTML = `<a href="${recipe.recipe.url}" target="_blank">${recipe.recipe.label}</a>`;
      ul.appendChild(li);
    });
    recipesContainer.appendChild(ul);
  }
  
