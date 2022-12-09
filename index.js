const fs = require('fs');
const inquirer = require('inquirer');
const employeePage = require('./src/generateHTML');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

function getEQs(questionKey) {
  const questions = {
    manager: [
      {
        type: 'input',
        message: 'What is the name of the manager?',
        name: 'name'
      },
      {
        type: 'input',
        message: 'What is their email?',
        name: 'email'
      },
      {
        type: 'input',
        message: 'Please provide their office number.',
        name: 'officeNumber'
      }
    ],
    engineer: [
      {
        type: 'input',
        message: 'What is the name of the engineer?',
        name: 'name'
      },
      {
        type: 'input',
        message: 'What is their email?',
        name: 'email'
      },
      {
        type: 'input',
        message: 'Please provide their GitHub username.',
        name: 'github'
      }
    ],
    intern: [
      {
        type: 'input',
        message: 'What is the name of the intern?',
        name: 'name'
      },
      {
        type: 'input',
        message: 'What is their email?',
        name: 'email'
      },
      {
        type: 'input',
        message: 'Please provide their university\'s name.',
        name: 'school'
      }
    ]
  }

  return questions[questionKey];
}

async function promptQuestions(questionType) {
  const questions = getEQs(questionType);
  let selection;
  
  const contPrompt = {
    type: 'list',
    message: 'Which type of employee would you like to add?',
    name: 'next',
    choices: ['Engineer', 'Intern', 'I think I\'m done']
  }
  questions.push(contPrompt);
  
  const answers = await inquirer.prompt(questions);
  
  if(answers.next === 'Engineer') {
    // console.log(answers);
    selection = answers.next.toLowerCase();
    delete answers.next;
    
    return [answers, selection];
  }
  else if(answers.next === 'Intern') {
    selection = answers.next.toLowerCase();
    delete answers.next;
    
    return [answers, selection];
  }
  else {
    delete answers.next;
    selection = 'None';
    
    return [answers, selection];
  }
}

function createEmployee(data) {
  if(data.github) {
    const { name, email, github } = data;
    const id = Math.floor((Math.random() * 899999)) + 100000;

    return new Engineer(name, id, email, github);
  }
  else if(data.school) {
    // 
    const { name, email, school } = data;
    const id = Math.floor((Math.random() * 899999)) + 100000;

    return new Intern(name, id, email, school);
  }
  else {
    const { name, email, officeNumber } = data;
    const id = Math.floor((Math.random() * 899999)) + 100000;

    return new Manager(name, id, email, officeNumber);
  }
}

async function buildRoster() {
  const roster = [];
  let questionType = 'manager';

  while(questionType !== 'None') {
    const [ employee, qType ] = await promptQuestions(questionType);
    roster.push(createEmployee(employee));
    questionType = qType;
  }

  return roster;
}

function writeToFile(fileName, employeeData) {
  let path = './employee_pages';
  
  if(!fs.existsSync(path)) {
    fs.mkdirSync(path);
  }
  path += `/${ fileName }`;
  fs.writeFile(path, employeePage(employeeData), (err) =>
    err ? console.error(err) : console.log('Generated Employee Page.')
  )
}

async function init() {
  const roster = await buildRoster();
  const managerName = roster[0].getName().toLowerCase();
  const fileName = `${ managerName }s-roster.html`
  
  writeToFile(fileName, roster);
  // 
}

init();
