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
            name: 'Title',
            message: 'What is your Projects Title?',
        },
        {
            type: 'input',
            name: 'Description',
            message: 'Provide a short description of the who, what, when, where, and why of your project:',
        },
        // {
        //     type: 'input',
        //     name: 'TableOfContents',
        //     message: 'If your Readme is long, provide a table of contents:',
        // },
        {
            type: 'input',
            name: 'Installation',
            message: 'What steps are required to install your project?',
        },
        {
            type: 'input',
            name: 'Usage',
            message: 'Provide instructions and example for use:',
        },
        {
            type: 'input',
            name: 'Credits',
            message: 'List your collaborators:',
        },
        {
            type: 'list',
            name: 'License',
            message: 'List the Readme license:',
            choices: licenseArr,
        },
        {
            type: 'input',
            name: 'Features',
            message: 'List your features:',
        },
        {
            type: 'input',
            name: 'HowToContribute',
            message: 'Would or How would you like other developers to contribute?',
        },
        {
            type: 'input',
            name: 'Tests',
            message: 'Any testing to further the devlopment of the application?',
        },
    ])
    .then((answers) => {
        const readmeContent = generateMarkdown(answers);
        // TODO: Create a function to write README file
        fs.writeFile('README.md', readmeContent, (err) =>
            err ? console.log(err) : console.log('successfully written to readme.md!')
        );
    });

