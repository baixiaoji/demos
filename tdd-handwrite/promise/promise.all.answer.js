if (typeof Promise.all === 'undefined') {
    Promise.prototype.all = function (promiseArray) {

        return new Promise((resolve, reject) => {
            if (!Array.isArray(promiseArray)) {
                return reject(new TypeError('params need an array'));
            }
    
            let count = 0;
            let length = promiseArray.length;
            let result = [];
            
            for(let i = 0; i < length; i++) {
                Promise.resolve(promiseArray[i]).then(res => {
                    result[i] = res;
                    count++;

                    if (count === length) {
                        resolve(result);
                    }
                }, (reason) => {
                    reject(reason);
                })
            }
        })
        
    }
}