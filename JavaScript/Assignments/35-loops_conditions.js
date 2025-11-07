/*
Only 3 attempts to enter correct password
If user gets it right early, stop. If not → “Account locked”
*/

const password = "abc123";

let success = false;

for (let attempt = 0; attempt < 3; attempt++) {
  const userPass = prompt("Enter your password:");
  if (userPass === password) {
    success = true;
    break;
  }
}

if (success) console.log("Access granted");
else console.log("Account locked");

/*
Ask user for words until they type “stop”. Count how many times they typed “yes”
Loop until "stop" is typed. Count "yes".
*/

let word = prompt("Enter a word: ").toLowerCase();
let yesCount = 0;

while (word !== "stop") {
  if (word === "yes") {
    yesCount += 1;
  }
  word = prompt("Enter a word: ").toLowerCase();
}

console.log(`Yes count: ${yesCount}`);

/*
13. Print numbers divisible by 7 from 1 to 50
Use modulo % and loop.
*/

for (let i = 1; i <= 50; i++) {
  if (i % 7 === 0) console.log(i);
}

/*
14. Sum of all odd numbers from 1 to 30
Add only odd numbers. Print final sum.
*/

let sum = 0;

for (let i = 1; i <= 30; i++) {
  if (i % 2 === 0) sum += i;
}
console.log(sum);

/*
15. Keep asking number until user enters an even number
Use while loop. Stop only if input is even.
*/

let number = Number(prompt("Enter an even number: "));

while (number % 2 !== 0) {
  number = Number(prompt("Enter an even number: "));
}
console.log("Ahhh! finally");

/*
16. Print numbers between two user inputs
Input start and end using prompt() → print all between.
*/

let start = Number(prompt("Enter where to start from: "));
let end = Number(prompt("Enter where to emd to: "));

if (start === end) console.error("Start and End can't be the same");
else if (start < end) {
  for (let i = start; i <= end; i++) {
    console.log(i);
  }
} else if (start > end) {
  for (let i = start; i >= end; i--) {
    console.log(i);
  }
} else console.error("Something went off");

/*
17. Print only first 3 odd numbers from 1 to 20
Use loop. Stop with break after 3 odd prints.
*/

let oddCounter = 0;

for (let i = 1; i <= 20; i++) {
  if (oddCounter === 3) break;
  else {
    if (i % 2 !== 0) {
      oddCounter += 1;
      console.log(i);
    }
  }
}

/*

18. Ask user 5 numbers. Count how many are positive
Use loop + condition + counter.
*/

let posCounter = 1;
let inputCounter = 0;

while (inputCounter <= 5) {
  let input = Number(prompt("Enter a number"));
  if (input > 0) posCounter += 1;
  inputCounter += 1;
}

console.log(`Positive Counter: ${posCounter}`);

/*
19. ATM Simulator – Allow 3 withdrawals
Start with ₹1000 balance. Ask withdrawal amount 3 times.
If enough balance → deduct
Else → print “Insufficient balance” 
*/

let balance = 1000;

for (let i = 1; i <= 3; i++) {
  let withdrawal = Number(prompt("Enter your withdrawal amount: "));

  if (withdrawal <= balance) {
    balance -= withdrawal;
    console.log(`Withdrawal successful, your current balance is \n${balance}`);
  } else console.log("Insufficient balance");
}

console.log(`Your remaining balance is ${balance}`);
