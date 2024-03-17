const email = document.querySelector("#email")
const state = document.querySelector("#state")
const pincode = document.querySelector("#pincode")
const password = document.querySelector("#password")
const confirmPassword = document.querySelector("#password-confirm")
const submitButton = document.querySelector('button')

email.oninput = emailChangeDetector
pincode.oninput = checkPin
state.onchange = checkPin

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
    } else {
        pincode.setCustomValidity(pincodeSystem[state.value][1])
        message.textContent = pincodeSystem[state.value][1]
    }
}



























