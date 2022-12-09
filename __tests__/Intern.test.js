const Intern = require("../lib/Intern");

describe("Intern", () => {
  describe("Initialization", () => {
    it("should return an object with a property of school", () => {
      const intern = new Intern();

      expect("school" in intern).toEqual(true);
    });
    it("should set school when provided as a parameter", () => {
      const school = "South Harmon Institute of Technology"
      const intern = new Intern("", 0, "", "South Harmon Institute of Technology");

      expect(intern.school).toEqual(school);
    });
    it("should initialize with access the the parent class Employee's properties", () => {
      const intern = new Intern();

      expect("name" in intern).toEqual(true);
      expect("id" in intern).toEqual(true);
      expect("email" in intern).toEqual(true);
    });
    it("should initialize with access the the parent class Employee's methods", () => {
      const [name, id, email] = ["Barbara", 245423, "bholland67@aol.com"];

      const intern = new Intern(name, id, email);

      expect(intern.getName()).toEqual("Barbara");
      expect(intern.getId()).toEqual(245423);
      expect(intern.getEmail()).toEqual("bholland67@aol.com");
    });
  });
  
  describe("School", () => {
    it("should return a school when calling the getSchool method", () => {
      const intern = new Intern("", 0, "", "Arcadia");

      expect(intern.getSchool()).toEqual("Arcadia");
    });
  });

  describe("Role", () => {
    it("should return the role \"Intern\" when calling the getRole method", () => {
      const role = "Intern";
      const intern = new Intern();
      
      expect(intern.getRole()).toEqual(role);
    });
  });
});
