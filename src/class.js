// 判断是否有class
export let hasClass = function (clazz) {
    if (this.length <= 0) throw new Error('Target empty!')

    return this[0].classList.contains(clazz)
}

// 删除class
export let removeClass = function (clazz) {
    for (let i = 0; i < this.length; i++) {
        this[i].classList.remove(clazz)
    }
    return this
}

// 添加class
export let addClass = function (clazz) {
    for (let i = 0; i < this.length; i++) {
        this[i].classList.add(clazz)
    }
    return this
}

// 切换class
export let toggerClass = function (clazz) {
    for (let i = 0; i < this.length; i++) {
        this[i].classList.toggle(clazz)
    }
    return this
}