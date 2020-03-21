class HD {
    static PENDING = 'pending';
    static RESOLVE = 'resolve';
    static REJECT = 'reject';
    constructor(executor) {
        this.status = HD.PENDING;
        this.value = '';
        this.callbacks = [];

        executor(this.resolve.bind(this), this.reject.bind(this));
    }
    resolve(value) {
        if (this.status !== HD.PENDING) return;
        this.value = value;
        this.callbacks.forEach(callback => {
            callback.onSuccess(value);
        })
    }
    reject(reason){
        if (this.status !== HD.PENDING) return;
        this.value = reason;
        this.callbacks.forEach(callback => {
            callback.onError(reason);
        })
    }

    then(onSuccess, onError) {
        if (typeof onSuccess !== 'function') {
            onSuccess = (value) => value;
        }
        if (typeof onError !== 'function') {
            onError = (reason) => {throw reason};
        }
        const hd2 = new HD((resolve, reject) => {
            if (this.status === HD.RESOLVE) {
                setTimeout(() => {
                    try {
                        this.parse(hd2, onSuccess(this.value), resolve, reject)
                    } catch(error) {
                        reject(error)
                    }
                    
                });
            }
    
            if (this.status === HD.REJECT) {
                setTimeout(() => {
                    try {
                        this.parse(hd2, onError(this.value), resolve, reject);
                    } catch (error) {
                        reject(error);
                    }
                    
                })
            }
    
            if (this.status === HD.PENDING) {
                this.callbacks.push({
                    onSuccess: (value) => {
                        try {
                            this.parse(hd2, onSuccess(value), resolve, reject);
                        } catch (error) {
                            reject(error);
                        }
                       
                    },
                    onError: (reason) => {
                        try {
                            this.parse(hd2, onError(reason), resolve, reject);
                        } catch (error) {
                            reject(error)
                        }
                        
                    },
                })
            }
        })
        
    }
    parse(promise, result, resolve, reject) {
        if (promise === result) {
            return new TypeError('chainning referernce')
        }
        if (result instanceof HD) {
            result.then(resolve, reject)
        } else {
            resolve(result)
        }
    }
}