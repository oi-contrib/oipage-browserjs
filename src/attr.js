// 设置或获取属性
export default function () {

    // 获取属性值
    if (arguments.length === 1 && typeof arguments[0] !== 'object') {
        if (this.length <= 0) throw new Error('Target empty!')
        return this[0].getAttribute(arguments[0])
    }

    // 设置属性值
    else if (arguments.length > 0) {
        for (let i = 0; i < this.length; i++) {
            if (arguments.length === 1) {
                for (let key in arguments[0])
                    this[i].setAttribute(key, arguments[0][key])
            } else this[i].setAttribute(arguments[0], arguments[1])
        }
    }

    return this
}