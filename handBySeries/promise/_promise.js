class HD {
    static STATUS_PENDING = 'pending'
    static STATUS_RESOLVE = 'resolve'
    static STATUS_REJECT = 'reject'

    constructor(executor) {
        this.status = HD.STATUS_PENDING;
        this.value = '';
        this.callbacks = [];

        try {
          executor(this.resolve.bind(this), this.reject.bind(this))
        } catch (e) {
          this.reject(e);
        }
    }

    resolve(value) {
      if (this.status !== HD.STATUS_PENDING) return;
      this.status = HD.STATUS_RESOLVE;
      this.value = value;

      this.callbacks.forEach(({onSuccess}) => {
         onSuccess(value);
      });
    }

    reject(reason) {
      if (this.status !== HD.STATUS_PENDING) return;
      this.status = HD.STATUS_RESOLVE;
      this.value = reason;

      this.callbacks.forEach(({onError}) => {
        onError(value);
      });
    }

    then(onSuccess, onError) {
      onSuccess = typeof onSuccess !== 'function' ? (val) => val : onSuccess;
      onError = typeof onError !== 'function' ? (reason) => {throw reason} : onError;
      const promise = new HD((resolve, reject) => {
        if (this.status === HD.STATUS_RESOLVE) {
          setTimeout(() => {
            try {
              const result = onSuccess(this.value);
              this.resolvePromise(promise, result, resolve, reject);
            } catch (e) {
              reject(e);
            }
          })
        }

        if (this.status === HD.STATUS_REJECT) {
          setTimeout(() => {
            try {
              const result = onError(this.value);
              this.resolvePromise(promise, result, resolve, reject);
            }catch (e) {
              reject(e)
            }

          })
        }
        if (this.status === HD.STATUS_PENDING) {
          this.callbacks.push({
            onSuccess:(val) => {
              try {
                const result = onSuccess(val);
                this.resolvePromise(promise, result, resolve, reject);
              }catch (e) {
                reject(val);
              }
            },
            onError: (reason) => {
              try {
                const result = onError(reason);
                this.resolvePromise(promise, result, resolve, reject);
              } catch (e) {
                reject(reason)
              }
            },
          })
        }
      })
      return promise;
    }

    resolvePromise(promise, result, resolve, reject) {
      if (promise === result) {
        throw TypeError('cannot chaining the promise');
      }

      if (result instanceof HD) {
        if (result.status === HD.STATUS_PENDING) {
          result.then((val) => {
            this.resolvePromise(promise, val, resolve, reject)
          }, reject)
        } else {
          result.then(resolve, reject);
        }
      } else {
        resolve(result);
      }
    }
}
