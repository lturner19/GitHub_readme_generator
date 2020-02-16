const fs = require("fs");
const inquirer = require("inquirer");
let answerURL = "";
let generateReadme = require("./utils/generateMarkdown"); // imports generateMarkdown function
let api = require("./utils/api"); // imports api function


let userQuestions = (questions) => {

    return inquirer.prompt([{
            type: "input",
            name: "github",
            message: "What is your GitHub username?"
        },
        {
            type: "input",
            name: "title",
            message: "What it your project's name?"
        },
        {
            type: "input",
            name: "description",
            message: "Please write a short description of your project?"
        },
        {
            type: "input",
            name: "usage",
            message: "What does the user need to know about using the repo?"
        },
        {
            type: "list",
            name: "license",
            choices: ["GPL", "MIT", "BSD"]
        },
        {
            type: "input",
            name: "install",
            message: "What command should be run to install dependencies?",
            default: "npm i" //will be inserted if user does not input an answer
        },
        {
            type: "input",
            name: "test",
            message: "What command should be run to run tests?",
            default: "npm test" // will be inserted if user does not input an answer
        },
        {
            type: "input",
            name: "contribute",
            message: "What does the user need to know about contributing to the repo?"
        },
    ]).then(function (input) {

        api(input.github).then(function (res) {
            let avatar_url = res.data.avatar_url
            let html_url = res.data.html_url
            let readMe = generateReadme(input, avatar_url, html_url);

            fs.writeFile("README.md", readMe, function (err) {
                if (err) {
                    console.log(err);
                }
                console.log("Successfully written to README.md")
            })
        })
    })
}


userQuestions();