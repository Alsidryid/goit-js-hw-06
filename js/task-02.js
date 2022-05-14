const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector("#ingredients");
const listElements = ingredients.forEach((elem) => {
  let element = document.createElement("li")
  element.textContent = elem;
   element.classList.add("item")
  list.append(element);
}) 

