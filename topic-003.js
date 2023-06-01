// TOPIC #3 - Variables and Arithmetic Operations
// Get input from user
let totalBill = prompt("What is the total bill amount?");
let tipPercentage = prompt("What percentage tip would you like to leave?");

// Calculate tip and total owed
totalBill = parseFloat(totalBill);
let tipAmount = totalBill * (tipPercentage / 100);
let totalOwed = totalBill + tipAmount;

// Output results to user
alert("Your tip amount is $" + tipAmount.toFixed(2) + ", and your total owed is $" + totalOwed.toFixed(2) + ".");
