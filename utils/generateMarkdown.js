// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

const renderLicenseBadge(License) => 
if (License = "True") (renderLicenseBadge)
//License badges URL
//MIT license https://img.shields.io/badge/license-MIT-green
//Apache License 2.0 https://img.shields.io/badge/license-Apache--2.0-green
//GPL License https://img.shields.io/badge/license-GPL-yellowgreen
//NO license https://img.shields.io/github/license/mgetz34/Read-Me-Generator
else " ";


  // TODO: Create a function that returns the license link
  // If there is no license, return an empty string
  const renderLicenseLink(License) => 
if (License = "True") (renderLicenseLink)
  //License URL
  //MIT https://choosealicense.com/licenses/mit/
  //Apache2.0 https://choosealicense.com/licenses/apache-2.0/
  //GPLv3.0 https://choosealicense.com/licenses/gpl-3.0/
  else " ";


    // TODO: Create a function that returns the license section of README
    // If there is no license, return an empty string
    const renderLicenseSection(License) =>
if (License = "True") (renderLicenseSection)
    else " ";

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
