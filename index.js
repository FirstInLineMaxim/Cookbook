

/* Share Recipe Button declaration */
document.getElementById('recipeButton').addEventListener('click', () => {
    alert('Nice, we want ALL your Recipes!!!')
  });
/*
  const displayTitle = document.querySelector(".title");
const hoverImage = document.querySelector(".first-food");
const recipeButton = document.querySelector(".pizza-btn");
const displayRecipe = document.querySelector(".result");
const pizzaRecipe = `<table class="table table-of-ingredients" id="pizza-btn">
<thead>
  <tr>
    <th >Ingredients</th>
    <th>Instructions</th> 
  </tr>
</thead>
<tbody>
  <tr>
    <td><ul>
      <li>pepperoni</li>
      <li>sausage</li>
      <li>salami</li>
      <li>ham</li>
      <li>Mozzarella</li>
      <li>red onions</li>
      <li>mushrooms</li>
      <li>bell peppers</li>
      <li>olives</li>
    </ul></td>
    <td><ul>
      <li>Prepare dough and while it is rising, prep ingredients.</li>
      <li>Top pizza with sauce, toppings and of course cheese.</li>
      <li>Bake until bubbly and browned.</li>
      <li>Let pizza sit about 10 minutes before slicing and serving, this keeps the cheese from sliding off.</li>
    </ul></td>
  </tr>

</tbody>
</table>`



/* const handleClick = () => {
  return displayRecipe.innerHTML = pizzaRecipe
}

recipeButton.addEventListener("click", handleClick)

const handleHover = () => {
  return displayTitle.innerHTML= `Pizza`
}

hoverImage.addEventListener("mouseover", handleHover)*/


const handleClickcurry = () => {
document.querySelector('#rec-show').src = "curry.html"
}
const handleClickpizza = () => {
  document.querySelector('#rec-show').src = "pizza.html"
  }
  const handleClickdumpling = () => {
    document.querySelector('#rec-show').src = "dumpling table added.html"
    }
    const handleClickpork = () => {
      document.querySelector('#rec-show').src = "braised-pork-belly.html"
      }



document.querySelector('#curry-button').addEventListener("click", handleClickcurry)
document.querySelector('#pizza-btn').addEventListener("click", handleClickpizza)
document.querySelector('#dumpling-button').addEventListener("click", handleClickdumpling)
document.querySelector('#Pork-Belly-button').addEventListener("click", handleClickpork)


const handleClickcurryimg = () => {
  document.querySelector('#rec-show').src = "curry.html"
  }
  const handleClickpizzaimg = () => {
    document.querySelector('#rec-show').src = "pizza.html"
    }
    const handleClickdumplingimg = () => {
      document.querySelector('#rec-show').src = "dumpling table added.html"
      }
      const handleClickporkimg = () => {
        document.querySelector('#rec-show').src = "braised-pork-belly.html"
        }
  





document.querySelector('#curryimg').addEventListener("mouseover", handleClickcurryimg)
document.querySelector('#pizzaimg').addEventListener("mouseover", handleClickpizzaimg)
document.querySelector('#Dumplingimg').addEventListener("mouseover", handleClickdumplingimg)
document.querySelector('#Porkimg').addEventListener("mouseover", handleClickporkimg)