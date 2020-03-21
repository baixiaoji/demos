const array = [3,1,2,3,4,3,5,5,'1'];

function unique(array, isSort) {
    const newArr = [];


    if (isSort) {
        const sortArr = array.concat().sort();
        let first = '';

        for (let i = 0; i < sortArr.length; i++) {
            if (!i || first !== sortArr[i]) {
                newArr.push(sortArr[i])
            }

            first = sortArr[i]
        }
    } else {
        array.forEach(element => {
            if (newArr.indexOf(element) === -1) {
                newArr.push(element)
            }
        });    
    }
    
    return newArr;
}

console.log(unique(array));
console.log(unique(array, true));