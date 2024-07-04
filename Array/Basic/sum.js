const arr = [1, 2, 5, 6];

function sum(arr) {
  const rearr = arr.reduce((acc, val) => acc + val, 0);
  return rearr;
}
console.log(sum(arr));

function anotherlogicforSum(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}
console.log(anotherlogicforSum(arr))
