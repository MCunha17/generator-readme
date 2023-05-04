const fs = require('fs');
const inquirer = require('inquirer');

const questions = [
    // ... (the questions array remains unchanged)
];

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
      if (err) {
        console.error('Error creating README.md.', err);
        return;
      }
      console.log('README.md was successfully generated.');
    });
}

function init() {
    inquirer.prompt(questions).then((answers) => {
      const readmeContent = `
        # ${answers.title}

        ## Description

        ${answers.description}

        ## Table of Contents

        - [Description](#description)
        - [Installation](#installation)
        - [Usage](#usage)
        - [License](#license)
        - [Contributing](#contributing)
        - [Tests](#tests)
        - [Questions](#questions)

        ## Installation

        ${answers.installation}

        ## Usage

        ${answers.usage}

        ## License

        This project is licensed under the ${answers.license} license.

        ## Contributing

        ${answers.contributing}

        ## Tests

        ${answers.tests}

        ## Questions

        My GitHub profile is [GitHub](https://github.com/${answers.github}).
        If you have additional questions, you can reach me at [${answers.email}](mailto:${answers.email}).
        `;

    // Function to write to README file
        writeToFile('README.md', readmeContent);
    });
}
