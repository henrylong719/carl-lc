function HomeLoan(amount, duration) {
  this.amount = amount;
  this.duration = duration;
  this.interest = 0.08;
}

HomeLoan.prototype.calculateInterest = function () {
  console.log(this.amount * this.interest * this.duration);
  return this.amount * this.interest * this.duration;
};

function StudentLoan(amount, duration) {
  this.amount = amount;
  this.duration = duration;
  this.interest = 0.03;
}

StudentLoan.prototype.calculateInterest = function () {
  console.log(this.amount * this.interest * this.duration);
  return this.amount * this.interest * this.duration;
};

function PersonLoan(amount, duration) {
  this.amount = amount;
  this.duration = duration;
  this.interest = 0.05;
}

PersonLoan.prototype.calculateInterest = function () {
  console.log(this.amount * this.interest * this.duration);
  return this.amount * this.interest * this.duration;
};

function Loans() {
  let loan;
  this.getloan = function (type, amount, duration) {
    switch (type) {
      case 'home':
        loan = new HomeLoan(amount, duration);
        break;
      case 'student':
        loan = new StudentLoan(amount, duration);
        break;
      default:
        loan = new PersonLoan(amount, duration);
        break;
    }
    return loan;
  };
}

var loan = new Loans();

var homeLoan = loan.getloan('home', 3200, 5);
homeLoan.calculateInterest();

var studentLoan = loan.getloan('student', 1800, 4);
studentLoan.calculateInterest();

var personalLoan = loan.getloan('personal', 1200, 2);
personalLoan.calculateInterest();
