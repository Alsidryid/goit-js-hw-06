function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const createBtn = document.querySelector("button[data-create]")
const destroyBtn = document.querySelector("button[data-destroy]")
const mainInput = document.querySelector("#controls > input")
const mainBox = document.querySelector("#boxes")

function addEl() {
  const amountEL = mainInput.value
  crateEl(amountEL)
}

function crateEl(amountEL) {
  const lastEL = mainBox.lastChild
  

  for (let i = 0; i < amountEL; i += 1){
    let boxSize 
    if (lastEL === null) {
      boxSize = 30
    
    }
    else {
      console.log(lastEL.style.width)
      boxSize =  Number.parseInt(lastEL.style.width)+10
    }
    const divs = document.createElement("div");
     divs.style.width = `${boxSize+i*10}px`;
    divs.style.height = `${boxSize+i*10}px`;
    divs.style.background = getRandomHexColor();
       mainBox.append(divs)
  }
  
}
function clean() {
  mainBox.innerHTML= ''
}
createBtn.addEventListener("click", addEl)
destroyBtn.addEventListener("click", clean)
