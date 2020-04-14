const array = [3,1,2,3,4,3,5,5,'1'];

// function unique(array) {
//     const result = [];
//     array.forEach(element => {
//         if (result.indexOf(element) === -1) {
//             result.push(element);
//         }            
//     });
//     return result;
// }

function unique(array) {
    return array.filter((item, index) => array.indexOf(item) === index);
}

console.log(unique(array));
console.log(unique(array, true));