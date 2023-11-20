import { promisesInSeries } from "./promisesInSeries";

describe("promisesInSeries", () => {
  test("должна вызывать функции в правильной последовательности", async () => {
    let firstCalled = false;
    let secondCalled = false;

    const firstPromise = jest.fn(
      () =>
        new Promise((resolve) => {
          firstCalled = true;
          setTimeout(() => resolve("first"), 10);
        })
    );

    const secondPromise = jest.fn(
      () =>
        new Promise((resolve) => {
          expect(firstCalled).toBeTruthy();
          secondCalled = true;
          setTimeout(() => resolve("second"), 10);
        })
    );

    const thirdPromise = jest.fn(
      () =>
        new Promise((resolve) => {
          expect(secondCalled).toBeTruthy();
          setTimeout(() => resolve("third"), 10);
        })
    );

    await promisesInSeries([firstPromise, secondPromise, thirdPromise]);

    expect(firstPromise).toHaveBeenCalled();
    expect(secondPromise).toHaveBeenCalled();
    expect(thirdPromise).toHaveBeenCalled();
  });

  test("должна возвращать Promise<undefined> на вызов без параметров", async () => {
    await expect(promisesInSeries([])).resolves.toBeUndefined();
  });
});
