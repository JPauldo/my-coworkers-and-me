const Employee = require("../lib/Employee");

describe("Employee", () => {
  describe("Initialization", () => {
    it("should return an object with a property of name", () => {
      const employee = new Employee();

      expect("name" in employee).toEqual(true);
    });

    it("should set name, id and email when provided as parameters", () => {
      const [name, id, email] = ["Jane", 123456, "jdoe564@email.com"];

      const employee = new Employee(name, id, email);

      expect(employee.name).toEqual(name);
      expect(employee.id).toEqual(id);
      expect(employee.email).toEqual(email);
    });
  });

  describe("name", () => {
    it("should return a name when calling the getName method", () => {
      const employee = new Employee("Myra", 0, "")

      expect(employee.getName()).toEqual("Myra);
    });
  });

  describe("id", () => {
    it("should return an ID when calling the getId method", () => {
      const employee = new Employee("", 234272, "")

      expect(employee.getId()).toEqual(234272);
    });
  });

  describe("email", () => {
    it("should return an email when calling the getEmail method", () => {
      const employee = new Employee("", 0, "tilina4883@cosaxu.com");
      
      expect(employee.getEmail()).toEqual("tilina4883@cosaxu.com");
    });
  });

  describe("role", () => {
    it("should return the role \"Employee\" when calling the getRole method", () => {
      const role = "Employee";
      const employee = new Employee();
      
      expect(employee.getRole()).toEqual(role);
    });
  });
});
