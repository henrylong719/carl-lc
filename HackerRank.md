

#### Divisible Sum Pairs (18/2)

```python
def divisibleSumPairs(n, k, ar):
    remainder_map ={}
    ans = 0
    
    for num in ar:
        remainder = num % k
        complement = (k - remainder) % k
        
        if complement in remainder_map:
            ans += remainder_map[complement]
        
        remainder_map[remainder] = remainder_map.get(remainder, 0) + 1
        
    return ans
  
  # Time complexity: O(n)
  # Spece complexity: O(k) (store at most k keys)
 
```



#### Flipping bits (20/2)

```python
def flippingBits(n):
    return (2 ** 32 - 1) - n

    # Time complexity: O(1)
   # Space complexity: O(1) 
  
```





#### Pangrams (24/2)



```python
def pangrams(s):
    alphabet = [0] * 26
    
    for char in s:
        if not char.isalpha():
            continue
            
        pos = ord(char.lower()) - 97
        alphabet[pos] += 1
    
    return "pangram" if min(alphabet) >= 1 else "not pangram"
  
   # Time complexity: O(n)
   # Space complexity: O(1)
  
```



#### Mars Exploration (24/2)



```python
def marsExploration(s):
    
    times = len(s) // 3
    correct_s = "SOS" * times
    ans = 0
    
    for i in range(len(s)):
        if correct_s[i] != s[i]:
            ans += 1
    
    return ans
  
   # Time complexity: O(n)
   # Space complexity: O(n)
  
  
def marsExploration2(s):
    ans = 0
    
    for i in range(0, len(s), 3):
        if s[i] != "S": 
            ans += 1
        if s[i+1] != "O": 
            ans += 1
        if s[i+2] != "S": 
            ans += 1
        
    return ans
  
    # Time complexity: O(n)
   # Space complexity: O(1)
  
```





#### Sales by Match (7/3)

```python
def sockMerchant(n, ar):
    
    count_map = {}
    ans = 0
    
    for ele in ar:
        count_map[ele] = count_map.get(ele, 0) + 1
        
    for key, value in count_map.items():
        ans += value // 2
    
    return ans
  
   # Time complexity: O(n) 
   # Space complexity: O(n)
  
  def sockMerchant2(n, ar):
    # 10 10 10 10 20 20 20 30 50 
    
    ar.sort()
    ans = 0
    i = 0
    
    while i + 1 < n:
        if ar[i] == ar[i + 1]:
            ans += 1
            i += 1
        i += 1
        
    return ans
  
    
   # Time complexity: O(nlogn) 
   # Space complexity: O(1)
  
```



#### Migratory Birds (8/3)

```python
def migratoryBirds(arr):
    counter = [0] * 6
    ans = 0
    
    for ele in arr:
        counter[ele] += 1
        
    type_max = counter[1]
    for i in range(1, len(counter)):
        if counter[i] > type_max:
            type_max = counter[i]
            ans = i
    
    return ans
  
  
   # Time complexity: O(n) 
   # Space complexity: O(1)

```



#### Maximum Perimeter Triangle (8/3)

```python
def maximumPerimeterTriangle(sticks):
    sticks.sort()
    window_start = 0
    window_sum = 0
    n = len(sticks)
    max_tri = -1
    ans = []

    for windown_end in range(n):
        window_sum += sticks[windown_end]
        if (windown_end - window_start + 1 == 2):
            current_window = windown_end + 1
            while current_window < n :
                trangle_sum = window_sum + sticks[current_window]
                if window_sum <= sticks[current_window] or trangle_sum < max_tri:
                    break
                max_tri = trangle_sum
                ans = [sticks[window_start],sticks[windown_end], sticks[current_window]]
                current_window += 1
            
            window_sum -= sticks[window_start]
            window_start += 1
        
    return ans if max_tri != -1 else [-1]
  
  
  # Time complexity: O(n^2)
  # Space complexity: O(1)
  
  
  # Better solution
  
  def maximumPerimeterTriangle(sticks):
    sticks.sort()
    sticks.reverse()
    
    
    for i in range(len(sticks) - 2):
        side1 = sticks[i]
        side2 = sticks[i+1]
        side3 = sticks[i+2]
        
        if side3 + side2 > side1:
            return [side3, side2, side1]
            
    return [-1]
  
  
  # Time complexity: O(n)
  # Space complexity: O(1)
  
```





#### Drawing Book (8/3)



```python
def pageCount(n, p):
    
    page_from_front = math.floor(p/2)
    page_from_end = math.ceil((n-p)/2) if n % 2 == 0 else math.floor((n-p)/2)
    
    return min(page_from_front, page_from_end)
  
  
  # Time complexity: O(1)
  # Space complexity: O(1)
  
```





#### Picking Numbers (10/3)



```python
def pickingNumbers(a):
    window_start = 0
    ans = 0
    a.sort()
    
    for window_end in range(1, len(a)):
        if a[window_end] - a[window_start] <= 1:
            ans = max(ans, window_end - window_start + 1)
        # it's not looping the array again, thus not O(n^2)
        while a[window_end] - a[window_start] > 1:
            window_start += 1
            
    return ans
  
 	# Time complexity: O(nlogn)
  # Space complexity: O(1)
  


def pickingNumbers2(a):
    freq = [0] * 101
    
    for num in a:
        freq[num] += 1
        
    return max(freq[i] + freq[i+1] for i in range(100))
  
    
  # Time complexity: O(n)
  # Space complexity: O(1) (range is small (101))
  
```





