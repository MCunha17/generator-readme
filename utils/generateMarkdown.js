// Function to return a license badge based on which license is passed in. If there is no license, returns an empty string.
function renderLicenseBadge(license) {
  if (license === 'None') {
    return '';
  }
  return `![License](https://img.shields.io/badge/license-${encodeURIComponent(license)}-blue.svg)`;
}

// Function to return the license link. If there is no license, returns an empty string.
function renderLicenseLink(license) {
  if (license === 'None') {
    return '';
  }
  return `https://choosealicense.com/licenses/${license.toLowerCase().replace(/ /g, '-')}/`;
}

// Function to return the license section of README. If there is no license, returns an empty string.
function renderLicenseSection(license) {
  if (license === 'None') {
    return '';
  }
  return `
## License

This project is licensed under the [${license}](${renderLicenseLink(license)}) license.
`;
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

## Tests
${data.tests}

${renderLicenseSection(data.license)}

## Questions
My GitHub profile is ${data.github}(https://github.com/${data.github}). If you have any questions, you can contact me at ${data.email}.
`;
}

module.exports = generateMarkdown;