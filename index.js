#!/usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(10000 + Math.random() * 90000);
let myBalance = 0;
let answer = await inquirer.prompt([
    {
        name: "students",
        type: "input",
        message: "Enter students name:",
        validate: function (value) {
            if (value.trim !== "") {
                return true;
            }
            return "please enter a non-empty value";
        },
    },
    {
        name: "courses",
        type: "list",
        message: "select the course to enrolled",
        choices: ["HTML", "css", "Javascript", "typescript", "python"],
    },
]);
const tutionfee = {
    HTML: 2500,
    css: 3000,
    Javascript: 5000,
    typescript: 6000,
    python: 10000,
};
console.log(`\n Tution fees: ${tutionfee[answer.courses]}/-\n`);
console.log(`Balance: ${myBalance}\n`);
let paymenttype = await inquirer.prompt([
    {
        name: "payment",
        type: "list",
        message: "select payment method",
        choices: ["bank transfer", "easy paisa", "jazz cash"],
    },
    {
        name: "amount",
        type: "input",
        message: "Transfer money",
    },
]);
console.log(`\nyou select payment method ${paymenttype.payment}`);
const tutionfees = tutionfee[answer.courses];
const paymentamount = parseFloat(paymenttype.amount);
if (tutionfees === paymentamount) {
    console.log(` congratulations you have successfully enrolled in ${answer.courses}`);
    let ans = await inquirer.prompt([
        {
            name: "select",
            type: "list",
            message: "what would you like to do next?",
            choices: ["view status", "Exit"],
        },
    ]);
    if (ans.select === "view status") {
        console.log(`student Name :${answer.students}`);
        console.log(`student ID: ${randomNumber}`);
        console.log(`course: ${answer.courses}`);
        console.log(`Tution fees paid: ${paymentamount}`);
        console.log(`Balance : ${(myBalance += paymentamount)}`);
    }
    else {
        console.log("Existing student management system");
    }
}
else {
    console.log("Invalid amount due to course");
}
