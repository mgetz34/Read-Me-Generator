// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

const renderLicenseBadge(License) => 
if (License = "True") (renderLicenseBadge)
else; ""

// TODO: Create a function that returns the license link
// If there is no license, return an empty string

const renderLicenseLink(License) =>
if (License = "True") (renderLicenseLink)
else; ""

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string

const renderLicenseSection(License) =>
if (License = "True") (renderLicenseSection)
else; ""

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.Title.Description.TableofContents.Installation.Usage.Credits.Liscense
  .Fearutes.HowToContribute.Tests}
# Title

## Description

## Table of Contents 

## Installation

## Usage

## Credits

## License

## Features

## How to Contribute

## Tests
`;
}

module.exports = generateMarkdown;