#### **Separate the Numbers (10/3)

```python
def separateNumbers(s):
    substring = ""
    for digit in range(len(s) // 2):
        substring += s[digit]
        num = int(substring)
        target_string = substring
        
        while len(target_string) < len(s):
            num = num + 1
            target_string += str(num)
            
        if target_string == s:
            print("YES " + substring)
            return
            
    print("NO")
    
    
    
  
  # Time complexity: O(n^2)
  # Space complexity: O(n) (largest string)
    
    
    
```





#### Tower Breakers (14/3)



```python
def towerBreakers(n, m):
    if m == 1 or n % 2 == 0:
        return 2
    return 1
  
  # Time complexity: O(1)
  # Space complexity: O(1)

```





#### Caesar Cipher (14/3)

```python
def caesarCipher(s, k):
    k = k % 26
    ans = ""
    
    for char in s:
        if char.isalpha():
            code = ord(char)
            new_code = code + k
            if char.isupper():
                if new_code > 90:
                    new_code = new_code - 26
            else:
                if new_code > 122:
                    new_code = new_code - 26
            new_char = chr(new_code)
            ans += new_char
        else:
            ans += char
        
    return ans
  
  # Time complexity: O(n)
  # Space complexity: O(1)
  
```





#### Sansa and XOR (22/3)

```python
def sansaXor(arr):
    n = len(arr)
    ans = 0
    win_start = 0
    
    for win_size in range(1, n + 1):
        xor = 0
        for win_end in range(n):
            xor ^= arr[win_end]
            if win_end - win_start + 1 == win_size:
                ans ^= xor
                # remove element from current window
                xor ^= arr[win_start]
                win_start += 1
        win_start = 0 
        
        
    return ans
  
  # solution not passes
  # Time complexity: O(n^2) 
  # Space complexity: O(1)


  # key here (3 ^ 3 = 0)
  # 3,4,5
  #3, 4, 5,  3,4,  4,5  3,4,5
def sansaXor(arr):

    if len(arr) % 2 == 0:
        return 0
    
    ans = 0
    
    for i, ele in enumerate(arr):
        if (i + 1) % 2 != 0:
            ans ^= ele
            
    return ans  
  
  
  # Time complexity: O(n)
  # Space complexity: O(1)
  
```





#### Sherlock and Array (24/3)

```python

def balancedSums(arr):
    if len(arr) == 1:
        return "YES"
        
    total_sum = sum(arr)    
    left_sum = 0
    cur = 0
    right_sum = total_sum - left_sum - arr[cur]
    
    while cur < len(arr) - 1:
        
        if left_sum == right_sum:
            return "YES"
        
        left_sum += arr[cur]
        cur += 1
        right_sum -= arr[cur]
    
    return "NO"

def balancedSums(arr):
    total_sum = sum(arr)
    left_sum = 0
    for i, v in enumerate(arr):
        right_sum = total_sum - left_sum - v
        
        if right_sum == left_sum:
            return "YES"
        
        left_sum += v
        
    return "NO"
  
  
  # Time complexity: O(n)
  # Space complexity: O(1)
  
  
```



#### Sum vs XOR (26/3)



```python

# The condition n + x = n ^ x holds only when there are no carry-over bits in the addition of n and x. That happens only when n and x do not have 1s in the same bit position. So, for each bit in n that is 0, we can freely choose either 0 or 1 in that position in x (because it won’t cause a carry).

def sumXor(n):
    if n == 0:
        return 1
    
    count = 0
    while n:
        if n % 2 == 0:
            count += 1
        
        n = n // 2
    
    return 2 ** count
  
  
  # Time complexity: O(log(n))
  # Space complexity: O(1)
  
  
```



#### Counter game (26/3)



```python
def counterGame(n):
    count = 0
    while n > 1:
        power = math.log(n) / math.log(2)
        
        if power == int(power):
            n = n / 2
            
        else:
            n = n - 2 ** int(power)
        
        count += 1
    
    return "Louise" if count % 2 == 1 else "Richard"
  
  
  # Time complexity: O(log(n))
  # Space complexity: O(1)

```



#### Recursive Digit Sum (26/3)



```python
def superDigit(n, k):
    
    sum = 0
    
    for char in n:
        sum += int(char)
        
    sum *= k
    
    if sum <= 9:
        return sum
    
    return superDigit(str(sum), 1)
  
  
  # Time complexity: O(l) (l:number of digits in the initial string n)
  # Space complexity: O(log(l))
  
```



#### Gaming Array 1 (3/4)



