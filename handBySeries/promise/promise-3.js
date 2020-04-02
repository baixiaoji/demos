class HD {
    static PENDING = 'pending'
    static RESOLVE = 'resolve'
    static REJECT = 'reject'
    constructor(executor) {
        this.status = HD.PENDING;
        this.value = '';
        this.callbacks = [];

        try {
            executor(this.resolve.bind(this), this.reject.bind(this));    
        } catch (error) {
            this.reject(error);
        }
    }

    resolve(value) {
        if (this.status !== HD.PENDING) return;

        this.status = HD.RESOLVE;
        this.value = value;

        this.callbacks.forEach((cb) => {
            cb.onSuccess(value);
        })

    }

    reject(reason) {
        if (this.status !== HD.PENDING) return;
        
        this.status = HD.REJECT;
        this.value = reason;

        this.callbacks.forEach((cb) => {
            cb.onError(reason);
        })
    }

    then(onSuccess, onError) {
        if (typeof onSuccess !== 'function') {
            onSuccess = (value) => value;
        }
        if (typeof onError !== 'function') {
            onError = (reason) => {throw reason};
        }
        const promise2 = new HD((resolve, reject) => {
            
            if (this.status === HD.RESOLVE) {
                setTimeout(() => {
                    try {
                        
                        this.parse(promise2, onSuccess(this.value), resolve, reject);
                    } catch (error) {
                        reject(error)
                    }
                    
                })
            }
    
            if (this.status === HD.REJECT) {
                setTimeout(() => {
                    try {
                        this.parse(promise2, onError(this.value), resolve, reject);
                    } catch (error) {
                        reject(error)
                    }
                    

                })
            }
    
            if (this.status === HD.PENDING) {
                this.callbacks.push({
                    onSuccess(val) {
                        
                        try {
                            this.parse(promise2, onSuccess(val), resolve, reject);
                        } catch (error) {
                            reject(error)
                        }

                    },
                    onError(reason) {
                        try {
                            this.parse(promise2, onError(reason), resolve, reject);
                        } catch (error) {
                            reject(error)
                        }
                    },
                })
            }
        })
        return promise2;
    }

    parse(promise, result, resolve, reject) {
        if (promise === result) {
            return new TypeError('not Chainning referernce')
        }
        
        if (result instanceof HD) {
            result.then(resolve, reject)
        } else {
            resolve(result);
        }
    }
}