const foodRecipes = [
  {
    image: "https://images.unsplash.com/photo-1598023696416-0193a0bcd302?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWFyZ2hlcml0YSUyMHBpenphfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60",
    title: "Margherita Pizza",
    ingredients: ["Pizza dough", "Tomato sauce", "Mozzarella cheese", "Fresh basil leaves"],
    isVegetarian: true,
    origin: "Italy"
  },
  {
    image: "https://images.unsplash.com/photo-1553621042-f6e147245754?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8U3VzaGklMjBSb2xsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60",
    title: "Sushi Rolls",
    ingredients: ["Sushi rice", "Nori sheets", "Fish or vegetables", "Soy sauce", "Wasabi"],
    isVegetarian: false,
    origin: "Japan"
  },
  {
    image: "https://images.unsplash.com/photo-1622973536968-3ead9e780960?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8U3BhZ2hldHRpJTIwQm9sb2duZXNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60",
    title: "Spaghetti Bolognese",
    ingredients: ["Spaghetti", "Ground beef", "Tomato sauce", "Onion", "Garlic"],
    isVegetarian: false,
    origin: "Italy"
  },
  {
      image: "https://images.unsplash.com/photo-1555196301-9acc011dfde4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Q2xhc3NpYyUyMENoZWVzZWJ1cmdlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60",
      title: "Classic Cheeseburger",
      ingredients: ["Beef patty", "Cheese", "Burger bun", "Lettuce", "Tomato", "Onion"],
      isVegetarian: false,
      origin: "United States"
    },
    {
      image: "https://plus.unsplash.com/premium_photo-1661776616127-98bb4873b6ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8QmVlZiUyMFRhY29zfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60",
      title: "Beef Tacos",
      ingredients: ["Corn tortillas", "Ground beef", "Lettuce", "Tomato", "Cheese", "Salsa"],
      isVegetarian: false,
      origin: "Mexico"
    },
    {
      image: "https://images.unsplash.com/photo-1627662168806-efa33a7cda86?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Q2hpY2tlbiUyMFN0aXIlMjBGcnl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60",
      title: "Chicken Stir-Fry",
      ingredients: ["Chicken breast", "Assorted vegetables", "Soy sauce", "Garlic", "Ginger"],
      isVegetarian: false,
      origin: "Various"
    },
    {
      image: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Q2Flc2FyJTIwU2FsYWR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60",
      title: "Caesar Salad",
      ingredients: ["Romaine lettuce", "Croutons", "Parmesan cheese", "Caesar dressing"],
      isVegetarian: true,
      origin: "Mexico"
    },
    {
      image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Q2hpY2tlbiUyMEN1cnJ5fGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60",
      title: "Chicken Curry",
      ingredients: ["Chicken", "Coconut milk", "Curry paste", "Onion", "Garlic"],
      isVegetarian: false,
      origin: "India"
    },
    {
      image: "https://images.unsplash.com/photo-1515443961218-a51367888e4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8U2VhZm9vZCUyMFBhZWxsYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60",
      title: "Seafood Paella",
      ingredients: ["Rice", "Mixed seafood", "Saffron", "Peppers", "Onion"],
      isVegetarian: false,
      origin: "Spain"
    },
    {
      image: "https://images.unsplash.com/photo-1630173314503-544080d4dee7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8UmF0YXRvdWlsbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60",
      title: "Ratatouille",
      ingredients: ["Eggplant", "Zucchini", "Bell peppers", "Tomatoes", "Onion", "Garlic"],
      isVegetarian: true,
      origin: "France"
    },
    {
      image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
      title: "Tomato Soup",
      ingredients: ["Tomatoes", "Onion", "Garlic", "Vegetable broth", "Cream"],
      isVegetarian: true,
      origin: "Various"
    },
    {
      image: "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNoZWVzZSUyMGJ1cnN0JTIwcGl6emF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60",
      title: "Cheese burst pizza",
      ingredients: ["Tomatoes", "Onion", "Garlic", "Vegetable broth", "Cream",'Cheese'],
      isVegetarian: true,
      origin: "Various"
    },
    {
      image: "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNoZWVzZSUyMGJ1cnN0JTIwcGl6emF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60",
      title: "Cheese burst pizza",
      ingredients: ["Tomatoes", "Onion", "Garlic", "Vegetable broth", "Cream",'Cheese'],
      isVegetarian: true,
      origin: "Various"
    },
    {
      title: 'Biryani',
      ingredients: ['Rice', 'Meat (Chicken, Lamb, or Goat)', 'Spices', 'Onions', 'Yogurt'],
      origin: 'India',
      isVegetarian: false,
      image: 'https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8QmlyeWFuaXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60',
    },
    {
      image: 'https://plus.unsplash.com/premium_photo-1661434210822-1f535cf3976f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGNoaWNrZW4lMjBkaXNofGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60',
      title: ' Chicken chowmein',
      ingredients: ['Chicken', 'Tomato', 'Butter', 'Cream', 'Spices', 'Onions', 'Garlic', 'Ginger','Chowmein'],
      origin: 'India',
      isVegetarian: false,
    },
    {
      image: 'https://images.unsplash.com/photo-1618312368656-33f718157750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dGFuZG9vcmklMjBjaGlja2VufGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60',
      title: 'Tandoori Chicken',
      ingredients: ['Chicken', 'Yogurt', 'Spices', 'Lemon Juice', 'Ginger', 'Garlic'],
      origin: 'India',
      isVegetarian: false,
    },
    {
      image: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8UGFuZWVyJTIwVGlra2F8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60',
      title: 'Paneer Tikka',
      ingredients: ['Paneer (Indian Cottage Cheese)', 'Yogurt', 'Spices', 'Bell Peppers', 'Onions'],
      origin: 'India',
      isVegetarian: true,
    },
    {
      image: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8TWFzYWxhJTIwRG9zYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60',
      title: 'Masala Dosa',
      ingredients: ['Rice and Lentil Batter', 'Potato Filling', 'Chutney', 'Sambar'],
      origin: 'India',
      isVegetarian: true,
    },
    {
      image: 'https://images.unsplash.com/photo-1625220194771-7ebdea0b70b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bW9tb3N8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60',
      title: 'Momos',
      ingredients: ['Yeast', 'Chutney', 'Garlic','soyabean', 'Cabbage'],
      origin: 'India',
      isVegetarian: true,
    },
    {
      image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8U2Ftb3NhfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60',
      title: 'Samosa',
      ingredients: ['Potatoes', 'Peas', 'Spices', 'Flour', 'Oil'],
      origin: 'India',
      isVegetarian: true,
    },
    {
      image: 'https://images.unsplash.com/photo-1626132647523-66f5bf380027?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8VmFkYSUyMFBhdnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60',
      title: 'Vada Pav',
      ingredients: ['Potato Fritter', 'Bun', 'Chutney', 'Spices'],
      origin: 'India',
      isVegetarian: true,
    },
    {
      image: 'https://m.media-amazon.com/images/I/51gJIN-PZfL.jpg',
      title: 'Sweets Samosa',
      ingredients: ['Potatoes', 'Peas', 'Spices', 'Flour', 'Oil'],
      origin: 'India',
      isVegetarian: true,
    },
    {
      image: 'https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8UGVwcGVyb25pJTIwUGl6emF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60',
      title: 'Pepperoni Pizza',
      ingredients: ['Tomato Sauce', 'Mozzarella Cheese', 'Pepperoni Slices'],
      origin: 'United States',
      isVegetarian: false,
    },
    {
      image: 'https://images.unsplash.com/photo-1590534247854-e97d5e3feef6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fEhhd2FpaWFuJTIwUGl6emF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60',
      title: 'Hawaiian Pizza',
      ingredients: ['Tomato Sauce', 'Mozzarella Cheese', 'Ham', 'Pineapple'],
      origin: 'Canada',
      isVegetarian: false,
    },
    {
      image: 'https://images.unsplash.com/photo-1602932228690-c08241c46ffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8TXVzaHJvb20lMjBQaXp6YXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60',
      title: 'Mushroom Pizza',
      ingredients: ['Tomato Sauce', 'Mozzarella Cheese', 'Mushrooms'],
      origin: 'Italy',
      isVegetarian: true,
    },
    {
      image: 'https://images.unsplash.com/photo-1645066804320-b85e54b4339d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fE11c2hyb29tJTIwZGlzaHxlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60',
      title: 'Spicy Mushroom ',
      ingredients: ['Tomato Sauce', 'Mozzarella Cheese', 'Mushrooms', 'Red Pepper', 'Onion'],
      origin: 'Italy',
      isVegetarian: true,
    },
    {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT033620gfKY7s-8tLD5U6iJ0uv-Y58_RSneQ&usqp=CAU',
      title: 'Plain Dosa',
      ingredients: ['Rice and Lentil Batter', 'Potato Filling', 'Chutney', 'Sambar'],
      origin: 'India',
      isVegetarian: true,
    },
];
// Create the heading element
const heading = document.createElement('h1');
heading.textContent = 'Search for Food';
heading.style.textAlign = 'center';

