// 简易版实现  https://zhuanlan.zhihu.com/p/21834559
export default class HD {
    static PENDING = 'pending';
    static RESOLVE = 'resolve';
    static REJECT = 'reject';
 constructor(executor) {
     this.status = HD.PENDING;
    this.value = '';
    this.callbacks = [];
    
    executor(this.resolve.bind(this), this.reject.bind(this))
 }
 
 resolve(value) {
     if (this.status !== HD.PENDING) return;
    this.status = HD.RESOLVE; 
    this.value = value;
     
    this.callbacks.forEach((obj) => {
        obj.onSuccess(value)
    })
 }

 reject(reason) {
     if (this.status !== HD.PENDING) return;
     this.status = HD.REJECT;
    this.value = reason;

    this.callbacks.forEach((obj) => {
        obj.onError(reason)
    })
 }

 then(onSuccess, onError) {
     if (typeof onSuccess !== 'function') {
         onSuccess = (value) => value;
     }
     if (typeof onError !== 'function') {
         onError = reason => {throw reason}
     }
    const promise2 =  new HD((resolve, reject) => {
        if (this.status === HD.RESOLVE) {
            setTimeout(() => {
                try {
                    this.parse(promise2, onSuccess(this.value), resolve, reject)    
                } catch (error) {
                    reject(error)
                }
                
               
            })
        }
        if (this.status === HD.REJECT) {
            setTimeout(() => {
                try {
                    this.parse(promise2, onError(this.value), resolve, reject)    
                } catch (error) {
                    reject(error);
                }
                
            })
        }
   
        if (this.status === HD.PENDING) {
            this.callbacks.push({
                onSuccess: (value) => {
                    try {
                        this.parse(promise2, onSuccess(value), resolve, reject)    
                    } catch (error) {
                        reject(error);
                    }
                },
                onError: (reason) => {
                    try {
                        this.parse(promise2, onError(reason), resolve, reject)
                    }catch(err) {
                        reject(err);
                    }
                },
            })
        }
    })
    
    return promise2;
 }

 parse(promise, result, resolve, reject) {
     if (promise === result) {
         throw TypeError('Chainning Refer Error');
     }
    if (result instanceof HD) {
        // result 依旧pending状态需要 递归处理
        result.then(resolve, reject)
    } else {
        // A+ 中这边还有一些判断 2.3部分
        resolve(result)
    }     
 }
}
