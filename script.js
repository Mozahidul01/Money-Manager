// Login Button Event Handler

const loginBtn = document.getElementById("login");
loginBtn.addEventListener("click", function (event) {
    const loginArea = document.getElementById("login-area");
    loginArea.style.display = "none";
    const transactionArea = document.getElementById("transaction-area");
    transactionArea.style.display = "block";
})

// Deposit Button Event Handler

const depositBtn = document.getElementById("deposit-btn");
depositBtn.addEventListener("click", function (event) {
    const depositNumber = getInputNumber("deposit-amount");

    updateSpanText("current-deposit", depositNumber);
    updateSpanText("current-balance", depositNumber);

    document.getElementById("deposit-amount").value = "";
});

// Withdraw Button Event Handler

const withdrawBtn = document.getElementById("withdraw-btn");
withdrawBtn.addEventListener("click", function (event) {
    const withdrawNumber = getInputNumber("withdraw-amount");

    updateSpanText("current-withdraw", withdrawNumber);
    updateSpanText("current-balance", -1 * withdrawNumber);

    document.getElementById("withdraw-amount").value = "";

});

// Input Number getting function

function getInputNumber(id) {
    const Amount = document.getElementById(id).value;
    const amountNumber = parseFloat(Amount);
    return amountNumber;
}

// Amount Update function

function updateSpanText(id, depositNumber) {
    const currentMoney = document.getElementById(id).innerText;
    const currentNumber = parseFloat(currentMoney);
    const totalMoney = depositNumber + currentNumber;
    document.getElementById(id).innerText = totalMoney;
}