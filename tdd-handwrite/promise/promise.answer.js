export default class HD {
  static STATUS_PENDING = 'pending'
  static STATUS_RESOLVE = 'resolve'
  static STATUS_REJECT = 'reject'
    constructor(executor) {
      this.state  = HD.STATUS_PENDING;
      this.value = ''
      this.callbacks = [];

      try {
        executor(this.resolve.bind(this), this.reject.bind(this))
      } catch (e) {
        this.reject(e);
      }

    }

    resolve(val) {
      if (this.state !== HD.STATUS_PENDING) return;
      this.state = HD.STATUS_RESOLVE;
      this.value = val;

      this.callbacks.forEach(({onSuccess}) => {
        onSuccess(val);
      })
    }

    reject(reason) {
      if (this.state !== HD.STATUS_PENDING) return;
      this.state = HD.STATUS_REJECT;
      this.value = reason;

      this.callbacks.forEach(({onError}) => {
        onError(reason);
      })
    }

    then(onSuccess, onError) {
      onSuccess = typeof onSuccess === 'function' ? onSuccess : (val) => val;
      onError = typeof onError === 'function' ? onError : (reason) => { throw reason};
      const hd = new HD((resolve, reject) => {
        if (this.state === HD.STATUS_RESOLVE) {
          setTimeout(() => {
            try {
              const result = onSuccess(this.value);
              this.resolvePromise(hd, result, resolve, reject);

            } catch (e) {
              reject(e);
            }
          })
        }

        if (this.state === HD.STATUS_REJECT) {
          setTimeout(() => {
            try {
              const result = onError(this.value);
              this.resolvePromise(hd, result, resolve, reject);

            } catch (e) {
              reject(e);
            }
          })
        }

        if(this.state === HD.STATUS_PENDING) {
          setTimeout(() => {
            this.callbacks.push({
              onSuccess: (val) => {
                try {
                  const result = onSuccess(val);
                  this.resolvePromise(hd, result, resolve, reject);
                } catch (e) {
                  reject(e);
                }
              },
              onError: (reason) => {
                try {
                  const result = onError(reason);
                  this.resolvePromise(hd, result, resolve, reject);
                } catch (e) {
                  reject(e);
                }
              },
            })
          })
        }
      })

      return hd;
    }

    resolvePromise(promise, result, resolve, reject) {
      if (promise === result) {
        throw new TypeError('can not chaining promise');
      }

      if (result instanceof HD) {

        if (result.state === HD.STATUS_PENDING) {
          result.then(val => {
            this.resolvePromise(result, val, resolve, reject);
          }, reject)
        } else {
          result.then(resolve, reject);
        }

      } else {
        resolve(result);
      }
    }
}
