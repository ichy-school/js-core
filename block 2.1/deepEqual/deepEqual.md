# DeepEqual

Напишите функцию `deepEqual`, которая проверяет на равенство два объекта, учитывая их вложенность.

Два объекта считаются равными, если у них все свойства одинаковы. В случае, если одно из свойств - само объект, мы сравниваем на равенство эти объекты по тому же алгоритму.

## Пример:

```javascript
const firstObject = {
  a: {
    b: {
      c: 1,
      d: "string",
      e: {
        num: 1,
      },
    },
  },
};

const secondObject = {
  a: {
    b: {
      e: {
        num: 1,
      },
      d: "string",
      c: 1,
    },
  },
};

deepEqual(firstObject, secondObject); // true
deepEqual({ a: 1, b: 3 }, { b: 2, a: 1 }); // false
deepEqual(1, 2); // false
deepEqual(true, false); // false
```
