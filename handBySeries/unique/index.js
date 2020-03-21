const array = [3,1,2,3,4,3,5,5,'1'];

function unique(array, isSort) {
    const arr = []
    
    if (isSort) {
        let first = ''
        for(let i = 0; i < array.length; i++) {
            if (!i || first !== sortArr[i]) {
                arr.push(array[i]);
            }
            first = array[i];
        }
    }else {
        array.forEach(element => {
            if (arr.indexOf(element) === -1) {
                arr.push(element);
            }
        });
    }
    
    
    return arr;
    // return array.filter((item, index, array) => array.indexOf(item) === index);
}

console.log(unique(array));
console.log(unique(array.sort(), true));