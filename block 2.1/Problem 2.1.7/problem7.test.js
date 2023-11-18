import { unique } from "./problem7";

describe("unique", () => {
  test("Должен работать с примитивами", () => {
    const data = [1, 2, 2, 3, 4, 4, 5, 5, 5];
    expect(unique(data)).toEqual([1, 2, 3, 4, 5]);
    expect(data).toEqual([1, 2, 2, 3, 4, 4, 5, 5, 5]);
  });

  test("Должен работать с объектами", () => {
    const obj1 = { name: "John" };
    const obj2 = { name: "Doe" };
    const data = [obj1, obj1, obj2, obj2, obj2];
    const result = unique(data);
    expect(result).toEqual([obj1, obj2]);
    expect(result[0]).toBe(obj1);
    expect(result[1]).toBe(obj2);
  });

  test("Должен использовать Set", () => {
    const functionString = unique.toString();
    expect(functionString).toMatch("new Set");
  });

  test("Должен сохранять порядок элементов", () => {
    const data = [3, 1, 2, 3, 2, 1];
    expect(unique(data)).toEqual([3, 1, 2]);
  });

  test("Должен работать с пустым массивом", () => {
    const data = [];
    expect(unique(data)).toEqual([]);
  });

  test("Должен работать с массивом содержащим разные типы", () => {
    const data = [null, undefined, null, "hello", "hello", 42, 42];
    expect(unique(data)).toEqual([null, undefined, "hello", 42]);
  });
});
