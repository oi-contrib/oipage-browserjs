import browserjs from "./index.js"

export default function sizzle(selector, context = document) {

    // browserjs对象
    if (selector.constructor === browserjs) {
        return selector
    }

    // 数组
    else if (Array.isArray(selector)) {
        let nodes = []
        for (let i = 0; i < selector.length; i++) {
            let items = sizzle(selector[i], context)
            for (let j = 0; j < items.length; j++) {
                nodes.push(items[j])
            }
        }
        return nodes
    }

    // 结点
    else if (typeof selector === "object" && [1, 9, 11].indexOf(selector.nodeType) > -1) {
        return [selector]
    }


    else if (typeof selector === "string") {
        try {

            if (/^</.test(selector)) {

                let frame, frameTagName = 'div'

                // 大部分的标签可以直接使用div作为容器
                // 部分特殊的需要特殊的容器标签

                if (/^<tr[> ]/.test(selector)) {
                    frameTagName = "tbody"
                } else if (/^<th[> ]/.test(selector) || /^<td[> ]/.test(selector)) {
                    frameTagName = "tr"
                } else if (/^<thead[> ]/.test(selector) || /^<tbody[> ]/.test(selector)) {
                    frameTagName = "table"
                }

                frame = document.createElement(frameTagName)
                frame.innerHTML = selector

                return frame.childNodes
            }

            // 选择器
            // 基于现代浏览器，直接使用querySelectorAll
            else {
                let contexts = sizzle(context, document)
                return contexts.length > 0 ? contexts[0].querySelectorAll(selector) : []
            }
        } catch (e) {
            console.error(e)
            return []
        }
    }

    // 意料之外的
    else {
        throw new Error('Unknown selector:' + selector);
    }
}