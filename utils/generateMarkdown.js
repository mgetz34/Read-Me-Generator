const generateMarkdown = ({
    title,
    license,
    description,
    installation,
    usage,
    credits,
    features,
    contribute,
    tests,
    gitHub,
    email,
}) =>

    `# ${title}
    
## License
${license}

#### Table of Contents:
#### [License](#license)
#### [Description](#description)
#### [Installation](#installation)
#### [Usage](#usage)
#### [Credits](#credits)
#### [Features](#features)
#### [How to Contribute](#contribute) 
#### [Tests](#tests)
#### [Questions](#questions)


## Description
${description}

## Installation
${installation}

## Usage
${usage}

## Credits
${credits}

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
