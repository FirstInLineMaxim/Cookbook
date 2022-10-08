const pizzaBtn = document.querySelector(".pizza-btn");
const dumplingBtn = document.querySelector(".dumpling-btn");
const cutletBtn = document.querySelector(".cutlet-btn");
const bellyBtn = document.querySelector(".belly-btn");
const displayRecipe = document.querySelector(".iframe-Recepie");

const cutletRecipe = () => {
    return document.querySelector(".iframe-Recepie").innerHTML = `
    <!--TITLE-->
              <div >
                <p class="fs-1 fw-bold" style="font-family:'Abyssinica SIL', serif;">Viennese cutlet</p>
            </div>

            <!--horizontal line-->
            <hr size="1px" width="350px" align="center" style="color:grey;" noshade>

            <!--Description-->
            <div>
                <p class="fs-3 fw-light text-break" style="font-family:'Cormorant Upright', serif;">Wiener schnitzel means "Viennese cutlet" in German, and it is one of Austria's most traditional and representative dishes. So much so, in fact, that its definition is fiercely protected by Austrian law. It must be made of veal; when made with any other type of meat, it cannot technically be called Wiener schnitzel.</p>
            </div>
            
            <!--Image-->
            <div  >
                <img src="https://thumbs.dreamstime.com/b/wiener-schnitzel-viennese-cutlet-wienerschnitzel-one-best-known-specialties-viennese-cuisine-wiener-216793440.jpg" class="img-fluid img-thumbnail" alt="yoguart" >
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
                  <th scope="row">6</th>
                  <td>veal cutlets pounded</td>
                </tr>
                <tr>
                  <th scope="row">Optional</th>
                  <td>Lemon juice</td>
                </tr>
                <tr>
                  <th scope="row">½ to 1</th>
                  <td colspan="2">flour</td>
                </tr>t
                <tr>
                  <th scope="row">2</th>
                  <td colspan="2">eggs lightly beaten with 2 Tbsp cold water</td>
                </tr>
                <tr>
                  <th scope="row">Optional 1 tablespoon</th>
                  <td colspan="2">cooking oil</td>
                </tr>
                <tr>
                  <th scope="row">1 generous cup</th>
                  <td colspan="2">dry fine breadcrumbs</td>
                </tr>
                <tr>
                  <th scope="row">4 - 5 tablespoons</th>
                  <td colspan="2">butter lard or vegetable shortening</td>
                </tr>
              </tbody>
            </table>`;
  }
  
  cutletBtn.addEventListener("click", cutletRecipe)

  const dumplingRecipe = () => {
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
      <img src="img/asianfoodpic/dumpling.jpg" class="img-fluid img-thumbnail" alt="dumpling">
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
  
  dumplingBtn.addEventListener("click", dumplingRecipe)

  const bellyRecipe = () => {
    return document.querySelector(".iframe-Recepie").innerHTML = `
    <!--TITLE-->
    <div >
        <p class="fs-1 fw-bold" style="font-family:'Abyssinica SIL', serif;">BRAISED PORK BELLY</p>
    </div>

    <!--horizontal line-->
    <hr size="1px" width="350px" align="center" style="color:grey;" noshade>

    <!--Description-->
    <div>
        <p class="fs-3 fw-light" style="font-family:'Cormorant Upright', serif;">Hong shao rou is a Chinese braised pork belly dish that is cooked in a braising liquid made with soy sauce, sugar, and various aromatics and spices. It is similar to my Braised Chinese Chicken Wings recipe, but hong shao rou is a bit more complex of a dish, using a few more aromatics to create an even more amazing flavor.</p>
    </div>
    
    <!--Image-->
    <div>
        <img src="img/Recepies/Chinese-braised-pork/chinese-braised-pork-belly-683x1024.jpg.webp" class="img-fluid img-thumbnail" alt="yoguart" style="max-height: 500px;">
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
            <th scope="row">1.5 pounds</th>
            <td>thick pork belly (about 1.5 inches wide; skin on)</td>
          </tr>
          <tr>
            <th scope="row">3 cups</th>
            <td>water</td>
          </tr>
          <tr>
            <th scope="row">2 cloves</th>
            <td colspan="2">garlic (crushed)</td>
          </tr>
          <tr>
            <th scope="row">1/2 inch</th>
            <td colspan="2">ginger (sliced thin)</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td colspan="2">star anise</td>
          </tr>
          <tr>
            <th scope="row">10</th>
            <td colspan="2">Szechuan peppercorn (optional if can’t find at grocery store)</td>
          </tr>
          <tr>
            <th scope="row">1/2</th>
            <td colspan="2">cinnamon stick</td>
          </tr>
          <tr>
            <th scope="row">2 tbs</th>
            <td colspan="2">cooking oil</td>
          </tr>
          <tr>
            <th scope="row">7 tablespoons</th>
            <td colspan="2">brown sugar</td>
          </tr>
          <tr>
            <th scope="row">2 tablespoons</th>
            <td colspan="2">light soy sauce</td>
          </tr>
          <tr>
            <th scope="row">4 tablespoons</th>
            <td colspan="2">dark soy sauce</td>
          </tr>
          <tr>
            <th scope="row">1 tablespoons</th>
            <td colspan="2">Shaoxing wine (or dry sherry)</td>
          </tr>
        </tbody>
      </table>`;
  }
  
  bellyBtn.addEventListener("click", bellyRecipe)

  const pizzaRecipe = () => {
    return document.querySelector(".iframe-Recepie").innerHTML = `
    <!--TITLE-->
    <div class="col-9">
    <div class="row ">
      <div class="col d-flex flex-row justify-content-around">
        <div ><img src="./resource/img/calendar-days-solid.svg" alt="house" width="20" height="28"></div>
        <div ><img src="./resource/img/face-smile-solid.svg" alt="house" width="20" height="28"></div>
        <div ><img src="./resource/img/file-pdf-regular.svg" alt="house" width="20" height="28"></div>
        <div ><img src="./resource/img/house-solid.svg" alt="house" width="20" height="28"></div>
        <div ><img src="./resource/img/list-check-solid.svg" alt="house" width="20" height="28"></div>
        <div ><img src="./resource/img/location-arrow-solid.svg" alt="house" width="20" height="28"></div>
        <div ><img src="./resource/img/pen-to-square-regular.svg" alt="house" width="20" height="28"></div>
        <div ><img src="./resource/img/ruler-solid.svg" alt="house" width="20" height="28"></div>
        <div ><img src="./resource/img/trash-solid.svg" alt="house" width="20" height="28"></div>
      </div>
    </div>
    <div class="row">
      <div class="row">
        <div class="my-3">
          <h1 class="col border-secondary border-bottom title py-2 fw-bolder" id="pizza-btn"></h1>
        </div>
      </div>
      <div class="row">
        <p class="col">Dish of Italian origin consisting of a flattened disk of bread dough topped with some combination of olive oil, oregano, tomato, olives, mozzarella or other cheese, and many other ingredients, baked quickly.</p>
      </div>
      <div class="row img-container my-5">
        <img class="d-block first-food" src="./resource/pizza-margherita.webp" alt="">
      </div>
      <div class="row">
        <div class="col overflow-auto result"></div>
      </div>
    </div>
  </div>`;
  }
  
  pizzaBtn.addEventListener("click", pizzaRecipe)