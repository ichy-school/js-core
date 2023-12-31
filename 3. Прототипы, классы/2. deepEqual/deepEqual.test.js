import { deepEqual } from "./deepEqual";

describe("deepEqual", () => {
  it("Сравнение одинаковых примитивных значений должно быть равным", () => {
    expect(deepEqual(1, 1)).toBe(true);
  });

  it("Сравнение разных примитивных значений не должно быть равным", () => {
    expect(deepEqual(1, 2)).toBe(false);
  });

  it("Сравнение 0 и false не должно быть равным", () => {
    expect(deepEqual(0, false)).toBe(false);
  });

  it("Сравнение двух null должно быть равным", () => {
    expect(deepEqual(null, null)).toBe(true);
  });

  it("Сравнение null с числом не должно быть равным", () => {
    expect(deepEqual(null, 1)).toBe(false);
  });

  it("Сравнение объекта с null не должно быть равным", () => {
    const a = { name: "Misha", order: { price: 20 } };
    const b = null;
    expect(deepEqual(a, b)).toBe(false);
  });

  it("Объект и его копия, расширенная дополнительным свойством со значением null, не должны быть равными", () => {
    const a = { name: "Misha", order: { price: 20 } };
    const b = { name: "Misha", order: { price: 20 }, extraField: null };
    expect(deepEqual(a, b)).toBe(false);
  });

  it("Вложенные объекты с одинаковыми свойствами, но в разном порядке, должны быть равными", () => {
    const a = { test: { name: "Misha", order: { price: 20 } } };
    const b = { test: { order: { price: 20 }, name: "Misha" } };
    expect(deepEqual(a, b)).toBe(true);
  });

  it("Объект и его копия, с изменённым вложенным свойством, не должны быть равными", () => {
    const a = { name: "Misha", order: { price: 20 } };
    const b = { name: "Misha", order: { price: 1000 } };
    expect(deepEqual(a, b)).toBe(false);
  });

  it("Объект и его копия, с дополнительным свойством со значением null во вложенном объекте, не должны быть равными", () => {
    const a = { name: "Misha", order: { price: 20 } };
    const b = { name: "Misha", order: { price: 20, extraField: null } };
    expect(deepEqual(a, b)).toBe(false);
  });

  it("Объекты с одинаковыми свойствами, но разным порядком, должны быть равными", () => {
    const a = { name: "Misha", order: { price: 20 } };
    const b = { order: { price: 20 }, name: "Misha" };
    expect(deepEqual(a, b)).toBe(true);
  });

  it("Объект и его копия, с изменённым свойством, не должны быть равными", () => {
    const a = { name: "Misha", order: { price: 20 } };
    const b = { order: { price: 20 }, name: "Petya" };
    expect(deepEqual(a, b)).toBe(false);
  });

  // Сравнение объектов с глубокой вложенностью
  it("Объект с глубокой вложенностью и его копия, с дополнительным свойством в значении null, не должны быть равными", () => {
    const a = {
      name: "Misha",
      order: {
        price: 20,
        count: 1,
        taxes: { vat: { name: "vat", amount: { uah: 10, usd: 0.37 } } },
        total: {
          withoutTaxes: { uah: 20, usd: 0.74 },
          withTaxes: { vat: { uah: 30, usd: 1.11 } },
        },
      },
    };
    const b = {
      name: "Misha",
      order: {
        price: 20,
        count: 1,
        taxes: { vat: { name: "vat", amount: { uah: 10, usd: 0.37 } } },
        total: {
          withoutTaxes: { uah: 20, usd: 0.74 },
          withTaxes: { vat: { uah: 30, usd: 1.11, eur: null } },
        },
      },
    };
    expect(deepEqual(a, b)).toBe(false);
  });

  it("Объект с глубокой вложенностью и его копия, со свойствами в другом порядке, должны быть равными", () => {
    const a = {
      name: "Misha",
      order: {
        price: 20,
        count: 1,
        taxes: { vat: { name: "vat", amount: { uah: 10, usd: 0.37 } } },
        total: {
          withoutTaxes: { uah: 20, usd: 0.74 },
          withTaxes: { vat: { uah: 30, usd: 1.11 } },
        },
      },
    };
    const b = {
      name: "Misha",
      order: {
        count: 1,
        price: 20,
        taxes: { vat: { name: "vat", amount: { uah: 10, usd: 0.37 } } },
        total: {
          withTaxes: { vat: { uah: 30, usd: 1.11 } },
          withoutTaxes: { usd: 0.74, uah: 20 },
        },
      },
    };
    expect(deepEqual(a, b)).toBe(true);
  });

  it("Объект с глубокой вложенностью и его копия, с изменённым свойством, не должны быть равными", () => {
    const a = {
      name: "Misha",
      order: {
        price: 20,
        count: 1,
        taxes: { vat: { name: "vat", amount: { uah: 10, usd: 0.37 } } },
        total: {
          withoutTaxes: { uah: 20, usd: 0.74 },
          withTaxes: { vat: { uah: 30, usd: 1.11 } },
        },
      },
    };
    const b = {
      name: "Misha",
      order: {
        price: 20,
        count: 1,
        taxes: { vat: { name: "vat", amount: { uah: 10, usd: 0.37 } } },
        total: {
          withoutTaxes: { uah: 20, usd: 575 },
          withTaxes: { vat: { uah: 30, usd: 1.11 } },
        },
      },
    };
    expect(deepEqual(a, b)).toBe(false);
  });

  it("В случае, когда объекты ссылаются друг на друга, функция должна продолжать работать до переполнения call stack", () => {
    const a = { self: null };
    const b = { self: null };
    a.self = a;
    b.self = b;
    expect(() => deepEqual(a, b)).toThrow("Maximum call stack size exceeded");
  });
});