// Create a container div for input field, button, and pagination
const container = document.createElement('div');
container.style.textAlign = 'center';

// Create the input field
const input = document.createElement('input');
input.type = 'text';
input.placeholder = 'Enter a food item';
input.style.marginRight = '10px';

// Create the search button
const button = document.createElement('button');
button.textContent = 'Search';

// Create the pagination container
const paginationContainer = document.createElement('div');
paginationContainer.style.textAlign = 'center';
paginationContainer.style.marginTop = '20px';

// Constants for pagination
const itemsPerPage = 6;
let currentPage = 1;

// Add event listener to the button
button.addEventListener('click', function () {
  searchRecipes(input.value.toLowerCase());
});

// Add event listener to the input field for Enter key press
input.addEventListener('keyup', function (event) {
  if (event.key === 'Enter') {
    searchRecipes(input.value.toLowerCase());
  }
});

// Append the input field and button to the container
container.appendChild(input);
container.appendChild(button);

// Append the pagination container to the container
container.appendChild(paginationContainer);

// Append the elements to the body element
document.body.appendChild(heading);
document.body.appendChild(container);

// Display initial recipes
displayRecipes(foodRecipes);

// Function to display recipes for a specific page
function displayRecipes(recipes) {
  // Calculate start and end index for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Clear existing recipe cards
  const existingCards = document.querySelectorAll('.recipe-card');
  existingCards.forEach((card) => card.remove());

  // Create and display recipe cards for the current page
  const recipeContainer = document.createElement('div');
  recipeContainer.style.display = 'flex';
  recipeContainer.style.justifyContent = 'center';
  recipeContainer.style.flexWrap = 'wrap';

  const recipesForPage = recipes.slice(startIndex, endIndex);
  recipesForPage.forEach((recipe) => {
    // Create recipe card elements
    const recipeCard = document.createElement('div');
    recipeCard.classList.add('recipe-card');

    const recipeImage = document.createElement('img');
    recipeImage.src = recipe.image;
    recipeImage.alt = recipe.title;

    const recipeTitle = document.createElement('h2');
    recipeTitle.textContent = recipe.title;

    const recipeIngredients = document.createElement('p');
    recipeIngredients.textContent = 'Ingredients: ' + recipe.ingredients.join(', ');

    const recipeDetails = document.createElement('p');
    recipeDetails.textContent = `Vegetarian: ${recipe.isVegetarian ? 'Yes' : 'No'} | Origin: ${recipe.origin}`;

    // Append elements to the recipe card
    recipeCard.appendChild(recipeImage);
    recipeCard.appendChild(recipeTitle);
    recipeCard.appendChild(recipeIngredients);
    recipeCard.appendChild(recipeDetails);

    // Append recipe card to the recipe container
    recipeContainer.appendChild(recipeCard);
  });

  // Append the recipe container to the body element
  document.body.appendChild(recipeContainer);

  // Update pagination
  updatePagination(recipes.length);
}

