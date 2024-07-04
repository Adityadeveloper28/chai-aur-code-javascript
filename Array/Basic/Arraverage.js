// average of array
const arr = [1, 2, 5, 6];

function anotheraveragelogic(arr) {
  if (arr.lenght === 0) {
    return 0;
  }
  const total = anotherlogicforSum(arr);
  return total / arr.length;
}
function anotherlogicforSum(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}
console.log(anotheraveragelogic(arr));

function average(arr) {
  if (arr.lenght === 0) {
    return 0;
  }
  const total = arr.reduce((acc, val) => acc + val, 0);
  return total / arr.length;
}

console.log(average(arr));
