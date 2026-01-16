# 事件

## 绑定事件

```js
bjs.bind(eventType: string, callback: Function): this
```

## 解除绑定事件

```js
bjs.unbind(eventType: string, handler: Function): this
```

## 触发事件

> v1.1.0 新增

```js
bjs.trigger(eventType: string):this