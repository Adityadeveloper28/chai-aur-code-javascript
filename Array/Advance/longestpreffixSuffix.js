/// KMP algorithm

class Solution {
  lps(s) {
    const ans = new Array(s.lenght).fill(0);
    let pre = 0;
    let suf = 1;

    while (suf < s.length) {
        if (s[pre] === s[suf]) {
          ans[suf] = pre + 1;
          pre++;
          suf++;
        } else {
          if (pre === 0) {
            ans[suf] = 0;
            suf++;
          } else {
            pre = ans[pre - 1];
          }
        }
      }
      
      return ans[s.length - 1];
    }
  }  

const solution = new Solution();
const result = solution.lps("abab");
console.log(result);
