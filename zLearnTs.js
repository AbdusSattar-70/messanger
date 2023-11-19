const curryFn = (fnArr) => {
  return (x) => {
    let res = x;
    for(let i = fnArr.length - 1; i >= 0; i--){
      res = fnArr[i](res);
    }
    return res;
  }
};
const newCurry = curryFn([x => x + 1, x => x * x, x => 2 * x]);
console.log(newCurry(4));