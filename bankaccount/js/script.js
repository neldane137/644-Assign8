/*eslint-env browser*/
var $ = function (id) {
    "use strict";
    return window.document.getElementById(id);
};

var BankAccount = function (ownerName) {
    "use strict";
    ownerName = window.prompt("Enter owner name");
    document.getElementById("ownerName").innerHTML = ownerName;
};

var GetBalance = function (balance, deposit, withdrawal) {
    "use strict";
    this.balance = balance;
    this.deposit = deposit;
    this.withdrawal = withdrawal;
    if (typeof balance === "undefined") {
        balance = 0;
    }
    this.getDeposit = function (deposit) {
        deposit = parseFloat(window.prompt("Enter amount for deposit"));
        if (isNaN(deposit) || deposit < 0) {
            deposit = parseFloat(window.prompt("Please enter a valid amount"));
        }
        balance += deposit;
        document.getElementById("balance").innerHTML = "Your balance is " + balance;
        
        
    };
    this.getWithdrawal = function (withdrawal) {
        withdrawal = parseFloat(window.prompt("Enter amount for deposit"));
        if (isNaN(withdrawal) || withdrawal < 0) {
            withdrawal = parseFloat(window.prompt("Please enter a valid amount"));
        }
        balance -= withdrawal;
        if (balance >= 0) {
            document.getElementById("balance").innerHTML = "Your balance is " + balance;
        } else {
            document.getElementById("balance").innerHTML = "Sorry, you have insufficient funds.";
        }
    };
};


var account1 = new GetBalance();
window.addEventListener("load", function () {
    "use strict";
    $("name").onclick = BankAccount;
    $("deposit").onclick = account1.getDeposit;
    $("withdraw").onclick = account1.getWithdrawal;
});