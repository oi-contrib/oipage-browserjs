// 获取指定索引的结点，返回一个新的browserjs对象
export let eq = function (index) {
    let len = this.length

    if (index >= len || index < 0) {
        return new browserjs()
    }
    return new browserjs(this[index])
}