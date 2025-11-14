// 绑定事件
export let bind = function (eventType, callback) {

    if (window.attachEvent) {
        for (let flag = 0; flag < this.length; flag++)
            this[flag].attachEvent("on" + eventType, callback) // 后绑定的先执行
    } else {
        for (let flag = 0; flag < this.length; flag++)
            this[flag].addEventListener(eventType, callback, false)// 捕获
    }

    return this
}

// 解除绑定事件
export let unbind = function (eventType, handler) {

    if (window.detachEvent) {
        for (let flag = 0; flag < this.length; flag++)
            this[flag].detachEvent("on" + eventType, handler)
    } else {
        for (let flag = 0; flag < this.length; flag++)
            this[flag].removeEventListener(eventType, handler, false)
    }

    return this
}