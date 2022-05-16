const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector("#ingredients");
function doAll() {
  const listElements = ingredients.map((elem) => {
  const element = document.createElement("li")
  element.textContent = elem;
    element.classList.add("item")
    return element
 
  }) 
   list.append(...listElements);
}
doAll()




