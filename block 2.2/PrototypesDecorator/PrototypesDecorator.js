class Addition {
  constructor(num) {
    this.num = num;
  }

  add(...nums) {
    const sum = (a, b) => a + b;
    return this.num + nums.reduce(sum);
  }
}
// Write you code here

export { Addition };
// Для запуска теста вводим в терминале команду: npm run test:current -- PrototypesDecorator.test.js
