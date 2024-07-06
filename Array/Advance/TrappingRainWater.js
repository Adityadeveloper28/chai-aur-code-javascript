////// This function uses a two-pointer approach to
///// calculate the trapped water by keeping
///// track of the maximum heights from both sides.


function trap2(height) {
  let left = 0,
    right = height.length - 1;
  let leftMax = 0,
    rightMax = 0;
  let water = 0;

  while (left < right) {
    if (height[left] < height[right]) {
      if (height[left] > leftMax) {
        leftMax = height[left];
      } else {
        water += leftMax - height[left];
      }
      left++;
    } else {
      if (height[right] > rightMax) {
        rightMax = height[right];
      } else {
        water += rightMax - height[right];
      }
      right--;
    }

    //console.log(water)
  }
  return water;

}

// Example
console.log(trap2([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])); // 6
function trap(height) {
    if (!height.length) return 0;
    let left = 0, right = height.length - 1;
    let leftMax = height[left], rightMax = height[right];
    let water = 0;
  
    while (left < right) {
      if (leftMax < rightMax) {
        left++;
        leftMax = Math.max(leftMax, height[left]);
        water += leftMax - height[left];
      } else {
        right--;
        rightMax = Math.max(rightMax, height[right]);
        water += rightMax - height[right];
      }
    }
    return water;
  }
  
  // Example
  console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])); // 6
  