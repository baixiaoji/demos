function _hyperscript(tagName, attrs, ...children) {
    const $el = document.createElement(tagName);

    for(let key in attrs) {
        $el.setAttribute(key, attrs[key]);
    }

    children.forEach(child => {
        if (typeof child === 'string') {
            $el.appendChild(document.createTextNode(child));
        } else {
            $el.appendChild(child);
        }
    }) 

    return $el;
}

function hyperscript(tagName, attributes, children) {
    return {tagName, attributes, children};
}

function renderNode(vnode) {
    let el;
    const {tagName, attributes, children} = vnode;

    if (vnode.split) return document.createTextNode(vnode);
    
    if (typeof tagName === 'string') {
        el = document.createElement(tagName);
    
        for (const key in attributes) {
            el.setAttribute(key, attributes[key]);
        }
    } else if (typeof tagName === 'function') {
        const component = new tagName(attributes);
        el = renderNode(
            component.render(component.props, component.state)
        )

        component.base = el;
    }
    

    (children || []).forEach(child => {
        el.appendChild(renderNode(child));
    })

    return el;

}
