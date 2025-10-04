const form = document.querySelector("form")
const loginInput = document.querySelector("#login")
const passwordInput = document.querySelector("#password")
const submitBtn = document.querySelector("#submitBtn")

let loginInputValue = ''
let passwordInputValue = ''

submitBtn.disabled = true;

const btnDisable = (login, password) => {
    if (login.trim() && password.trim()) {
        submitBtn.disabled = false;
    } else {
        submitBtn.disabled = true;
    }
}

loginInput.addEventListener("input", (e) => {
    loginInputValue = e.target.value
    btnDisable(loginInputValue, passwordInputValue)
})

passwordInput.addEventListener("input", (e) => {
    passwordInputValue = e.target.value
    btnDisable(loginInputValue, passwordInputValue)
})