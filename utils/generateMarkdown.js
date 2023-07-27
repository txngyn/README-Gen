// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let result = "";
  if (license) {
    switch(license) {
      case 'Apache License 2.0':
        return `https://img.shields.io/badge/License-Apache_2.0-blue.svg`;
      case 'MIT license' :
        return `https://img.shields.io/badge/License-MIT-yellow.svg`;
      case 'GNU General Public License v3 (GPL v3)' :
        return `https://img.shields.io/badge/License-GPLv3-blue.svg`;
      default:
        break;
    }
  }
  return result;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let result = "";
  if (license) {
    switch(license) {
      case 'Apache License 2.0':
        return `https://opensource.org/licenses/Apache-2.0`;
      case 'MIT license' :
        return `https://opensource.org/licenses/MIT`;
      case 'GNU General Public License v3 (GPL v3)' :
        return `https://www.gnu.org/licenses/gpl-3.0`;
      default:
        break;
    }
  }
  return result;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let badge = renderLicenseBadge(license);
  let link = renderLicenseLink(license);

  if (license) {
    return `[![${license}](${badge})](${link})`
  }

  return "";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseSection(data.license)}

1. [Description](#description)
2. [Installation Guide](#installation)
3. [Usage Information](#usage)
4. [Contribution Guideline](#contributing)
5. [Test Instruction](#test)
6. [Question](#question)
7. [License](#license)
## Description <a name="description"></a>

\`\`\`
  ${data.projectDesc}
\`\`\`

## Installation Guide <a name="installation"></a>

\`\`\`
  ${data.installation}
\`\`\`

## Usage Information <a name="usage"></a>

\`\`\`
  ${data.usage}
\`\`\`

## Contribution Guideline <a name="contributing"></a>

\`\`\`
  ${data.contributing}
\`\`\`

## Test Instruction <a name="test"></a>

\`\`\`
  ${data.test}
\`\`\`

## Question <a name="question"></a>

[GitHub Account](${"https://github.com/" + data.userName }) or reach me by my email ${data.email}

## License <a name="license"></a>

We use [${data.license}](${renderLicenseLink(data.license)})

`;
}

module.exports = generateMarkdown;