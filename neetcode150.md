### ***[5. Longest Palindromic Substring](https://leetcode.com/problems/longest-palindromic-substring/) (22/5)

```typescript
function longestPalindrome(s: string): string {

    let maxLen = 0;
    let res = '';

    for (let i = 0; i < s.length; i++) {

        // result odd length

        let l = i;
        let r = i;
        while (l >= 0 && r < s.length && s[l] === s[r]) {
            if (r - l + 1 > maxLen) {
                maxLen = r - l + 1;
                res = s.slice(l, r + 1);
            }
            l--;
            r++;
        }


        // result even length
        l = i;
        r = i + 1;

        while (l >= 0 && r < s.length && s[l] === s[r]) {
            if (r - l + 1 > maxLen) {
                maxLen = r - l + 1;
                res = s.slice(l, r + 1);
            }
            l--;
            r++;
        }
    }

    return res;
};


// Time: O(n^2)
// Space: O(1)

```



### ***[518. Coin Change II](https://leetcode.com/problems/coin-change-ii/) (23/5)

```typescript

function change(amount: number, coins: number[]): number {

    // dp[i] means: number of ways to make amount i using only the coins we have processed so far.
    const dp = new Array(amount + 1).fill(0);
    dp[0] = 1;

    for (const coin of coins) {
        for (let i = coin; i <= amount; i++) {
            dp[i] += dp[i - coin];
        }
    }

    return dp[amount];
};


// Time: O(n^2)
// Space: O(n)
```

