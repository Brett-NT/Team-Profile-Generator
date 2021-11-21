const inquirer = require('inquirer');
// const Manager = require('./lib/Manager');
// const Engineer = require('./lib/Engineer');
// const Intern = require('./lib/Intern');
// const Employee = require('.lib/Employee');

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
    })
};

const employeeQuestions = () => {
    return inquirer.prompt([
        {
            type: 'confirm',
            name: 'addEngineer',
            message: 'Would you like to add an engineer to your team',
            default: false
        },
        {
            type: 'confirm',
            name: 'addIntern',
            message: 'Would you like to add an intern to your team?',
            default: false,
            when: ({ addEngineer }) => !addEngineer
        },
        {
            type: 'confirm',
            name: 'completeTeam',
            message: 'Are you finished adding team members to your team?',
            default: true,
            when: ({ addIntern }) => !addIntern
        }
    ]);
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
    ]);
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
    ]);
}

//initiate questions
function init() {
    managerQuestions()
    .then(managerInputs => {
        const Manager = new Manager (managerInputs.name, managerInputs.id, managerInputs.email, managerInputs.office);
        console.log(Manager);
        myTeam.push(Manager);
    })
    .then(employeeQuestions);
    if(employeeQuestions.addEngineer == true) {
        engineerQuestions()
        .then(engineerInputs => {
            const Engineer = new Engineer (engineerInputs.name, engineerInputs.id, engineerInputs.email, engineerInputs.githubName);
            console.log(Engineer);
            myTeam.push(Engineer);
        });
    };
    if(employeeQuestions.addIntern == true) {
        internQuestions()
        .then(internInputs => {
            const Intern = new Intern (internInputs.name, internInputs.id, internInputs.email, internInputs.githubName);
            console.log(Intern);
            myTeam.push(Intern);
        });
    }

}

init();
