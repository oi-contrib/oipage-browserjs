// 绑定事件
export let bind = function (eventType, callback) {

    if (window.attachEvent) {
        for (let i = 0; i < this.length; i++)
            this[i].attachEvent("on" + eventType, callback) // 后绑定的先执行
    } else {
        for (let i = 0; i < this.length; i++)
            this[i].addEventListener(eventType, callback, false)// 捕获
    }

    return this
}

// 解除绑定事件
export let unbind = function (eventType, handler) {

    if (window.detachEvent) {
        for (let i = 0; i < this.length; i++)
            this[i].detachEvent("on" + eventType, handler)
    } else {
        for (let i = 0; i < this.length; i++)
            this[i].removeEventListener(eventType, handler, false)
    }

    return this
}

// 触发事件
export let trigger = function (eventType) {
    for (let i = 0; i < this.length; i++) {

        // 标准浏览器使用dispatchEvent方法
        if (document.createEvent) {
            let event = document.createEvent("HTMLEvents")

            // 3个参数：事件类型，是否冒泡，是否阻止浏览器的默认行为
            event.initEvent(eventType, true, false)

            this[i].dispatchEvent(event)
        }

        // IE浏览器支持fireEvent方法
        else {
            let event = document.createEventObject()
            this[i].fireEvent("on" + eventType, event)
        }
    }
    return this
}