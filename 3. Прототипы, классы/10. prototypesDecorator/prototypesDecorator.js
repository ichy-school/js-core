class Addition {
  constructor(num) {
    this.num = num;
  }

  add(...nums) {
    const sum = (a, b) => a + b;
    return this.num + nums.reduce(sum);
  }
}

// Пишите код здесь

export { Addition };
// Для запуска теста вводим в терминале команду: npm run test:current -- prototypesDecorator.test.js
