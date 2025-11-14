import { setStyle, getStyle } from "oipage/web/style/index"

// 设置或获取样式
export default function () {

    // 获取样式
    if (arguments.length <= 1 && (arguments.length <= 0 || typeof arguments[0] !== 'object')) {
        if (this.length <= 0) throw new Error('Target empty!')
        return getStyle(this[0], arguments[0])
    }

    // 设置样式
    let styles = arguments[0]
    if (arguments.length > 1) styles = { [arguments[0]]: arguments[1] }
    for (let i = 0; i < this.length; i++) setStyle(this[i], styles)

    return this
}