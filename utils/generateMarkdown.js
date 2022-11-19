//License badges URL
const icons = [
  "[![License](https://img.shields.io/badge/license-MIT-green)",
  "[![License](https://img.shields.io/badge/license-Apache--2.0-green)",
  "[![License](https://img.shields.io/badge/license-GPL-yellowgreen)",
  "[![License](https://img.shields.io/github/license/mgetz34/Read-Me-Generator)",
];
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = (license) => {
  license != "No License"
    ? `![${license}](https://img.shields.io/badge/License-${license}-blue)`
    : "";
  return `![${license}](https://img.shields.io/badge/License-${license}-blue)`;
};

//   // TODO: Create a function that returns the license link
//   // If there is no license, return an empty string
//   const renderLicenseLink(License) => 
// if (License = "True") (renderLicenseLink)
//     //License URL
//     var mitUrl = "https://choosealicense.com/licenses/mit/";
//     var apacheUrl = "https://choosealicense.com/licenses/apache-2.0/";
//     var gplUrl = "https://choosealicense.com/licenses/gpl-3.0/";
// else (" ";


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// const renderLicenseSection(License) =>
// if (License = "True") (renderLicenseSection)
// else " ";

// TODO: Create a function to generate markdown for README
const generateMarkdown = ({
  title,
  description,
  installation,
  usage,
  credits,
  license,
  features,
  contribute,
  tests }) =>

  `#${title}

${renderLicenseBadge(license)}  

#### Table of Contents:
#### [Description](#description)
#### [Installation](#installation)
#### [Usage](#usage)
#### [Credits](#credits)
#### [License](#license)
#### [Features](#features)
#### [How to Contribute](#contribute) 
#### [Tests](#tests)

## Description
${description}

## Installation
${installation}

## Usage
${usage}

## Credits
${credits}

## License
${license}

## Features
${features}

## How to Contribute
${contribute}

## Tests
${tests}
`;

module.exports = generateMarkdown; 
