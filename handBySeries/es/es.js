function descArr(arr,o,arr2){
    for(var i=0;i<arr.length;i++){
        if(Array.isArray(arr[i])){
            descArr(arr[i],o,arr2[i]);
            continue;
        }
        o[arr[i]]=arr2[i];
    }
}
function test(arr,str){
    str=str.replace(/([a-z])+/g,'"$1"');
    var x=JSON.parse(str);
    var o={};
    descArr(x,o,arr);
    return o;
}
console.log(test([1,[2,4,[5,6]],3], "[a,[b,d,[e,f]],c]"));