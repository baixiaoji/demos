const array = [3,1,2,3,4,3,5,5,'1'];

function unique(array, isSort) {
    const arr = [];
    if (isSort) {
        const sortArray = array.concat().sort()
        let first = '';
        for(let i = 0; i < sortArray.length; i++) {
            if (!i || first !== sortArray[i]) {
                arr.push(sortArray[i])
            }
            first = sortArray[i];
        }
    } else {
        array.forEach(element => {
            if (arr.indexOf(element) === -1) {
                arr.push(element);
            }
        });
    }
    return arr;
}

console.log(unique(array));
console.log(unique(array, true));