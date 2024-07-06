//This function uses a hash map to keep track of the cumulative sums and their
// frequencies, allowing it to find subarrays that sum to k efficiently.
function subarraySum(nums, k) {
    let count = 0, sum = 0;
    const map = new Map();
    map.set(0, 1);
  
    for (let num of nums) {
      sum += num;
      if (map.has(sum - k)) count += map.get(sum - k);
      map.set(sum, (map.get(sum) || 0) + 1);
    }
  
    return count;
  }
  
  // Example
  console.log(subarraySum([1,2,3], 2)); // 2