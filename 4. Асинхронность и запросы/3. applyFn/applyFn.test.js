import { ExecutionError, applyFn } from "./applyFn";

describe("applyFn", () => {
  it("Должна возвращать в succeeded массив результатов", () => {
    const dataArr = [1, 2, 3];
    const callback = (arg) => arg + 1;
    const { succeeded, errors } = applyFn(dataArr, callback);
    expect(succeeded).toEqual([2, 3, 4]);
    expect(errors).toEqual([]);
  });

  it("Должна возвращать в errors массив ошибок с правильными данными вызова", () => {
    const dataArr = [1, "error", 3];
    const callback = (arg) => {
      if (arg === "error") {
        throw new Error("Test error");
      }
      return arg + 1;
    };
    const { succeeded, errors } = applyFn(dataArr, callback);
    expect(succeeded).toEqual([2, 4]);
    expect(errors).toHaveLength(1);
    expect(errors[0]).toBeInstanceOf(ExecutionError);
    expect(errors[0].getArgData()).toBe("error");
  });

  it("Должна возвращать в errors массив ошибок с правильными call stacks", () => {
    const dataArr = [1, "error", 3];
    const callback = (arg) => {
      if (arg === "error") {
        throw new Error("Test error");
      }
      return arg + 1;
    };
    const { errors } = applyFn(dataArr, callback);
    expect(errors[0].stack).toContain("Error: Test error");
    expect(errors[0].stack).toContain("at callback");
  });
});
