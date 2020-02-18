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
        //allows the user to input responses, then the api is called, data obtained, and then info is generated into the readme file
    ]).then(function (input) {
        
        //grabs github username, then grabs the info from the github api
        api(input.github).then(function (res) {
            let avatar_url = res.data.avatar_url
            let html_url = res.data.html_url
            let readMe = generateReadme(input, avatar_url, html_url);

    
            fs.writeFile("README-generated.md", readMe, function (err) {//last argument is a call back
                if (err) {
                    console.log(err);
                }
                console.log("Successfully written to README-generated.md")
            })
        })
    })
}


userQuestions();