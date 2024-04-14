function getNutrition() {
    const ingredient = document.getElementById('ingredient').value;
    const url = `https://api.edamam.com/api/nutrition-data?app_id=ba45a493&app_key=42cb707d8108636d275ae12dbc67c836&ingr=${encodeURIComponent(ingredient)}`;
  
    fetch(url)
      .then(response => response.json())
      .then(data => {
        const resultsDiv = document.getElementById('results');
        resultsDiv.innerHTML = `
          <h2>Nutrition Analysis for "${ingredient}"</h2>
          <p>Calories: ${data.calories}</p>
          <p>Total Weight: ${data.totalWeight} g</p>
          <p>Total Nutrients:</p>
          <ul>
            <li>Protein: ${data.totalNutrients.PROCNT.quantity} ${data.totalNutrients.PROCNT.unit}</li>
            <li>Fat: ${data.totalNutrients.FAT.quantity} ${data.totalNutrients.FAT.unit}</li>
            <li>Carbs: ${data.totalNutrients.CHOCDF.quantity} ${data.totalNutrients.CHOCDF.unit}</li>
          </ul>
        `;
      })
      .catch(error => console.error('Error fetching data:', error));
  }
  