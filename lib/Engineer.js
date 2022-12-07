const Employee = require('./Employee');

class Engineer extends Employee {
  constructor(name, id, email, github){
    this.github = github;
    
    super(name, id, email);
  }

  getGitHub() {
    return this.github;
  }
  
  getRole() {
    return 'Engineer';
  }
}

module.exports = Engineer;
