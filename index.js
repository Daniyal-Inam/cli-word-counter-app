#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
const answers = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: chalk.blueBright.bold.italic("Enter your sentence to count the word: "),
    },
]);
const words = answers.sentence.trim().split(" ");
console.log("\n", chalk.greenBright.italic(words));
console.log("\n", chalk.yellowBright.bold.italic(`Your sentence word count is: ${chalk.greenBright.italic(words.length)}`));
