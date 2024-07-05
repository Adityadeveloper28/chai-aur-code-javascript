arr = [0, 1, 0, 3, 12];

function moveZeros(arr) {
  let result = arr.filter((num) => num !== 0);
  let zeros = arr.length - result.length;
  console.log(Array(zeros).fill(0));
  return result.concat(Array(zeros).fill(0));
}

// Example
console.log(moveZeros(arr)); // [1, 3, 12, 0, 0]

///another logic
function moveZeros(arr) {
    let lastNonZeroFoundAt = 0;
  
    // Move all non-zero elements to the front of the array
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== 0) {
        arr[lastNonZeroFoundAt] = arr[i];
        lastNonZeroFoundAt++;
      }
    }
    
    // Fill remaining positions with zeros
    for (let i = lastNonZeroFoundAt; i < arr.length; i++) {
      arr[i] = 0;
    }
  
    return arr;
  }
  
  // Example
  console.log(moveZeros([0, 1, 0, 3, 12])); // [1, 3, 12, 0, 0]
  
