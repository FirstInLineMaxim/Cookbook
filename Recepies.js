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
                <p class="fs-3 fw-light" style="font-family:'Cormorant Upright', serif;">Wiener schnitzel means "Viennese cutlet" in German, and it is one of Austria's most traditional and representative dishes. So much so, in fact, that its definition is fiercely protected by Austrian law. It must be made of veal; when made with any other type of meat, it cannot technically be called Wiener schnitzel.</p>
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
  
  dumplingBtn.addEventListener("click", dumplingRecipe)