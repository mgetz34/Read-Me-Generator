// TODO: Include packages needed for this application
const generateMarkdown = require('./utils/generateMarkdown');
const inquirer = require('inquirer');
const fs = require('fs');
const licenseArr = ["MIT", "ApacheLicense 2.0", "GPLv 3.0", "No License"];

// TODO: Create an array of questions for user input
inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is your Projects Title?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a short description of the who, what, when, where, and why of your project:',
        },
        {
            type: 'input',
            name: 'Table of Contents',
            message: 'If your Readme is long, provide a table of contents:',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'What steps are required to install your project?',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide instructions and example for use:',
        },
        {
            type: 'input',
            name: 'credits',
            message: 'List your collaborators:',
        },
        {
            type: 'list',
            name: 'license',
            message: 'List the Readme license:',
            choices: licenseArr,
        },
        {
            type: 'input',
            name: 'features',
            message: 'List your features:',
        },
        {
            type: 'input',
            name: 'contribute',
            message: 'Would or How would you like other developers to contribute?',
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Any testing to further the devlopment of the application?',
        },
    ])
    .then((answers) => {
        const readmeContent = generateMarkdown(answers);
        console.log(answers);
        // TODO: Create a function to write README file
        fs.writeFile('README.md', readmeContent, (err) =>
            err ? console.log(err) : console.log('successfully written to readme.md!')
        );
    });

