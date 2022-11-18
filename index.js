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
            name: 'Description',
            message: 'Provide a short description of the who, what, when, where, and why of your project:',
        },
        {
            type: 'input',
            name: 'TableOfContents',
            message: 'If your Readme is long, provide a table of contents:',
        },
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
            type: 'input',
            name: 'License',
            message: 'List the Readme license:',
            choices: ["Choice A", MIT, "Choice B", ApacheLicense20, "Choice C", GPLv30, "Choice D", NoLicense,]
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
    ]);
};


// TODO: Create a function to write README file
// const writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
const init = () => {
    promptUser()
        .then((answers) => writeFile('README.md', genrateMarkdown(answers)))
        .then(() => console.log('Successfully wrote to README.md!'))
        .catch((err) => console.error(err));
};

// Function call to initialize app
init();
