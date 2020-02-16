const fs = require("fs");
const inquirer = require("inquirer");
let generateReadme = require("./utils/generateMarkdown"); 
let api = require("./utils/api"); 
let answerURL = ""

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
