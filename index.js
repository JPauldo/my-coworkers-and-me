const fs = require('fs');
const inquirer = require('inquirer');
const employeePage = require('./src/generateHTML');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

function getEQs(questionKey) {
  const questions = {
    dummy: {
      type: 'confirm',
      message: 'Annie, are you okay?',
      name: 'test'
    }
  }

  return questions[questionKey];
}

function promptQuestions(questionType) {
  const questions = getEQs(questionType);
  
  inquirer
    .prompt(questions)
    .then((answers) => {
      return answers;
    });
}

function createEmployee(data) {
}

function buildRoster() {
  const roster = [];
  let questionType = 'dummy';
  
  const employee = promptQuestions(questionType);

  roster.push(employee)

  return roster;
}

function writeFile(fileName, employeeData) {
}

function init() {
  const roster = buildRoster();
  // 
}

init();
