// deposit-amount
// withdraw-amount
// total-amount
// withdraw-input
// deposit-input
// total-amount
// deposit - btn
// withdraw - btn

const depositShow = document.getElementById('deposit-amount');
const withdrawShow = document.getElementById('withdraw-amount');
const totalShow = document.getElementById('total-amount');
const depositInpt = document.getElementById('deposit-input');
const withdrawInpt = document.getElementById('withdraw-input');
const depositBtn = document.getElementById('deposit-btn');
const withdrawBtn = document.getElementById('withdraw-btn');
const logOutBtn=document.getElementById('logout-btn');
let balance = 100;
const reset = (inputField) => {
    return inputField.value = "";
}
const checkValid = (num) => {
    return (num < 0 ? false : true);
}

const updateBalance = (amount, isDeposit) => {
    /* let previousBalance = parseInt(totalShow);
    console.log(previousBalance); */


    if (isDeposit === true) {
        balance += amount;
        totalShow.innerText = balance;
    }
    else {
        balance -= amount;
        totalShow.innerText = balance;
    }
}


depositBtn.addEventListener('click', () => {
    let deposit = parseInt(depositInpt.value);
    let check = checkValid(deposit);
    if (!check) alert("Please enter a valid amount!!");
    else {
        updateBalance(deposit, true);
        depositShow.innerText = deposit;
    }
    reset(depositInpt);

})
withdrawBtn.addEventListener('click', () => {
    let withdraw = parseInt(withdrawInpt.value);
    let check = checkValid(withdraw);
    if (!check) alert("Please enter a valid amount!!");
    else if (balance < withdraw) {
        alert("Sorry! You can't withdraw more than your current balance");
    }
    else {
        updateBalance(withdraw, false);
        withdrawShow.innerText = withdraw;
    }
    reset(withdrawInpt);
})

logOutBtn.addEventListener('click',()=>{
    window.location.href='/Login/login.html';
})
