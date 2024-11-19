const loginBtn = document.getElementById('login-btn')

const getValue = (inputField) => {
    return document.getElementById(inputField).value;
}
const reset = (inputField) => {
    return document.getElementById(inputField).value = "";
}

loginBtn.addEventListener('click',()=>{
    let email=getValue('email');
    let pass=getValue('password');
    console.log(email,pass);
    
})




