
let arrays = [[1, 2, 3], [4, 5], [6]];
var result = arrays.reduce((res, arr) => {
  arr.forEach(num => {
  	res.push(num);
  });
  return res;
}, []);
console.log(result);
// → [1, 2, 3, 4, 5, 6]