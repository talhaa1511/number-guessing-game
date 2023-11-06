import inquirer from "inquirer";
const systemgeneratednumber = Math.floor(Math.random() + 1);
const answers = await inquirer.prompt([
    {
        type: "number",
        name: "userGuess",
        message: "Write your guess b/w 1 to 15: "
    }
]);
const { userGuess } = answers;
console.log(userGuess, "userGuess", systemgeneratednumber, "Sys");
if (userGuess === systemgeneratednumber) {
    console.log("yaaa Your Answer is correct \n yeh water cooler aap ka hua!");
}
else {
    console.log("wapis try karo aap haar gaye ho");
}
