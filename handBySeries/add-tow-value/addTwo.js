function add(a ,b){
    //取两个数字的最大长度
    let maxLength = Math.max(a.length, b.length);
    //用0去补齐长度
    a = a.padStart(maxLength , 0);//"0009007199254740991"
    b = b.padStart(maxLength , 0);//"1234567899999999999"
    //定义加法过程中需要用到的变量
    let t = 0;
    let f = 0;   //"进位"
    let sum = "";
    for(let i= maxLength-1 ; i>=0 ; i--){
       t = parseInt(a[i]) + parseInt(b[i]) + f;
       f = Math.floor(t / 10);
       sum = t%10 + sum;
    }
    if(f === 1){
       sum = "1" + sum;
    }
    return sum;
 }


 function _add(a, b) {
     const alength = (a.toString().split('.')[1] || '').length;
     const blength = (b.toString().split('.')[1] || '').length;

     const maxLength = Math.max(alength, blength);

    const baseValue = Math.pow(10, maxLength);

    return (a*baseValue + b * baseValue) / baseValue;
 }

var multiply = function(num1, num2) {
  if (num1 === '0' || num2 === '0') return '0';

  const resultArr = new Array(num2.length + num1.length).fill(0);

  const shortNum = num1.length > num2.length ? num2 : num1;
  const longNum = num1.length > num2.length ? num1 : num2;


  let pos = resultArr.length - 1;

  for (let i = shortNum.length - 1; i >=0; i--) {
    let tempPos = pos;
    for (let j = longNum.length - 1; j >= 0; j--) {
      resultArr[tempPos] += shortNum[i] * longNum[j];
      resultArr[tempPos - 1] += Math.floor(resultArr[tempPos] / 10);

      resultArr[tempPos] = resultArr[tempPos] % 10;

      tempPos--;
    }
    pos--;
  }

  return resultArr.join('').replace(/^0+/, '');
};
