interface browserjsInstance {

    /**
     * 把target合并到source或this中
     * @param target 
     * @param source 
     */
    extend(target: any, source?: any): any

    /**
     * 获取指定索引的结点，返回一个新的browserjs对象
     * @param index 
     */
    eq(index: number): this

    /**
     * 获取指定样式
     * @param key 
     */
    css(key: string): string

    /**
     * 设置指定样式
     * @param key 
     * @param value 
     */
    css(key: string, value: string): this

    /**
     * 获取全部样式
     */
    css(): object

    /**
     * 设置大量样式
     * @param styles 
     */
    css(styles: object): this

    /**
     * 绑定事件
     */
    bind(eventType: string, callback: Function): this

    /**
     * 解除绑定事件
     */
    unbind(eventType: string, handler: Function): this

    /**
     * 触发事件
     * @param eventType 
     */
    trigger(eventType: string): this

    /**
     * 把当前维护的结点加到目标结点内部的结尾
     * @param target 目标节点
     * @param context 可选，查找上下文
     */
    appendTo(target: any, context?: any): this

    /**
     * 把当前维护的结点加到目标结点内部的开头
     * @param target 目标节点
     * @param context 可选，查找上下文
     */
    prependTo(target: any, context?: any): this

    /**
     * 把当前维护的结点加到目标结点之后
     * @param target 目标节点
     * @param context 可选，查找上下文
     */
    afterTo(target: any, context?: any): this

    /**
     * 把当前维护的结点加到目标结点之前
     * @param target 目标节点
     * @param context 可选，查找上下文
     */
    beforeTo(target: any, context?: any): this

    /**
     * 从页面中删除当前维护的结点
     */
    remove(): this

    /**
     * 获取属性
     * @param name 
     */
    attr(name: string): string

    /**
     * 设置指定属性值
     * @param name 
     * @param value 
     */
    attr(name: string, value: any): this

    /**
     * 设置大量属性
     * @param styles 
     */
    attr(styles: object): this

    /**
     * 判断是否有class
     * @param clazz 
     */
    hasClass(clazz: string): boolean

    /**
     * 删除class
     * @param clazz 
     */
    removeClass(clazz: string): this

    /**
     * 添加class
     * @param clazz 
     */
    addClass(clazz: string): this

    /**
     * 切换class
     * @param clazz 
     */
    toggerClass(clazz: string): this
}

interface browserjsType {

    /**
     * 返回browserjs对象
     * @param selector 选择器
     * @param context 可选，查找上下文
     */
    (selector: any, context?: any): browserjsInstance

    /**
     * 把target合并到source或this中
     * @param target 
     * @param source 
     */
    extend(target: any, source?: any): any

    /**
     * 等待DOM加载完毕执行
     * @param callback 
     */
    onReady(callback: Function): null
}

declare let browserjs: browserjsType

export default browserjs