// Function to update pagination based on total recipes
function updatePagination(totalRecipes) {
  // Calculate total pages
  const totalPages = Math.ceil(totalRecipes / itemsPerPage);

  // Clear existing pagination buttons
  paginationContainer.innerHTML = '';

  // Create and display pagination buttons
  for (let i = 1; i <= totalPages; i++) {
    const pageButton = document.createElement('button');
    pageButton.textContent = i;
    pageButton.addEventListener('click', function () {
      currentPage = i;
      displayRecipes(foodRecipes);
    });
    paginationContainer.appendChild(pageButton);
  }
}

// Function to filter and display recipe cards based on search term
function searchRecipes(searchTerm) {
  const filteredRecipes = foodRecipes.filter((recipe) =>
    recipe.title.toLowerCase().includes(searchTerm)
  );

  if (filteredRecipes.length > 0) {
    alert(`Found ${filteredRecipes.length} recipe(s) for "${searchTerm}"!`);
  } else {
    alert(`No recipes found for "${searchTerm}".`);
  }

  // Reset current page to 1
  currentPage = 1;

  // Display recipes for the first page
  displayRecipes(filteredRecipes);
}

// CSS styles for recipe cards and pagination
const styles = `
.recipe-card {
  width: 300px;
  margin: 10px;
  padding: 20px;
  background-color: #f7f7f7;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.recipe-card img {
  width: 100%;
  height: auto;
  margin-bottom: 10px;
}

.recipe-card h2 {
  margin-top: 0;
  margin-bottom: 5px;
}

.recipe-card p {
  margin: 0;
  line-height: 1.4;
}

.pagination-container button {
  margin: 0 5px;
  padding: 5px 10px;
  cursor: pointer;
}
`;

// Create a style element and set its content to the styles
const styleElement = document.createElement('style');
styleElement.textContent = styles;

// Append the style element to the head of the document
document.head.appendChild(styleElement);
