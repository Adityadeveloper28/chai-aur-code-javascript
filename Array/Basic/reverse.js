//reverse an array

const arr = [1, 2, 5, 6];

function reverse(arr) {
  return arr.slice().reverse();
  //using slice create an shallow  copy of the
  //array so that if any changes made in the array wont change
  //the  original array because the reverse will act on the actual memory of the array
}
console.log(reverse(arr));
console.log(arr);
function logic2reverse(arr) {
  let reversedarr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    //console.log(arr[i],i);
    reversedarr.push(arr[i]);
  }
  return reversedarr;
}
console.log(logic2reverse(arr));
