const axios = require('axios');

const searchTerm = 'apple'; // Enter your search term
const perPage = 10; // Enter the number of results per page
const page = 1; // Enter the page number
const sortBy = 'name'; // Enter the sorting criteria (e.g., 'name', 'popularity', etc.)

const login = 'your_login'; // Replace with your login credentials
const password = 'your_password'; // Replace with your password

const fetchFoodProducts = async () => {
  const encodedParams = new URLSearchParams();
  encodedParams.set('search_term', searchTerm);
  encodedParams.set('per_page', perPage);
  encodedParams.set('page', page);
  encodedParams.set('sort_by', sortBy);

  const options = {
    method: 'POST',
    url: 'https://foodfacts-foodfacts-v1.p.rapidapi.com/food_products_per_search_term/format/json',
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
      login: login,
      password: password,
      'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
      'X-RapidAPI-Host': 'foodfacts-foodfacts-v1.p.rapidapi.com'
    },
    data: encodedParams
  };

  try {
    const response = await axios.request(options);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};

fetchFoodProducts();