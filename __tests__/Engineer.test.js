const Engineer = require("../lib/Engineer");

describe("", () => {
  describe("Initialization", () => {
    it("should return an object with a property of github", () => {
      const engineer = new Engineer();

      expect("github" in engineer).toEqual(true);
    });
    it("should set github when provided as a parameter", () => {
      const github = "CraigR"
      const engineer = new Engineer("", 0, "", "CraigR");

      expect(engineer.github).toEqual(github);
    });
    it("should initialize with access the the parent class Employee's properties", () => {
      const engineer = new Engineer();

      expect("name" in engineer).toEqual(true);
      expect("id" in engineer).toEqual(true);
      expect("email" in engineer).toEqual(true);
    });
    it("should initialize with access the the parent class Employee's methods", () => {
      const [name, id, email] = ["Craig", 701304, "crodgers82@hotmail.com"];

      const engineer = new Engineer(name, id, email);

      expect(engineer.getName()).toEqual(name);
      expect(engineer.getId()).toEqual(id);
      expect(engineer.getEmail()).toEqual(email);
    });
  });
  describe("github", () => {
    it("should return a github username when calling the getGitHub method", () => {
      const engineer = new Engineer("", 0, "", "NNSinclair");

      expect(engineer.getGitHub()).toEqual("NNSinclair");
    });
  });
  describe("role", () => {
    it("should return the role of \"Engineer\" when calling the getRole method", () => {
      const role = "Engineer";
      const engineer = new Engineer();
      
      expect(engineer.getRole()).toEqual(role);
    });
  });
});
