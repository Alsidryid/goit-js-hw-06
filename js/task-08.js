const forma = document.querySelector(".login-form")

function spendForm(e) {
    e.preventDefault()
    const mainInput = e.currentTarget.elements
    const email = mainInput.email.value
    const password = mainInput.password.value
    if (email === ''|| password === '') {
       alert("Заполните пустые поля!")
    }
    else {
        const spendedForm = {
            email,
            password
        }
        console.log(spendedForm)
        e.currentTarget.reset()
    }

}
forma.addEventListener("submit", spendForm)
