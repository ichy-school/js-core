# IsEmpty

Напишите функцию `isEmpty`, которая возвращает `true`, если у объекта нет свойств (у самого объекта, не у прототипов), иначе возвращает `false`.

```javascript
const obj = Object.create(null);
isEmpty(obj); // -> true
isEmpty({ prop: "value" }); // -> false
```

# IsEmptyWithProtos

Напишите функцию `isEmptyWithProtos`, которая возвращает `true`, если у объекта и его прототипов (не включая `Object.prototype`) нет свойств, иначе возвращает `false`.

```javascript
const protoObj = Object.create(null);
const obj = Object.create(protoObj);
isEmptyWithProtos(obj); // -> true
isEmptyWithProtos({}); // -> false
```

Обратите внимание на то, что функция `isEmptyWithProtos` проверяет наличие свойств не только у самого объекта, но и у его прототипов. Если создать пустой объект литерально (просто через фигурные скобки, как в примере `{}`), то у такого объекта автоматически будет прототип `Object`. Поэтому `isEmptyWithProtos` возвращает `false` для таких объектов.
