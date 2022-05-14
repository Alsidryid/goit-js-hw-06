const removeBtn = document.querySelector('[data-action="decrement"]')
const addBtn = document.querySelector('[data-action="increment"]')

let counterValue = 0 


function removeButton(){ 
    counterValue -= 1
    document.querySelector('#value').textContent = counterValue
}

function addButton(){
    counterValue += 1
    document.querySelector('#value').textContent = counterValue
}

removeBtn.addEventListener("click", removeButton)
addBtn.addEventListener("click", addButton)