const refs = {
    inputSize: document.querySelector("#font-size-control"),
    textSize: document.querySelector("#text")
    
}

function doMagic() {

   refs.textSize.style.fontSize = `${refs.inputSize.value}px`;
 
}

refs.inputSize.addEventListener("input", doMagic)

document.addEventListener("DOMContentLoaded", doMagic )