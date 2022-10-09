

/* Share Recipe Button declaration */
document.getElementById('recipeButton').addEventListener('click', () => {
    alert('Nice, we want ALL your Recipes!!!')
  });

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



const handleClick = () => {
  return displayRecipe.innerHTML = pizzaRecipe
}

recipeButton.addEventListener("click", handleClick)

const handleHover = () => {
  return displayTitle.innerHTML= `Pizza`
}

hoverImage.addEventListener("mouseover", handleHover)
