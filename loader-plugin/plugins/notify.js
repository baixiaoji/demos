function loop() {}

class Notify {
    constructor(doneCallback, errorCallback) {
        this.success = doneCallback || loop;
        this.error = errorCallback || loop;
    }

    apply(compiler) {
        compiler.hooks.done.tap('Notify', (stats) => {
            this.success(stats);
        })

        compiler.hooks.failed.tap('Notify', (stats) => {
            this.error(stats);
        })
    }
}

module.exports = Notify;