const inquirer = require('inquirer');
const { writeFile, copyFile } = require('./utils/generate')

const myTeam = [];

// Prompts to enter Manager information
const managerQuestions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'managerName',
            message: 'What is the name of your team manager?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter the name of your team manager.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'managerId',
            message: 'What is the managers employee ID?',
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log('Please enter the manager employee ID.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: 'What is the managers email address?',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter the manager email.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'managerOffice',
            message: 'What is your office number?',
            validate: officeInput => {
                if (officeInput) {
                    return true;
                } else {
                    console.log('Please enter the office number');
                    return false;
                }
            }
        }
    ])
    .then(managerInputs => {
        myTeam.push(managerInputs);
        console.log(myTeam);
        return employeeQuestions();
    });
};

const employeeQuestions = () => {
    return inquirer.prompt([
        {
            type: 'checkbox',
            name: 'addTeam',
            message: 'Please select an option.',
            choices: ['Add an Engineer', 'Add an Intern', 'Complete your team']
        }
        // {
        //     type: 'confirm',
        //     name: 'addEngineer',
        //     message: 'Would you like to add an engineer to your team',
        //     default: false
        // },
        // {
        //     type: 'confirm',
        //     name: 'addIntern',
        //     message: 'Would you like to add an intern to your team?',
        //     default: false,
        //     when: ({ addEngineer }) => !addEngineer
        // },
        // {
        //     type: 'confirm',
        //     name: 'completeTeam',
        //     message: 'Are you finished adding team members to your team?',
        //     default: true,
        //     when: ({ addIntern }) => !addIntern
        // }
    ])
    .then(employeeInputs => {
        if(employeeInputs.addTeam == 'Add an Engineer') {
            return engineerQuestions();
        }
        else if(employeeInputs.addTeam == 'Add an Intern') {
            return internQuestions();
        }
        else if(employeeInputs.addTeam == 'Complete your team') {

        }
    });
};

// Prompts to enter Engineer information
const engineerQuestions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'engineerName',
            message: 'What is the name of this engineer?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter the name of this engineer.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'engineerId',
            message: 'What is this engineers employee ID?',
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log('Please enter the employee ID of this engineer.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'engineerEmail',
            message: 'What is this engineers email address?',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter the email of this engineer.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'engineerGithubName',
            message: 'What is this engineers Github username?',
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log('Please enter the github username of this engineer.');
                    return false;
                }
            }
        }
    ])
    .then(engineerInputs => {
        myTeam.push(engineerInputs);
        return employeeQuestions();
    });
}

//Prompts to enter intern information
const internQuestions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'internName',
            message: 'What is the name of this intern?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter the name of this intern.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'internId',
            message: 'What is this interns employee ID?',
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log('Please enter the employee ID of this intern.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'internEmail',
            message: 'What is this interns email address?',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter the email of this intern.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'internGithubName',
            message: 'What is this interns Github username?',
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log('Please enter the github username of this intern.');
                    return false;
                }
            }
        }
    ])
    .then(internInputs => {
        myTeam.push(internInputs);
        return employeeQuestions();
    });
}

//initiate questions
function init() {
    managerQuestions()
    .then(employeeQuestions)
    .then(teamData => {
        return generateTeam(teamData);
    })
    .then(teamHTML => {
        return writeFile(teamHTML);
    })
    .then(writeFileResponse => {
        console.log(writeFileResponse);
        return copyFile();
    })
    .then(copyFileResponse => {
        console.log(copyFileResponse);
    })
    .catch(err => {
        console.log(err);
    });

}

init();
