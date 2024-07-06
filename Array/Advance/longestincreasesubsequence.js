function lengthOfLIS(nums) {
    const dp = [];
    for (let num of nums) {
      let low = 0, high = dp.length;
      while (low < high) {
        let mid = Math.floor((low + high) / 2);
        if (dp[mid] < num) low = mid + 1;
        else high = mid;
      }
      dp[low] = num;
    }
    return dp.length;
  }
  
  // Example
  console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18])); // 4
  