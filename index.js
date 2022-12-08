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
    ]
  }

  return questions[questionKey];
}

async function promptQuestions(questionType) {
  const questions = getEQs(questionType);
  // console.log(questions.length);
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
  else {
    delete answers.next;
    // console.log(answers);
    selection = 'None';
    
    return [answers, selection];
  }
}

function createEmployee(data) {
}

async function buildRoster() {
  const roster = [];
  let questionType = 'manager';

  while(questionType !== 'None') {
    const [ employee, qType ] = await promptQuestions(questionType);
    roster.push(employee);
    // console.log(roster);
    questionType = qType;
    // console.log(questionType);
  }

  return roster;
}

function writeFile(fileName, employeeData) {
}

async function init() {
  const roster = await buildRoster();
  console.log(roster);
  // 
}

init();
