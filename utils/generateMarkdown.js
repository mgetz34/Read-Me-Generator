//License badges URL
const icons = [
    "[![License](https://img.shields.io/badge/license-MIT-green)",
    "[![License](https://img.shields.io/badge/license-Apache--2.0-green)",
    "[![License](https://img.shields.io/badge/license-GPL-yellowgreen)",
    "[![License](https://img.shields.io/github/license/mgetz34/Read-Me-Generator)",
];
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// const renderLicenseBadge = (license) => {
//   license = 

// };

// ${renderLicenseBadge(license)}  
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
    tests,
    gitHub,
    email,
}) =>

    `# ${title}

#### Table of Contents:
#### [Description](#description)
#### [Installation](#installation)
#### [Usage](#usage)
#### [Credits](#credits)
#### [License](#license)
#### [Features](#features)
#### [How to Contribute](#contribute) 
#### [Tests](#tests)
#### [Questions]

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

## Questions
For any questions, please view my repo at ${"https://github.com/" + gitHub}
and my email address is: ${email}
`;

module.exports = generateMarkdown; 
