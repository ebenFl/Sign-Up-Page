
var signupForm = document.getElementById("signupForm");
var email = document.getElementById("email")
var phoneNumber = document.getElementById("phonenumber");
var password = document.getElementById("password")
var confirmPassword = document.getElementById("cpassword")


const passwordRe = /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[*.!@$%^&(){}[\]:;<>,.?/~_+\-=|])[\S]{8,32}$/

const phoneRe = /[0-9]{3}-[0-9]{3}-[0-9]{4}/

signupForm.addEventListener("submit", (e) => {
    e.preventDefault();

    errors = []

    // validate phone number
    let pNumber = phoneNumber.value.trim()
    if(!phoneRe.test(pNumber)) {
        errors.push("Invalid Phone Number (format: xxx-xxx-xxxx)")
    }

    // check password meets requirements
    let pass = password.value.trim()
    let checkPass = confirmPassword.value.trim()
    
    if(!passwordRe.test(pass)) {
        errors.push("Invalid password (8-32 chars, 1 lower, 1 upper , 1 special)")
    }

    if(pass !== checkPass) {
        errors.push("Password and Confirm Password must match")
    }

    if(errors.length > 0) {
        let eString = ""
        for (let i = 0; i < errors.length; i++) {
            eString = eString.concat(errors[i]);
            eString = eString.concat("\n");
        }
        console.log(eString)
        alert(eString);
    } else {
        alert("Success");
    }



})