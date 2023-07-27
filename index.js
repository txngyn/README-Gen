// TODO: Include packages needed for this application

const fs = require('fs');
const inquirer = require('inquirer')
const generateMarkdown = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input

const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'projectTitle',
    },

    {
        type: 'input',
        message: 'What is your github username',
        name: 'username',
    },

    {
        type:'input',
        message: 'Description of project',
        name: 'description',
    },

    {
        type: 'input',
        message: 'Describe how your application can be installed',
        name: 'installation',
    },

    {
        type:'input',
        message: 'List features of your project',
        name: 'features',
    },

    {
        type: 'input',
        message: 'Provide test instructions for application',
        name: 'tests'
    },


];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.appendFile(fileName, data, () => console.log("Done"));
  }
  
  // TODO: Create a function to initialize app
  function init() {
    inquirer
      .prompt(questions)
      .then((data) => {
        let markdownData = generateMarkdown(data);
        writeToFile("README.md", markdownData);
      });
  }
  
  // Function call to initialize app
  init();