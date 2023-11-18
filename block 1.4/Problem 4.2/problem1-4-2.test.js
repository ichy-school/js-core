import { createUsernames } from "./problem1-4-2";

describe("createUsernames", () => {
  it("Должна возвращать массив", () => {
    const data = [];
    const result = createUsernames(data);
    expect(Array.isArray(result)).toBe(true);
  });

  it("Должна создавать username для всех пользователей", () => {
    const data = [
      { firstName: "John", lastName: "D.", age: 28 },
      { firstName: "Jane", lastName: "D.", age: 32 },
    ];
    const result = createUsernames(data);
    expect(result[0]).toHaveProperty("username");
    expect(result[1]).toHaveProperty("username");
  });

  it("Должна создавать правильные username", () => {
    const currentYear = new Date().getFullYear();
    const data = [
      { firstName: "John", lastName: "D.", age: 28 },
      { firstName: "Jane", lastName: "D.", age: 32 },
    ];
    const birthYearJohn = currentYear - data[0].age;
    const birthYearJane = currentYear - data[1].age;
    const result = createUsernames(data);
    expect(result[0].username).toBe(`johnD${birthYearJohn}`.toLowerCase());
    expect(result[1].username).toBe(`janeD${birthYearJane}`.toLowerCase());
  });
});
