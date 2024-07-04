const arr = [1, 2, 5, 6];
//javascript predefined function
function max(arr) {
  return Math.max(...arr);
}

function min(arr) {
  return Math.min(...arr);
}
console.log(max(arr));
console.log(min(arr));

//logically
function logic2Max(arr) {
  let maxValue = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maxValue) {
      maxValue = arr[i];
    }
  }
  return maxValue;
}
console.log(logic2Max(arr))

function logic2Min(arr){
    minValue = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i]<minValue) {
            minValue= arr[i]
        }        
    }
    return minValue;
}
console.log(logic2Min(arr))