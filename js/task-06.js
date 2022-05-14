const refs = {
    mainImput: document.querySelector("#validation-input"),
    mainLength: document.querySelector("input[data-length]")
}

function inputBlur() {
    if (Number(refs.mainLength.value.length) === Number(refs.mainLength.dataset.length)) {
        refs.mainImput.classList.add("valid")
        refs.mainImput.classList.remove("invalid")
    }
    else {
        refs.mainImput.classList.add("invalid")  
       refs.mainImput.classList.remove("valid")
       
    }
}
refs.mainImput.addEventListener('blur', inputBlur)
