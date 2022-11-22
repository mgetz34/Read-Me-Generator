// TODO: Include packages needed for this application
const generateMarkdown = require('./utils/generateMarkdown');
const inquirer = require('inquirer');
const fs = require('fs');
const licenseArr = [
    {
        name: "MIT",
        value: "![License](https://img.shields.io/badge/license-MIT-green)",
    },
    {
        name: "ApacheLicense 2.0",
        value: "![License](https://img.shields.io/badge/license-Apache--2.0-green)",
    },
    {
        name: "GPLv 3.0",
        value: "![License](https://img.shields.io/badge/license-GPL-yellowgreen)",
    },
    {
        name: "No License",
        value: "![License](https://img.shields.io/github/license/mgetz34/Read-Me-Generator)"
    }];

// TODO: Create an array of questions for user input
inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is your Projects Title?',
        },
        {
            type: 'list',
            name: 'license',
            message: 'List the Readme license:',
            choices: licenseArr,
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a short description of the who, what, when, where, and why of your project:',
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
        {
            type: 'input',
            name: 'gitHub',
            message: 'Please enter your github user name:',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter your email for any users with questions about your application:',
        },
    ])
    .then((answers) => {
        const readmeContent = generateMarkdown(answers);
        // console.log(answers);
        // TODO: Create a function to write README file
        //README.md changed to SAMPLE.md for the purpose of video demo,
        //changed back for future README generation
        fs.writeFile('TPGREADME.md', readmeContent, (err) =>
            err ? console.log(err) : console.log('successfully written to readme.md!')
        );
    });

