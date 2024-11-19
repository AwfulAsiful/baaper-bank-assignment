const loginBtn = document.getElementById('login-btn')
const successMsg = document.getElementById('succes-alert');
const failMsg = document.getElementById('warining-alert')
const getValue = (inputField) => {
    return document.getElementById(inputField).value;
}
const reset = (inputField) => {
    return document.getElementById(inputField).value = "";
}



// Function to show the popup
function showPopup() {
    successMsg.classList.remove('hidden');
    successMsg.classList.add('active');
    setTimeout(() => {
        successMsg.classList.remove('active');
        successMsg.classList.add('hidden');
    }, 3000); // Hide after 3 seconds
}
function showWarning() {
    failMsg.classList.remove('hidden');
    failMsg.classList.add('active');
    setTimeout(() => {
        failMsg.classList.remove('active');
        failMsg.classList.add('hidden');
    }, 3000); // Hide after 3 seconds
}

// Example trigger
// Trigger the popup after 1 second

loginBtn.addEventListener('click', () => {
    let email = getValue('email');
    let pass = getValue('password');
    const loginEmail = 'admin@example.com';
    const loginPass = 'admin';
    if (email === loginEmail && pass === loginPass) {
        // alert("Login Successful!!");
        showPopup();
    }
    else {
        showWarning();
    }
    reset('email'); reset('password');

    // console.log(email,pass);

})




