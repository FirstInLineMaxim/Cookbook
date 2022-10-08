

/* Share Recipe Button declaration */
document.getElementById('recipeButton').addEventListener('click', () => {
  alert('Nice, we want ALL your Recipes!!!')
});

const displayTitle = document.querySelector(".title");
const hoverImage = document.querySelector(".first-food");
const recipeButton = document.querySelector(".pizza-btn");
const displayRecipe = document.querySelector(".iframe-Recepie");


recipeButton.addEventListener("click", handleClick)

const handleClick = () => {
  return document.querySelector(".iframe-Recepie").innerHTML = `
  <!--TITLE-->
  <div>
    <p class="fs-1 fw-bold" style="font-family:'Abyssinica SIL', serif;">DUMPLING</p>
</div>





<!--horizontal line-->
<hr size="1px" width="350px" align="center" style="color:grey;" noshade>

<!--Description-->
<div >
    <p class="fs-3 fw-semibold" style="font-family:'Cormorant Upright', serif;">Chinese beef dumplings </p>
</div>

<!--Image-->
<div >
    <img src="img/asianfoodpic/dumpling.jpg" class="img-fluid img-thumbnail" alt="dumpling" width="500" height="250" >
</div>


     <!--Table-->
     <table class="table">
        <thead>
          <tr>
            <th scope="col">Amount</th>
            <th scope="col">Ingridient</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">2-inch</th>
            <td>Knob fresh ginger</td>
          </tr>
          <tr>
            <th scope="row">1 teaspoon</th>
            <td>Szechuan Peppercorns</td>
          </tr>
          <tr>
            <th scope="row">½ pound</th>
            <td colspan="2">Ground beef</td>
          </tr>
          <tr>
            <th scope="row">1 teaspoon</th>
            <td colspan="2">Szechuan peppercorn</td>
          </tr>
          <tr>
            <th scope="row">1 tablespoon</th>
            <td colspan="2">Rice wine</td>
          </tr>
         
          <tr>
            <th scope="row">4 tablespoon</th>
            <td colspan="2">Green onions</td>
          </tr>
          <tr>
            <th scope="row">4 tablespoons</th>
            <td colspan="2">dark soy sauce</td>
          </tr>
          <tr>
            <th scope="row">1 teaspoon</th>
            <td colspan="2">sesame oil</td>
          </tr>
        </tbody>
      </table>`;
}



const handleHover = () => {
  return displayTitle.innerHTML= `Pizza`
}


function changeIframe(){
  document.querySelector(".iframe-Recepie").src = "img\Recepies\Dumpling.html";
}



hoverImage.addEventListener("mouseover", handleHover)
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


