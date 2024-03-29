const email = document.querySelector("#email")
const state = document.querySelector("#state")
const pincode = document.querySelector("#pincode")
const password = document.querySelector("#password")
const confirmPassword = document.querySelector("#password-confirm")
const submitButton = document.querySelector('button')

email.oninput = emailChangeDetector
pincode.oninput = checkPin
state.onchange = checkPin
password.oninput = passwordChecker
confirmPassword.oninput = passwordConfirmer
submitButton.onclick = giveHighFIve

let pindone = false

function emailChangeDetector (event) {

    //for sign and message change
    let message = document.querySelector('.email span')
    let sign = document.querySelector('.email img') 

    if (email.validity.valid) {
        message.textContent = ""
        sign.setAttribute('src', './tick.svg')
    } else  {
        message.textContent = "Invalid email address"
        sign.setAttribute('src', './cross.svg')
    }
    
}

function checkPin() {
        //for sign and message change
        let message = document.querySelector('.pincode span')
        let sign = document.querySelector('.pincode img') 

    const pincodeSystem = {
        gujarat : [
            "[3][6-9][0-6][0-9][0-9][0-9]",
            "The first 3 digit should be between 360-396 for Gujarat "
        ], 
        maharastra: [
            "[4][0-4][0-4][0-9][0-9][0-9]",
            "The first 3 digit should be between 400-445 for Maharastra "
        ],
        tamilnadu: [
            "[6][0-4][0-3][0-9][0-9][0-9]",
            "The first 3 digit should be between 600-643 for Tamilnadu "
        ],
        kerala: [
            "[6][7-9][0-5][0-9][0-9][0-9]",
            "The first 3 digit should be between 670-695 for Kerala "
        ]
    }
    
    const statePincode = new RegExp(pincodeSystem[state.value][0],"")

    if (statePincode.test(pincode.value)) {
        pincode.setCustomValidity("")
        message.textContent = ""
        sign.setAttribute('src', './tick.svg')
        pindone = true
    } else {
        pincode.setCustomValidity(pincodeSystem[state.value][1])
        message.textContent = pincodeSystem[state.value][1]
        pindone = false
    }
}

function passwordChecker() {
    //for sign and message change
    let message = document.querySelector('.password span')
    let sign = document.querySelector('.password img') 

    if (password.validity.valid) {
        message.textContent = ""
        sign.setAttribute('src', './tick.svg')
    } else  {
        message.textContent = "Please enter a valid password"
        sign.setAttribute('src', './cross.svg')
    }
    
}

function passwordConfirmer() {
    //for sign and message change
    let message = document.querySelector('.confirm span')
    let sign = document.querySelector('.confirm img') 

    if (confirmPassword.validity.valid && 
        confirmPassword.value === password.value) {
        message.textContent = ""
        sign.setAttribute('src', './tick.svg')
        confirmPassword.style.boxShadow = ' 0 0 5px 1px rgb(0, 255, 115)'
    } else  {
        message.textContent = "Password do not match"
        sign.setAttribute('src', './cross.svg')
        confirmPassword.style.outline = 'none'
        confirmPassword.style.boxShadow = '0 0 5px 1px red'

    }
        
}

function giveHighFIve(event) {

    if(email.validity.valid && 
       pindone && 
       password.validity.valid &&
       confirmPassword.validity.valid && 
       confirmPassword.value === password.value) {
    alert("High five sailor")
    }
}
























