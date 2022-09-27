const inquirer = require('inquirer');
const fs = require('fs');
const genHtml = require('./genHtml');
const Manager = require('./lib/manager');
const employeesToRender = []

//function to create HTML file
function writeToFile(fileName, data) {
    fs.writeFile(`dist/${fileName}`, genHtml(data), (err) => {
        err ? console.error(err) : console.log("Success!");
    })
}

function askNext() {
    inquirer
        .prompt([
            {
                type: 'list',
                message: 'Which type of team member would you like to add?',
                choices: ['Engineer', 'Intern', 'do not add anymore'],
                name: 'type',
            },
        ])
        .then(({ type }) => {
            if (type === "Engineer") {
                // call create engineer funciton with propts for engineers
                inquirer
                    .prompt([
                        {
                            type: 'input',
                            message: 'What is your github username?',
                            name: 'github',
                        }
                    ]) 
                    .then(({github}) => {
                        const engineer = new Engineer(github);
                        employeesToRender.push(engineer);
                    })
            } else if (type === "Intern") {
                inquirer
                    .prompt([
                        {
                            type: 'input',
                            message: 'What is your school?',
                            name: 'school',
                        },
                    ])
                    .then(({school}) => {
                        const intern = new Intern(school)
                        employeesToRender.push(intern)
                    })
            } else {
                if(type === 'do not add anymore'){
                    writeToFile('index.html', employeesToRender)
                }
            }
        }) 
}
//function to initialize app
function init() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'What is the team managers name?',
                name: 'name',
            },
            {
                type: 'input',
                message: 'What is the team managers id?',
                name: 'id',
            },
            {
                type: 'input',
                message: 'What is the team managers email?',
                name: 'email',
            },
            {
                type: 'input',
                message: 'What is the team managers office number?',
                name: 'office',
            }
        ])
        .then(({name, id, email, office}) => {
            const manager = new Manager(name, id, email, office)
            employeesToRender.push(manager)
            // writeToFile('./index.html', name, id, email, office);
        })
        .then(askNext)

}
init();



//Ask questions about maanger of team
//Create manager using user data
//Save manager to a list of employees
    //array of employees
//Ask them what type of employee they want to add to team OR are they done
//Ask questions about type of employee they wish to create
    //intern: asking about school
    //engineer: asking about github
//Create employee using user input
//Save employee to list of employees
//Repeat line 55 until all employees have been added
//Create HTML (card) for each item(employee) in array