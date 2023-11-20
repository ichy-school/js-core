class AttemptsLimitExceeded extends Error {
  constructor() {
    super("Max attempts limit exceed");
    this.name = "AttemptsLimitExceeded";
  }
}

class NotFoundError extends Error {
  constructor() {
    super("Not found");
    this.name = "NotFoundError";
  }
}

class TemporaryError extends Error {
  constructor() {
    super("TemporaryError");
    this.name = "TemporaryError";
  }
}

function getRepeatableData(getData, key, maxRequestsNumber) {
  //Пишите код здесь
}

export {
  AttemptsLimitExceeded,
  NotFoundError,
  TemporaryError,
  getRepeatableData,
};
// Для запуска теста вводим в терминале команду: npm run test:current -- getRepeatableData.test.js