```python
def finMax(arr, end):
    
    max_ele = arr[0]
    max_idx = 0
    
    for i in range(end):
        if arr[i] > max_ele:
            max_ele = arr[i]
            max_idx = i
            
    return max_idx

def gamingArray(arr):
    
    # Bob Flase, Andy True
    flag = False
    end_idx = len(arr)
    
    while (end_idx > 0):
        
        max_idx = finMax(arr, end_idx)
        end_idx = max_idx
        
        if end_idx > 0:
            flag = not flag
        
    return 'BOB' if flag is False else 'ANDY'
  
	# Time complexity: O(n^2)  not valid
  # Space complexity: O(l)
  
  
def gamingArray(arr):
    counter = 0
    max = 0
    
    for i in arr:
        if i > max:
            max = i
            counter += 1
    
    return "ANDY" if counter % 2 == 0 else "BOB"
  
  # Time complexity: O(n)
  # Space complexity: O(l)
  
```



#### Misère Nim (3/4)

```python
def misereNim(s):
    
    nimSum = 0
    countOnes = 0
    
    for ele in s:
        nimSum ^= ele
        if ele == 1:
            countOnes += 1
    
    # all 1's
    if countOnes == len(s):
        if countOnes % 2 == 0:
            return "First"
        else:
            return "Second"
            
    else:
        if nimSum == 0:
            return "Second"
        else:
            return "First"
          
	# Time complexity: O(n)
  # Space complexity: O(l)
  
```



#### New Year Chaos

```python
def minimumBribes(q):

    bribes = 0    
    
    for i, p in enumerate(q):
        if p - (i+1) > 2:
            print("Too chaotic")
            return
    
    for i, p in enumerate(q):
        for j in range(max(p-2, 0), i):
            if (q[j] > p):
                bribes += 1
                
    
    print(bribes)
    
```



#### Climbing the Leaderboard

```python
def climbingLeaderboard(ranked, player):
    
    uniqueRanks = list(set(ranked))
    
    uniqueRanks.sort()
    
    uniqueRanks.reverse()
    
    pos = len(uniqueRanks) - 1
    
    ans = []
    
    for i in range(len(player)):
        
        score = player[i]
        
        while pos >= 0 and score >= uniqueRanks[pos]:
            pos -= 1
        
        ans.append(pos + 1 + 1)        
            
    return ans
  
```



#### Sherlock and the Valid String



```python
def checkEqual(arr):
    
    val = arr[0]
    
    for i in range(arr):
        
        count = arr[i]
        
        if count == 0:
            continue
        
        if val == 0:
            val = count
                    
        if count != val:
            return False
    
    return True
            

def isValid(s):
    frequency = [0] * 26
    
    for i in range(len(s)):
        letter = s[i]
        asc = ord(letter) - 97
        frequency[asc] += 1
    
    
    max = -float('inf')
    maxIdx = 0
    
    min = float('inf')
    minIdx = 0
    
    for i in range(len(frequency)):
        
        fre = frequency[i]
        
        if fre == 0:
            continue
        
        if fre > max:
            max = fre
            maxIdx = i
        
        if fre < min:
            min = fre
            minIdx = i
        
    if max == min: 
        return 'YES'
    
    maxFrequency = frequency.copy()
    maxFrequency[maxIdx] -= 1
    
    minFrequency = frequency.copy()
    minFrequency[minIdx] -= 1
    
    if checkEqual(maxFrequency) or checkEqual(minFrequency):
        return 'Yes'
    
    return 'No'

    
    
```



#### Ice Cream Parlor (28/5)

```python
def icecreamParlor(m, arr):
    
    seen = {}
    
    for i, price in enumerate(arr):
        
        need = m - price
        
        if need in seen:
            return [seen[need] + 1, i + 1]
            
        seen[price] = i
    
    return []
  
```



#### Divisible Sum Pairs (17/9)

```python
def divisibleSumPairs(n, k, ar):
    freq = [0] * k
    ans = 0
    
    for a in ar:
        r = a % k
        # find the matched reminder 
        ans += freq[(k - r) % k]
        freq[r] += 1
    
    return ans
  
  
  # Time complexity: O(n)
  # Space complexity: O(k)
  
```



#### Electronics Shop (22/9)

```javascript
function getMoneySpent(keyboards, drives, b) {
  // ascending
  keyboards.sort((a, b) => a - b);

  // descending
  drives.sort((a, b) => b - a);

  let best = -1;
  let i = 0;
  let j = 0;

  while (i < keyboards.length && j < drives.length) {
    let sum = keyboards[i] + drives[j];

    if (sum > b) {
      j++;
    } else {
      if (sum > best) {
        best = sum;
      }
      i++;
    }
  }

  return best;
}

  //  Time complexity: O(nlog(n))
  //  Space complexity: O(1)

```



#### Save The Prisoner (2/10)**

```typescript
function saveThePrisoner(n: number, m: number, s: number): number {
  return ((s - 1 + m - 1) % n) + 1;
}

```



#### Sequence Equation (6/10)

```typescript
function permutationEquation(p: number[]): number[] {
  const n = p.length;
  const pos = new Array<number>(n + 1);

  for (let i = 0; i < p.length; i++) {
    pos[p[i]] = i + 1;
  }

  let ans = [];

  for (let j = 1; j < pos.length; j++) {
    ans.push(pos[pos[j]]);
  }

  return ans;
}

```



