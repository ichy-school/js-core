function increaseSalary() {
  // Пишите код здесь
}

const api = {
  _employees: [
    { id: 1, name: "Ivan", salary: 120000 },
    { id: 2, name: "Peter", salary: 110000 },
    { id: 3, name: "Viktor", salary: 80000 },
  ],

  getEmployees() {
    return new Promise((resolve) => {
      resolve(this._employees.slice());
    });
  },

  setEmployeeSalary(employeeId, newSalary) {
    return new Promise((resolve) => {
      this._employees = this._employees.map((employee) =>
        employee.id !== employeeId
          ? employee
          : {
              ...employee,
              salary: newSalary,
            }
      );
      resolve(this._employees.find(({ id }) => id === employeeId));
    });
  },

  notifyEmployee(employeeId, text) {
    return new Promise((resolve) => {
      resolve(true);
    });
  },

  notifyAdmin(error) {
    return new Promise((resolve) => {
      resolve(true);
    });
  },

  setEmployees(newEmployees) {
    return new Promise((resolve) => {
      this._employees = newEmployees;
      resolve();
    });
  },
};

export { increaseSalary, api };
// Для запуска теста вводим в терминале команду: npm run test:current -- increaseSalary.test.js
