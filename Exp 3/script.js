var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var BankAccount = /** @class */ (function () {
    function BankAccount(initialBalance) {
        this.balance = initialBalance;
    }
    BankAccount.prototype.deposit = function (amount) {
        this.balance += amount;
        console.log("Deposited ".concat(amount, ". Current balance: ").concat(this.balance));
    };
    BankAccount.prototype.withdraw = function (amount) {
        if (amount > this.balance) {
            console.log("Insufficient funds. Withdrawal failed.");
        }
        else {
            this.balance -= amount;
            console.log("Withdrawn ".concat(amount, ". Current balance: ").concat(this.balance));
        }
    };
    BankAccount.prototype.showBalance = function () {
        console.log("Your current balance is ".concat(this.balance));
    };
    return BankAccount;
}());
var SavingsAccount = /** @class */ (function (_super) {
    __extends(SavingsAccount, _super);
    function SavingsAccount(initialBalance) {
        return _super.call(this, initialBalance) || this;
    }
    SavingsAccount.prototype.withdraw = function (amount) {
        if (this.balance - amount < 100) {
            console.log("Withdrawal failed. Minimum balance of 100 must be maintained.");
        }
        else {
            _super.prototype.withdraw.call(this, amount);
        }
    };
    return SavingsAccount;
}(BankAccount));
var account1 = new BankAccount(500);
account1.deposit(200);
account1.withdraw(50);
var savingsAccount1 = new SavingsAccount(300);
savingsAccount1.deposit(150);
savingsAccount1.withdraw(450);
savingsAccount1.withdraw(200);
savingsAccount1.showBalance();
