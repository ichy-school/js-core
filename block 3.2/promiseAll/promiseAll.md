# PromiseAll

Напишите асинхронную функцию, которая принимает массив промисов и возвращает массив результатов вызова этих промисов.

## Пример:

```javascript
const firstPromise = new Promise((resolve) =>
  setTimeout(() => resolve(300), 300)
);

const secondPromise = new Promise((resolve) =>
  setTimeout(() => resolve(200), 200)
);

const thirdPromise = new Promise((resolve) =>
  setTimeout(() => resolve(100), 100)
);

promiseAll([firstPromise, secondPromise, thirdPromise]).then(console.log); // [300, 200, 100]
```
