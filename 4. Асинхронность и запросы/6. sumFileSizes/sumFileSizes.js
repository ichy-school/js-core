const fileSizes = {
  testFile1: 65,
  testFile2: 48,
};

function getFileSize(filename, cb) {
  setTimeout(() => cb(fileSizes[filename]), Math.random() * 500);
}

function sumFileSizes(filename1, filename2, cb) {
  // Пишите код здесь
}

export { getFileSize, sumFileSizes, fileSizes };
// Для запуска теста вводим в терминале команду: npm run test:current -- sumFileSizes.test.js
