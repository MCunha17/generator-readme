// Inclusion of packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// Array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'Enter a project title',
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
    message: 'Choose a license',
    choices: [
      'Apache License 2.0',
      'GNU General Publics License v3.0',
      'MIT License',
      'BSD 2-Clause "Simplified" License',
      'BSD 3-Clause "New" or "Revised" License',
      'Boost Software License 1.0',
      'Creative Commons Zero v1.0 Universal',
      'Eclipse Public License 2.0',
      'GNU General Public License v2.0',
      'GNU Lesser General Public License v2.1',
      'Mozilla Public License 2.0',
      'The Unlicense',
      'No license',
    ],
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

// Function to write to README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.error('Error generating README file.', err);
      return;
    }
    console.log('The README file was successfully generated.');
  });
}

// Function to initialize application
function init() {
  inquirer.prompt(questions).then((answers) => {
    const readmeContent = generateMarkdown(answers);
    // Function to write README file
    writeToFile('README.md', readmeContent);
  });
}

// Initialize application
init();
