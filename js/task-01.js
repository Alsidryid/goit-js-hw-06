const categories = document.querySelectorAll(".item");
console.log(`Number of categories: ${categories.length}`);

const categoriesList = [...categories]
    .map(categorie =>  `\nCategory: ${categorie.children[0].textContent} \n Elements: ${categorie.children[1].children.length}`)
console.log(...categoriesList)



