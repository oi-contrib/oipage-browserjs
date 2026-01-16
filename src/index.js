/**
 * 设计需求是：
 * browserjs和browserjs(selector[, context])
 * 分别表示类和对象
 *
 * 题外：为什么不选择browserjs和new browserjs(selector[, context])?
 * 只是感觉没有前面的写法用起来简洁
 *
 * 为了实现需求，第一反应是：
 * let browserjs=function(selector,context){
 *      return new browserjs();
 * };
 *
 * 在browserjs上挂载静态方法，在browserjs.prototype上挂载对象方法，
 * 看起来稳的很，其实这明显是一个死循环。
 *
 * 为了解决这个问题，我们在browserjs的原型上定义了一个方法：
 * browserjs.prototype.init=function(selector,context){
 *      return this;
 * };
 *
 *  执行下面的方法：
 *  let temp=browserjs.prototype.init(selector, context);
 *  上面返回的temp很明显就是browserjs.prototype，其实就是browserjs对象
 * （例如：new A()，其实就是取A.prototype，这样对比就很好理解了）
 *
 * 因此可以改造代码如下：
 *
 * 这样browserjs和new browserjs(selector[, context])就分别表示类和对象。
 *
 * 问：看起来是不是实现了？
 * 答：是的，实现了。
 * 问：可是总感觉有点不好，说不出为什么。
 * 答：是不是感觉browserjs()打印出来的东西有点多？
 * 问：是的。
 *
 * 事实上，因为直接取browserjs.prototype作为new browserjs(),
 * 理论上说，使用上区别不大，唯一不足的是，
 * 挂载在browserjs.prototype上的方法会在打印browserjs对象的时候看见，不舒服。
 *
 * 为了看起来好看些，代码再次改造：
 * let browserjs = function (selector, context) {
 *      return new browserjs.prototype.init(selector, context);
 * };
 *
 * 为了让browserjs(selector, context)返回的是browserjs对象，需要修改browserjs.prototype.init的原型：
 * browserjs.prototype.init.prototype = browserjs.prototype;
 *
 * 这样：
 *      browserjs(selector, context) ==
 *      return new browserjs.prototype.init(selector, context) ==
 *      browserjs.prototype.init.prototype ==
 *      browserjs.prototype ==
 *      new browserjs(selector, context)
 *
 * 此时需求就实现了，
 * 而且打印browserjs(selector, context)的时候，
 * 对象上的方法都在原型上，看起来就比较舒服了。
 */

import sizzle from './sizzle.js'

let browserjs = function (selector, context) {
    return new browserjs.prototype.init(selector, context)
}

browserjs.prototype.init = function (selector, context) {

    // 使用sizzle获取需要维护的结点，并把结点维护到browserjs对象中
    let nodes = sizzle(selector, context), flag
    for (flag = 0; flag < nodes.length; flag++) {
        this[flag] = nodes[flag]
    }

    // 设置结点个数
    this.length = nodes.length
    return this
}

// 扩展方法
// 在browserjs和browserjs.prototype上分别调用extend方法就可以在类和对象上扩展方法了
browserjs.prototype.extend = browserjs.extend = function () {

    let target = arguments[0] || {}
    let source = arguments[1] || {}
    let length = arguments.length

    /*
     * 确定复制目标和源
     */
    if (length === 1) {
        //如果只有一个参数，目标对象是自己
        source = target
        target = this
    }

    /*
     * 复制属性到对象上面
     */
    for (let key in source) {
        try {
            target[key] = source[key];
        } catch (e) {

            // 为什么需要try{}catch(e){}？
            // 一些对象的特殊属性不允许覆盖，比如name
            // 执行：browserjs.extend({'name':'新名称'})
            // 会抛出TypeError
            throw new Error("Illegal property key：" + key + "！")
        }
    }

    return target
}

browserjs.prototype.init.prototype = browserjs.prototype

import { onReady } from "oipage/web/onReady/index"

browserjs.extend({
    onReady
})

import { eq } from "./find.js"
import style from "./style.js"
import { bind, unbind, trigger } from "./event.js"
import { appendTo, prependTo, afterTo, beforeTo, remove } from "./dom.js"
import attr from "./attr.js"
import { hasClass, removeClass, addClass, toggerClass } from "./class.js"

browserjs.prototype.extend({
    eq,
    css: style,
    bind, unbind, trigger,
    appendTo, prependTo, afterTo, beforeTo, remove,
    attr,
    hasClass, removeClass, addClass, toggerClass
})

export default browserjs
