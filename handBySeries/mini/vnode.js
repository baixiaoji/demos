class VNode {
    constructor(tag, data, children, text, elm) {
        this.tag = tag;
        this.data = data;
        this.children = children;
        this.text = text;
        this.elm = elm;
    }
}

function createEmptyNode() {
    const node = new VNode();

    node.text = '';

    return node;
}

function createTextNode(val) {
    return new VNode(undefined, undefined, undefined, val);
}

function cloneVNode(node) {
    return new VNode({
        ...node,
    })
}

