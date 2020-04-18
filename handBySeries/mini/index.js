function defineReactive(obj, key, val) {
    const dep = new Dep()
    Object.defineProperty(obj, key, {
        configurable: true,
        enumerable: true,
        set(newVal) {
            if(newVal === val) return;
            dep.notify();
        },
        get() {
            dep.addSub(Dep.target);
            return val;
        }
    })
}

function observer(object) {
    if (!object || (typeof object !== 'object')) return;

    Object.keys(object).forEach(key => {
        defineReactive(object, key, object[key]);
    })
}

class Dep {
    constructor() {
        this.subs = [];
    }
    addSub(sub) {
        this.subs.push(sub);
    }
    notify() {
        this.subs.forEach(sub => {
            sub.update();
        })
    }
}

class Watcher {
    constructor() {
        Dep.target = this;
    }

    update() {
        console.log('view upate');
    }
}
Dep.target = null;

class Vue {
    constructor(options) {
        this._data = options.data;

        observer(this._data);

        new Watcher();

        console.log('render', this._data.name);
    }
}

const vm = new Vue({
    data: {
        name: 'baiji',
    },
})

vm._data.name = 'xiao';

