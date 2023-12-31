import { api, increaseSalary } from "./increaseSalary";

describe("increaseSalary", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("Функция должна возвращать промис", () => {
    expect(increaseSalary()).toBeInstanceOf(Promise);
  });

  it("Должна корректно увеличивать ЗП сотрудника с наименьшей ЗП", async () => {
    const minSalaryEmployee = api._employees.find(
      (e) => e.salary === Math.min(...api._employees.map((emp) => emp.salary))
    );
    const expectedNewSalary = minSalaryEmployee.salary * 1.2;
    const spySetEmployeeSalary = jest
      .spyOn(api, "setEmployeeSalary")
      .mockResolvedValue({
        id: minSalaryEmployee.id,
        name: minSalaryEmployee.name,
        salary: expectedNewSalary,
      });

    await increaseSalary();
    expect(spySetEmployeeSalary).toHaveBeenCalledWith(
      minSalaryEmployee.id,
      expectedNewSalary
    );
  });

  it("Должна отправлять уведомление сотруднику", async () => {
    const spyNotifyEmployee = jest
      .spyOn(api, "notifyEmployee")
      .mockResolvedValue(true);

    await increaseSalary();
    expect(spyNotifyEmployee).toHaveBeenCalledWith(3, expect.any(String));
  });

  it("В случае ошибки увеличения ЗП должна отправлять уведомление администратору, но не пользователю", async () => {
    const spyNotifyAdmin = jest
      .spyOn(api, "notifyAdmin")
      .mockResolvedValue(true);
    const spyNotifyEmployee = jest.spyOn(api, "notifyEmployee");
    jest
      .spyOn(api, "setEmployeeSalary")
      .mockRejectedValue(new Error("Error updating salary"));

    await increaseSalary();
    expect(spyNotifyAdmin).toHaveBeenCalled();
    expect(spyNotifyEmployee).not.toHaveBeenCalled();
  });
});
