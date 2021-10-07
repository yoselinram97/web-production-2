let recipe = {'bake': 'donuts'}
//Make your own array of 5 objects with at least 4 keys
// This one only has 3 right now!

//for the donuts
let donuts = {'Recipe': 'Sugar, Milk, Yeast, Eggs, Butter, Salt, Vanilla Extract, Flour', 'Tastes': 'Incredibly delicious and indulgent.'}



function appendDonuts() {
  let donutsDescription = O('donuts')
  //use document.createElement to create a new element
  //set its text content
  donutsDescription.innerHTML += "<div>Recipe: " + donuts.Recipe + "</div>"
  donutsDescription.innerHTML += "<div>Tastes: " + donuts.Tastes + "</div>"
}

function createDiv(attribute, recipeProperty) {
  //this creates an HTML element
  let div = document.createElement("div")
  div.textContent = attribute + ': ' + recipeProperty
  return div
}


//this is for the cupcakes recipe

let cupcakes = {'Recipe': 'Creamed Butter, Cake Flour, Egg Whites, Sugar, Baking Powder, Sprinkles', 'Tastes': 'Extra fluffy with a buttery vanilla flavor and super moist.'}

function appendCupcakes() {
  let cupcakesDescription = O('cupcakes')
  let keys = Object.keys(cupcakes)
  console.log('Object keys', keys)
  //a for of loop just gives us the values in an array - Object.keys(object) creates an array of the keys in an object.
  for (let key of keys) {
    let newDiv = createDiv(key, cupcakes[key])
    cupcakesDescription.appendChild(newDiv)
  }
}

//now for the cake recipe

let cake = {'Recipe': 'Flour, Cocoa Powder, Baking Soda, Salt, Egg, Buttermilk', 'Tastes': 'Sweet with divine chocolate flavor.'}

function appendCake() {
  let cakeDescription = O('cake')
  let keys = Object.keys(cake)
  console.log('Object keys', keys)
  //a for of loop just gives us the values in an array - Object.keys(object) creates an array of the keys in an object.
  for (let key of keys) {
    let newDiv = createDiv(key, cake[key])
    cakeDescription.appendChild(newDiv)
  }
}

//end of recipe basic list

let recipeArray = [{'Bake': 'Donuts', 'Color': '#BE5504', 'Tastes': 'Delicious'}, {'Bake': 'Cupcakes', 'Color': '#FC9483', 'Tastes': 'Sweet'}, {'Bake': 'Cake', 'Color': 'Brown', 'Tastes': 'Rich in chocolate'}]

function makeRecipeLibrary(array) {
  let library = O('recipe-library')
  library.innerHTML = ''
  for (let recipe of array) {
    let recipeDiv = createDiv('Bake', recipe.Bake)
    recipeDiv.className = 'recipe-div'
    let recipeStyle = S(recipeDiv)
    recipeStyle.backgroundColor = recipe.Color
    library.appendChild(recipeDiv)
  }
}

makeRecipeLibrary(recipeArray)

let elementArray = document.querySelectorAll('.recipe-div')
function showRecipeInformation(HTMLArray, objectArray) {
  for (let i = 0; i < HTMLArray.length; i++) {
    HTMLArray[i].onclick = function() {
      O(HTMLArray[i].innerHTML += '<br> Tastes: ' + objectArray[i].Tastes)
    }
  }
}

showRecipeInformation(elementArray, recipeArray)

//end of adding recipe arrays

function addRecipe() {
  let BakeInput = O('recipe-Bake')
  let TastesInput = O('recipe-Tastes')
  let ColorInput = O('recipe-Color')
  let Bake = BakeInput.value
  let Tastes = TastesInput.value
  let Color = ColorInput.value
  let recipe = {Bake: Bake, Tastes: Tastes, Color: Color}
  recipeArray.push(recipe)
  //if we don't call makeFruitLibrary and showFruitInformation again, it won't update teh HTMl
  makeRecipeLibrary(recipeArray)
  //once we've added it to the HTML, we can run this again to get all the new HTML elements

  let elementArray = document.querySelectorAll('.recipe-div')

  showRecipeInformation(elementArray, recipeArray)
  //zero out the inputs
  bakeInput.value = ''
  tastesInput.value = ''
  colorInput.value = ''
}



function randomImg() {
    var quotes = [
      {
        text: "Fluffy Pancakes",
        img:  "https://dinnerthendessert.com/wp-content/uploads/2021/01/Fluffy-pancakes-7.jpg"
      },
      {
        text: "Korean Corn Dogs",
        img:  "https://www.foxyfolksy.com/wp-content/uploads/2021/05/korean-corn-dog-1200t.jpg",
      },
  {
        text: "Macarons",
        img:  "https://sugargeekshow.com/wp-content/uploads/2018/01/french-macaron-recipe.jpg",
      },
  {
        text: "Donuts",
        img:  "https://img.jamieoliver.com/jamieoliver/recipe-database/oldImages/large/1235_1_1436889055.jpg?tr=w-800,h-1066",
      },
  {
        text: "Banana Bread",
        img:  "https://therealfooddietitians.com/wp-content/uploads/2021/05/Gluten-Free-Banana-Bread-with-Chocolate-Chips-3.jpg",
      },
    ];
    var quote = quotes[Math.floor(Math.random() * quotes.length)];
    document.getElementById("quote").innerHTML =
      '<p>' + quote.text + '</p>' +
      '<img src="' + quote.img + '">';
  }
