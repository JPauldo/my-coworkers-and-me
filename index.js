const fs = require('fs');
const inquirer = require('inquirer');
const employeePage = require('./src/generateHTML');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

/**
 * Retrieves an array of questions based on the key provided.
 * @param {string} questionKey The key to the question
 * @returns {object} The list of employee questions
 */
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

/**
 * Prompts questions based on the provided question type.
 * @param {string} questionType The type of question to prompt
 * @returns {array} The response object and the selected question type
 */
async function promptQuestions(questionType) {
  const questions = getEQs(questionType);
  let selection;
  
  // Adds the next property for the employee questions
  const contPrompt = {
    type: 'list',
    message: 'Which type of employee would you like to add?',
    name: 'next',
    choices: ['Engineer', 'Intern', 'I think I\'m done']
  }
  questions.push(contPrompt);
  
  const answers = await inquirer.prompt(questions);
  
  // Determines the next set of questions
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

/**
 * Creates an Employee object based on a unique property.
 * @param {object} data The response data
 * @returns {Employee} The employee object created
 */
function createEmployee(data) {
  if(data.github) {
    const { name, email, github } = data;
    const id = Math.floor((Math.random() * 899999)) + 100000;

    return new Engineer(name, id, email, github);
  }
  else if(data.school) {
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

/**
 * Creates an array of Employee objects based on user input.
 * @returns {array} An array of Employee objects
 */
async function buildRoster() {
  const roster = [];
  let questionType = 'manager';

  // Generates questions until the question type is 'None.'
  while(questionType !== 'None') {
    const [ employee, qType ] = await promptQuestions(questionType);
    roster.push(createEmployee(employee));
    questionType = qType;
  }

  return roster;
}

/**
 * Generate a README file and then writes it to file.
 * @param {name} fileName The name of the file
 * @param {array} employeeData The array of Employee objects
 * @returns {void} Nothing
 */
function writeToFile(fileName, employeeData) {
  let path = './employee_pages';
  
  // Checks to see if the path exists. If not, it is created.
  if(!fs.existsSync(path)) {
    fs.mkdirSync(path);
  }
  path += `/${ fileName }`;
  
  fs.writeFile(path, employeePage(employeeData), (err) =>
    err ? console.error(err) : console.log('Generated Employee Page.')
  )
}

/**
 * Initializes the application on run.
 * @returns {void} Nothing
 */
async function init() {
  const roster = await buildRoster();
  const managerName = roster[0].getName().toLowerCase();
  const fileName = `${ managerName }s-roster.html`
  
  writeToFile(fileName, roster);
  // 
}

init();
