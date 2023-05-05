// Function to return a license badge.
function renderLicenseBadge(license) {
  if (license === 'None') {
    return '';
  }
  return `![License](https://img.shields.io/badge/license-${encodeURIComponent(license)}-blue.svg)`;
}

// Function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}

## Description
${data.description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Tests](#tests)
* [License](#license)
* [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## Contributing
${data.contributing}

## License
This project is licensed under: ${data.license}.

## Tests
${data.tests}

## Questions
If you have any questions, please visit my GitHub profile [${data.github}](https://github.com/${data.github}) or contact me at ${data.email}.
`;
}

module.exports = generateMarkdown;