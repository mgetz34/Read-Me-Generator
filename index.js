// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const { writeFile } = require('fs').promises;

// TODO: Create an array of questions for user input
const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'Title',
            message: 'What is your Projects Title?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a short description of the who, what, when, where, and why of your project:',
        },
        {
            type: 'input',
            name: 'tableOfContents',
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
            type: 'input',
            name: 'license',
            message: 'List the Readme license:',
        },
        {
            type: 'input',
            name: 'features',
            message: 'List your features:',
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Any testing to further the devlopment of the application?',
        },
    ]);
};


// TODO: Create a function to write README file
const writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
const init = () => {
    promptUser()
        .then((answers) => writeFile('README.md', genrateMarkdown(answers)))
        .then(() => console.log('Successfully wrote to README.md!'))
        .catch((err) => console.error(err));
};

// Function call to initialize app
init();
