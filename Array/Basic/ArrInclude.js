//check vallue exist in the array
const arr = [1, 2, 5, 6];

function includes(arr, val) {
  return arr.includes(val);
}

console.log(includes(arr, 5));

/// another logic
function logic2includes(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) return true;
    
  }
  return false
}
console.log(logic2includes(arr,3))
