import { createObjectCalculator } from "./problem1-3-7";

describe("createObjectCalculator", () => {
  let calculator;

  beforeEach(() => {
    calculator = createObjectCalculator(2, 3);
  });

  it("Должен возвращать объект calculator", () => {
    expect(typeof calculator).toBe("object");
    expect(calculator).toHaveProperty("read");
    expect(calculator).toHaveProperty("sum");
    expect(calculator).toHaveProperty("mul");
  });

  it("Должен правильно суммировать начальные значения", () => {
    expect(calculator.sum()).toBe(5);
  });

  it("Должен правильно умножать начальные значения", () => {
    expect(calculator.mul()).toBe(6);
  });

  it("Должен сохранять новые значения с помощью метода read", () => {
    calculator.read(12, 34);
    expect(calculator.sum()).toBe(46);
    expect(calculator.mul()).toBe(408);
  });

  it("Должен правильно суммировать после вызова read с другими значениями", () => {
    calculator.read(7, 8);
    expect(calculator.sum()).toBe(15);
  });

  it("Должен правильно умножать после вызова read с другими значениями", () => {
    calculator.read(7, 8);
    expect(calculator.mul()).toBe(56);
  });
});
