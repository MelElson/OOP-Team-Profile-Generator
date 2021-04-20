// global variables 
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');
const generateHTML = require("./src/generateHTML");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Employee = require("./lib/Employee");
const Intern = require("./lib/Intern");
const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "team.html");

const teamMembers = [];

const questionsManager = [{
    type: 'input',
    name: 'name',
    message: "Please enter Manger's name?",
},

{
    type: 'input',
    name: 'id',
    message: "Please enter Manger's id?",
},

{
    type: 'input',
    name: 'email',
    message: "Please enter Manger's email?",
},
{
    type: 'input',
    name: 'number',
    message: "Please enter Manger's office number?",
},
{
    type: 'list',
    name: 'members',
    message: "Do you want to add a team member?",
    choices: [
        "Engineer",
        "Intern",
        "I'm Done",
    ]
  ///need to add a way to end this 
},
]

// functions declarations ***********

const askEngineer = () => {
    inquirer
    .prompt ([
    
  {  
    type: 'input',
    name: 'name',
    message: "Please enter Engineer's name?",
},

{
    type: 'input',
    name: 'id',
    message: "Please enter Engineer's id?",
},

{
    type: 'input',
    name: 'email',
    message: "Please enter Engineer's email?",
},
{
    type: 'input',
    name: 'github',
    message: "Please enter Engineer's gitHub name?",
},
{
    type: 'list',
    name: 'members',
    message: "Which type of team member do you want to add?",
    choices: [
        'Engineer',
        'Intern',
        "I'm Done",
    ]
  ///need to add a way to end this 
},

])

}


const askIntern = () => {
    inquirer
    .prompt ([
    
  {  
    type: 'input',
    name: 'name',
    message: "Please enter Intern's name?",
},

{
    type: 'input',
    name: 'id',
    message: "Please enter Intern's id?",
},

{
    type: 'input',
    name: 'email',
    message: "Please enter Intern's email?",
},
{
    type: 'input',
    name: 'school',
    message: "Please enter Intern's school?",
},
{
    type: 'list',
    name: 'members',
    message: "Which type of team member do you want to add?",
    choices: [
        'Engineer',
        'Intern',
        "I'm Done",
    ]
  ///need to add a way to end this 
},

]);

}


const init = () => {
    inquirer.prompt(questionsManager).then((data) => {
        teamMembers.push(new Manager(data.name, data.id, data.email, data.officeNumber))
        if (data.members === "Engineer") {
            askEngineer();
        }
        else if (data.members === "Intern") {
            askIntern();
        }
        else {
            //end function here and generatehtml
            let data = generateHTML(teamMembers);
            //generateHTML(teamMembers);
            fs.writeFileSync('index.html', data, "utf-8");
        }
    })
   

}

init();


