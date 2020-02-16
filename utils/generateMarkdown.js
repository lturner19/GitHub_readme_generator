let generateReadme = (answers, avatar_url, html_url) => {

    //used to generate badge for user specified license
    if (answers.license === "GPL") {
      answerURL = `[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](http://www.gnu.org/licenses/gpl-3.0)`
    } else if (answers.license === "MIT") {
      answerURL = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
    } else {
      answerURL = `[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`
    }
  
  
    //returns template literal ' ' with user input
    return `
    # ${answers.title}
      
    ## Description
    ${answers.description}
    
    <br>
      
    ## Table of Contents
    
    * [Installation](##Installation) 
    * [Usage](##Usage)
    * [License](##License)
    * [Contributing](##Contributing)
    * [Tests](##Tests)
    * [Questions](###Questions)
    
    <br>
    
    ## Installation
    ${answers.install}  
    
    <br>
      
    ## Usage
    ${answers.usage}  
    <br>
      
    ## License
    ${answerURL}
    
      
    ## Contributing
    ${answers.contribute}
    <br>
      
    ## Tests
    ${answers.test}  
    <br>
      
    ### Questions
    <img src = "${avatar_url}">
    
    <br>
    
    For any questions or to open an issue please contact:
    <br>
    [${answers.github}](${html_url})
    `
  }
  
  //exports to index.js
  module.exports = generateReadme