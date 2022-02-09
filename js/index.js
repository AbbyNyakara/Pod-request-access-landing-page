let alertMessage = "";
const EMAILREGEX = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

function inputValidation() {
    let email = document.getElementById("email").value;

    if (!email) {
        alertMessage = "Oops! Please add your email";
    } 
    else if (!EMAILREGEX.test(email)) {
        alertMessage = "Oops! Please check your email";
    }
    else {
        alertMessage = "";
    }
    
    document.getElementById("alertMessage").innerHTML = alertMessage;
}