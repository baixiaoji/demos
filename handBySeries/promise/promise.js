class HD {
    static STATUS_PENDING = 'pending'
    static STATUS_RESOLVE = 'resolve'
    static STATUS_REJECT = 'reject'

    constructor(executor) {
        this.status = HD.STATUS_PENDING;
        this.value = '';
        this.callbacks = [];

        try {
            executor(this.resolve.bind(this), this.reject.bind(this));
        } catch (error) {
            this.reject(error)
        }

    }

    resolve(value) {
        if (this.status !== HD.STATUS_PENDING) return;
        this.status = HD.STATUS_RESOLVE;
        this.value = value;

        this.callbacks.forEach(({ onSuccess }) => {
            onSuccess(value)
        })
    }

    reject(reason) {
        if (this.status !== HD.STATUS_PENDING) return;
        this.status = HD.STATUS_REJECT;
        this.value = reason;

        this.callbacks.forEach(({ onError }) => {
            onError(reason)
        })
    }

    then(onSuccess, onError) {
        if (typeof onSuccess !== 'function') {
            onSuccess = (val) => val;
        }
        if (typeof onError !== 'function') {
            onError = (reason) => { throw reason };
        }
        let promise;

        promise = new HD((resolve, reject) => {
            if (this.status === HD.STATUS_RESOLVE) {
                setTimeout(() => {
                    try {
                        const result = onSuccess(this.value)
                        this.dealHD(promise, result, resolve, reject);
                    } catch (error) {
                        reject(error)
                    }
                })
            }

            if (this.status === HD.STATUS_REJECT) {
                setTimeout(() => {
                    try {
                        const result = onError(this.value)
                        this.dealHD(promise, result, resolve, reject);
                    } catch (error) {
                        reject(error)
                    }
                })
            }

            if (this.status === HD.STATUS_PENDING) {
                this.callbacks.push({
                    onSuccess: (val) => {
                        try {
                            const result = onSuccess(val);
                            this.dealHD(promise, result, resolve, reject);
                        } catch (error) {
                            reject(error)
                        }
                    },
                    onError: (reason) => {
                        try {
                            const result = onError(reason);
                            this.dealHD(promise, result, resolve, reject);
                        } catch (error) {
                            reject(error);
                        }
                    },
                })
            }
        })

        return promise;
    }

    dealHD(promise, x, resolve, reject) {
        if (promise === x) {
            throw TypeError('can not having chainning');
        }

        if (x instanceof HD) {
            // 判断 x 的状态
            // pending 时候，在进行递归处理 then 中的 response值,
            
            //若不是就直接处理
            x.then(resolve, reject)
        } else {
            // 若不是 null 的 object 或是 function
            // 需要 进行取出  then 函数， 调用改方法
            // 记得该段逻辑要 trycatch 住


            // 所有都不是 就直接resolve掉
            resolve(x);
        }
    }
}