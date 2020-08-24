function sumAll(arr) {
  let smallNum = Math.min(...arr);
  let bigNum = Math.max(...arr)
  let newArr = [...arr]
  let sum;
  for (let i = smallNum+1; i < bigNum; i++) {
     newArr.push(i)
    sum = newArr.reduce((a,b) => a+b)
}

  return sum;
 
}

sumAll([1,4]);

