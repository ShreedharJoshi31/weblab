class BankAccount {
  balance: number;

  constructor(initialBalance: number) {
    this.balance = initialBalance;
  }

  deposit(amount: number): void {
    this.balance += amount;
    console.log(`Deposited ${amount}. Current balance: ${this.balance}`);
  }

  withdraw(amount: number): void {
    if (amount > this.balance) {
      console.log("Insufficient funds. Withdrawal failed.");
    } else {
      this.balance -= amount;
      console.log(`Withdrawn ${amount}. Current balance: ${this.balance}`);
    }
  }

  showBalance(): void {
    console.log(`Your current balance is ${this.balance}`);
  }
}

class SavingsAccount extends BankAccount {
  constructor(initialBalance: number) {
    super(initialBalance);
  }

  withdraw(amount: number): void {
    if (this.balance - amount < 100) {
      console.log(
        "Withdrawal failed. Minimum balance of 100 must be maintained."
      );
    } else {
      super.withdraw(amount);
    }
  }
}

const account1 = new BankAccount(500);
account1.deposit(200);
account1.withdraw(50);

const savingsAccount1 = new SavingsAccount(300);
savingsAccount1.deposit(150);
savingsAccount1.withdraw(450);
savingsAccount1.withdraw(200);
savingsAccount1.showBalance();
