const Manager = require("../lib/Manager");

describe("Manager", () => {
  describe("Initialization", () => {
    it("should return an object with a property of officeNumber", () => {
      const manager = new Manager();

      expect("officeNumber" in manager).toEqual(true);
    });
    it("should set officeNumber when provided as a parameter", () => {
      const officeNumber = "151"
      const manager = new Manager("", 0, "", "151");

      expect(manager.officeNumber).toEqual(officeNumber);
    });
    it("should initialize with access the the parent class Employee's properties", () => {
      const manager = new Manager();

      expect("name" in manager).toEqual(true);
      expect("id" in manager).toEqual(true);
      expect("email" in manager).toEqual(true);
    });
    it("should initialize with access the the parent class Employee's methods", () => {
      const [name, id, email] = ["Nancy", 484069, "nwheeler86@hotmail.com"];

      const manager = new Manager(name, id, email);

      expect(manager.getName()).toEqual("Nancy");
      expect(manager.getId()).toEqual(484069);
      expect(manager.getEmail()).toEqual("nwheeler86@hotmail.com");
    });
  });

  describe("Office Number", () => {
    it("should", () => {
      const manager = new Manager("", 0, "", "1014");

      expect(manager.getOfficeNumber()).toEqual("1014");
    });
  });
  
  describe("Role", () => {
    it("should return the role \"Manager\" when calling the getRole method", () => {
      const role = "Manager";
      const manager = new Manager();
      
      expect(manager.getRole()).toEqual(role);
    });
  });
});
