function instanceof_profile(leftObject, target) {
    let prototype = leftObject.__proto__;
    const targetPrototype = target.prototype;

    while(true) {
        if (prototype === null) {
            return false;
        }
        if (prototype === targetPrototype) {
            return true;
        }

        prototype = prototype.__proto__;
    }
}