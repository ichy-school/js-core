# createUsernames

Дан массив пользователей. Необходимо преобразовать массив так, чтобы у каждого пользователя появился `username`. Поле `username` создается путем конкатенации `firstName` в нижнем регистре, первой буквы `lastName` в нижнем регистре и года рождения пользователя, который необходимо вычислить из текущей даты и возраста пользователя. Учтите, что функция должна работать даже в том случае, если вызвать ее, к примеру, через 10 лет.

### Данные всегда будут передаваться в указанном ниже формате:

- Возраст представлен в виде целого числа.
- Порядок объектов в массиве должен сохраняться.
- Порядок полей в объекте не важен.

### Пример:

#### Входные данные:

```javascript
const data = [
  { firstName: 'Emily', lastName: 'North', country: 'Ireland', continent: 'Europe', age: 30, language: 'Ruby' },
  { firstName: 'Nor', lastName: 'East', country: 'Malaysia', continent: 'Asia', age: 20, language: 'Clojure' }
];
```

#### Данные на выходе:

```javascript
// Предположим, что функция была вызвана в 2023 году:
const processedData = createUsernames(data);

console.log(processedData); /*
[
  { firstName: 'Emily', lastName: 'North', country: 'Ireland', continent: 'Europe', age: 30, language: 'Ruby',
    username: 'emilyn1993' },
  { firstName: 'Nor', lastName: 'East', country: 'Malaysia', continent: 'Asia', age: 20, language: 'Clojure',
    username: 'nore2003' }
];
*/
```