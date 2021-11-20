const inquirer = require('inquirer');

// Prompts to enter Manager information
const managerQuestions = 
    [
        {
            type: 'input',
            name: 'managerName',
            message: 'What is the name of your team manager?'
        },
        {
            type: 'input',
            name: 'managerId',
            message: 'What is the managers employee ID?'
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: 'What is the managers email address?'
        },
        {
            type: 'input',
            name: 'managerOffice',
            message: 'What is your office number?'
        }
    ];

// Prompts to enter Engineer information
const engineerQuestions =
    [
        {
            type: 'input',
            name: 'engineerName',
            message: 'What is the name of this engineer?'
        },
        {
            type: 'input',
            name: 'engineerId',
            message: 'What is this engineers employee ID?'
        },
        {
            type: 'input',
            name: 'engineerEmail',
            message: 'What is this engineers email address?'
        },
        {
            type: 'input',
            name: 'engineerGithubName',
            message: 'What is this engineers Github username?'
        }
    ];

//Prompts to enter intern information

const internQuestions =
    [
        {
            type: 'input',
            name: 'internName',
            message: 'What is the name of this intern?'
        },
        {
            type: 'input',
            name: 'internId',
            message: 'What is this interns employee ID?'
        },
        {
            type: 'input',
            name: 'internEmail',
            message: 'What is this interns email address?'
        },
        {
            type: 'input',
            name: 'internGithubName',
            message: 'What is this interns Github username?'
        }
    ];






module.exports = function() {};