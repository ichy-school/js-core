# getRepeatableData

Написать функцию `getRepeatableData`, которая принимает на вход три параметра:

- `getData` - функция, возвращающая данные со стороннего источника. Может генерировать ошибки.
- `key` - аргумент, с которым нужно вызвать `getData`.
- `maxRequestsNumber` - максимальное количество вызовов `getData` функции. Если этот параметр отсутствует - повторяем бесконечное количество раз.

```javascript
getRepeatableData(getData, key, maxRequestsNumber);
```

Функция `getRepeatableData` должна вызывать `getData` и обрабатывать ошибки по условию:

- Если вызов `getData` возвращает ошибку `NotFoundError`, то мы пробрасываем исключение.
- Если вызов `getData` возвращает ошибку `TemporaryError`, то мы должны делать повторный вызов `getData` функции. Количество таких вызовов не должно превышать значение `maxRequestsNumber`. Если количество повторных вызовов превышает `maxRequestsNumber`, то функция `getRepeatableData` должна пробрасывать ошибку `AttemptsLimitExceeded`.
- Если `getData` выполняется без ошибок - функция должна вернуть то, что вернула `getData`.

## Пример:

```javascript
const getData = (key) => "hello" + key;
const res = getRepeatableData(getData, "1", 3); // 'hello1'
```
