const iframeDisplay = document.querySelector("#myFrame");

/* Share Recipe Button declaration */
const recipeShareButton= document.querySelector('#share-recipe');


const pizzaTitle = document.querySelector(".pizza-title");
const dumplingTitle = document.querySelector(".dumpling-title");
const porkTitle = document.querySelector(".pork-title");

const hoverPizza = document.querySelector(".hover-pizza");
const hoverDumpling = document.querySelector(".hover-dumpling");
const hoverPork = document.querySelector(".hover-pork");



const pizzaButton = document.querySelector(".pizza-btn");
const dumplingButton = document.querySelector(".dumpling-btn");
const porkButton = document.querySelector(".pork-btn");

// const pizzaRecipe = `<table class="table table-of-ingredients" id="pizza-btn">
// <thead>
//   <tr>
//     <th >Ingredients</th>
//     <th>Instructions</th> 
//   </tr>
// </thead>
// <tbody>
//   <tr>
//     <td><ul>
//       <li>pepperoni</li>
//       <li>sausage</li>
//       <li>salami</li>
//       <li>ham</li>
//       <li>Mozzarella</li>
//       <li>red onions</li>
//       <li>mushrooms</li>
//       <li>bell peppers</li>
//       <li>olives</li>
//     </ul></td>
//     <td><ul>
//       <li>Prepare dough and while it is rising, prep ingredients.</li>
//       <li>Top pizza with sauce, toppings and of course cheese.</li>
//       <li>Bake until bubbly and browned.</li>
//       <li>Let pizza sit about 10 minutes before slicing and serving, this keeps the cheese from sliding off.</li>
//     </ul></td>
//   </tr>

// </tbody>
// </table>`

recipeShareButton.addEventListener('click', shareRecipe);

const shareRecipe = () => {
  alert('Nice, we want ALL your Recipes!!!');
  // console.log("clicked");
}


const handleClick = () => {
  return iframeDisplay.src = "./recipes/pizza.html"
}

pizzaButton.addEventListener("click", handleClick)

const handleHover = () => {
  return displayTitle.innerHTML= `Pizza`
}

hoverImage.addEventListener("mouseover", handleHover)
