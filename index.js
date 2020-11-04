const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const cpassword = document.getElementById('cpassword');

//Show innput error  message
function showError(input,msg) {
    const formControl = input.parentElement; // to get parent element
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = msg;
}
// Show Error Message
function showSuccess(input) {
    const formControl = input.parentElement; 
    formControl.className = 'form-control sucess';
}
//Checking Email
function checkEmail(input) {
    const re = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/
    if (re.test(input.value.trim())) {
        showSuccess(input);
    }else {
        showError(input,'Email is not valid');
    }
    return 
}
// Getting FieldName
function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}
// Checking if required
function checkRequired(inputArr) {
    inputArr.forEach(input => {
        if(input.value.trim() === ''){
            showError(input,`${getFieldName(input)} is required`)
        }else {
            showSuccess(input);
        }
    });
}
// Checking Length 
function checkLength(input, min, max) {
    if(input.value.length < min) {
        showError(input, `${getFieldName(input)} must be at least ${min} characters`);
    }else if(input.value.length > max) {
        showError(input, `${getFieldName(input)} must be at least ${min} characters`);
    }else {
        showSuccess(input);
    }
}
// Matching Password
function matchPass(pass,cpass) {
    if(pass.value === cpass.value) {
        showSuccess(cpass);
    }else {
        showError(cpass,'Password Do Not Match');
    }
}
// Event Listener
form.addEventListener('submit',(event)=>{
    event.preventDefault();
    console.log(username,password,email);
    checkRequired([username,email,password,cpassword]);
    checkLength(username, 3, 15);
    checkLength(password, 8, 25);
    checkEmail(email);
    matchPass(password,cpassword);
});