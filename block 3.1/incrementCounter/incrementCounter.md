# Increment Counter

В `localStorage` по ключу "counters" находится JSON c объектом, полями которого являются имена счётчиков, а значениями - числовое значение счётчика. Напишите функцию `incrementCounter`, которой на вход первым параметром передаётся `counterName` - имя счётчика.

Задача функции - увеличить значение счётчика `counterName` на 1 и обновить данные в `localStorage`. В `localStorage` может находиться невалидный JSON, чтение которого может привести к ошибке, в этом случае функция должна записывать новые данные, где у указанного счетчика будет значение 1. В конце функция должна возвращать значение счетчика после инкремента.

## Пример использования:

```javascript
// в localStorage 1 счетчик: bannerClick = 5
incrementCounter("bannerClick"); // 6
incrementCounter("bannerClose"); // 1
// в localStorage 2 счетчика: bannerClick = 6, bannerClose = 1
```
