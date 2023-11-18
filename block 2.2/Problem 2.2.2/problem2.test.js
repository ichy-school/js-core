import { Book } from "./problem2";

describe("Book", () => {
  let book;

  beforeEach(() => {
    // Перед каждым тестом мы создаем новую книгу
    book = new Book("JavaScript: The Good Parts", "Douglas Crockford", 2008);
  });

  test("Должен создавать экземпляр Book без функций в нем", () => {
    expect(book.hasOwnProperty("isAvailable")).toBe(false);
    expect(book.hasOwnProperty("takeBook")).toBe(false);
    expect(book.hasOwnProperty("returnBook")).toBe(false);
    expect(book.hasOwnProperty("changeBookName")).toBe(false);
    expect(book.hasOwnProperty("changeAuthorName")).toBe(false);
    expect(book.hasOwnProperty("getCurrentReader")).toBe(false);
  });

  test("Должен иметь прототип со всеми функциями", () => {
    expect(Book.prototype).toEqual(
      expect.objectContaining({
        isAvailable: expect.any(Function),
        takeBook: expect.any(Function),
        returnBook: expect.any(Function),
        changeBookName: expect.any(Function),
        changeAuthorName: expect.any(Function),
        getCurrentReader: expect.any(Function),
      })
    );
  });

  test("Должен показывать актуальное состояние книги", () => {
    expect(book.isAvailable()).toBe(true); // Книга должна быть доступна при создании
    book.takeBook("Reader");
    expect(book.isAvailable()).toBe(false); // Не должна быть доступна после выдачи
    book.returnBook();
    expect(book.isAvailable()).toBe(true); // Должна снова стать доступной после возврата
  });

  test("Должен выдавать значение текущего читателя", () => {
    expect(book.getCurrentReader()).toBeNull(); // При создании читатель должен быть null
    book.takeBook("Reader");
    expect(book.getCurrentReader()).toBe("Reader"); // Должен возвращать имя читателя
    book.returnBook();
    expect(book.getCurrentReader()).toBeNull(); // Снова должен быть null после возврата
  });

  test("Должен изменять имя автора", () => {
    book.changeAuthorName("New Author");
    expect(book.author).toBe("New Author"); // Имя автора должно измениться
  });

  test("Должен изменять имя книги", () => {
    book.changeBookName("New Book Title");
    expect(book.name).toBe("New Book Title"); // Название книги должно измениться
  });
});
