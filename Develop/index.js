// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Enter project title',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter a project description',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Enter installation instructions',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Enter usage instructions',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Enter contribution guidelines',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Enter test instructions',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Select an application license',
        choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3-Clause', 'None'],
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub username',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address:',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
      if (err) {
        console.error('Error writing file:', err);
        return;
      }
      console.log('README.md was successfully generated');
    });
  }

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
