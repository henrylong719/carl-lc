

# Leetcode

### Double Pointers



#### 167. Two Sum II - Input Array Is Sorted (31/12)

```python

def twoSum(self, numbers: List[int], target: int) -> List[int]:
    left = 0
    right = len(numbers) - 1

    while(True):
        current = numbers[left] + numbers[right]
        if current == target:
            return [left + 1, right + 1 ]
        if current > target:
            right -= 1
        else:
            left += 1
            
# Time complexity O(n) - length of numbers
# Space complexity O(1)

```



#### 15. 3Sum (31/12)

```python

def threeSum(self, nums: List[int]) -> List[List[int]]:
  			# time complexity O(nlog(n))
        nums.sort()
        n = len(nums)
        ans = []

        for i in range(n - 2):
            x = nums[i]

            # skip duplicates 
            if i > 0 and x == nums[i-1]:
                continue
            
            # optimization
            if x + nums[i+1] + nums[i+2] > 0:
                break
            
            if x + nums[-2] + nums[-1] < 0:
                continue
            
            j = i + 1
            k = n - 1

            while j < k:
                sum = x + nums[j] + nums[k]
                if sum > 0:
                    k -= 1
                elif sum < 0:
                    j += 1
                else:
                    ans.append([x, nums[j], nums[k]])
                    j += 1
                    # skip duplicates
                    while j < k and nums[j] == nums[j-1]:
                        j += 1
                    k -= 1
                    while k > j and nums[k] == nums[k+1]:
                        k -= 1
        return ans


# Time complexity O(n^2)
# Space complexity O(1)
```



#### 2824. Count Pairs Whose Sum is Less than Target (31/12)

````python

class Solution:
    def countPairs(self, nums: List[int], target: int) -> int:
        nums.sort()
        n = len(nums)
        count = 0

        for i in range(n - 1):
            right = i + 1
            sum = nums[i] + nums[right]

            while sum < target and right < n:
                count += 1
                right += 1
                if right < n:
                    sum = nums[i] + nums[right]
        
        return count
      
    def countPairs2(self, nums: List[int], target: int) -> int:
        nums.sort()
        ans = 0
        left = 0
        right = len(nums) - 1

        while left < right:
            if nums[left] + nums[right] < target:
                ans += right - left
                left += 1
            else:
                right -= 1
        
        return ans

# time complexity O(nlog(n)) (sorting), n is the length of the nums
# space complexity O(1)

````



#### 16. 3Sum Closest (31/12)

```python

def threeSumClosest(self, nums: List[int], target: int) -> int:
        nums.sort()
        ans = inf
        min_diff = inf
        n = len(nums)

        for i in range(n - 2):
            x = nums[i]
            # optimization 1
            if i and x == nums[i-1]:
                continue
            
            # optimization 2
            sum = x + nums[i+1] + nums[i+2]
            if sum > target:
                if sum - target < min_diff:
                    return sum

            # optimization 3
            sum = x + nums[-2] + nums[-1]
            if sum < target:
                if target - sum < min_diff:
                    min_diff = target - sum
                    ans = sum
                    continue
                    
            j = i + 1
            k = n - 1

            while j < k:
                sum = x + nums[j] + nums[k]
                if sum == target:
                    return sum
                diff = abs(target - sum)
                if diff < min_diff:
                    min_diff = diff
                    ans = sum
                if sum < target:
                    j += 1
                else:
                    k -= 1
            
        return ans

# Time complexity O(n^2)
# Space complexity O(1)

```



#### 18. 4Sum (31/12)

```python


def fourSum(self, nums: List[int], target: int) -> List[List[int]]:
    nums.sort()
    n = len(nums)
    ans = []

    for i in range(n - 3):
        if i and nums[i] == nums[i - 1]:
            continue

            # optimization 1
            if nums[i] + nums[i + 1] + nums[i + 2] + nums[i + 3] > target:
                break
            # optimization 2
            if nums[i] + nums[-3] + nums[-2] + nums[-1] < target:
                continue

        for j in range(i + 1, n - 2):
            if j > i + 1 and nums[j] == nums[j - 1]:
                continue

            # optimization 3
            if nums[i] + nums[j] + nums[j + 1] + nums[j + 2] > target:
                break

            # optimization 4
            if nums[i] + nums[j] + nums[-2] + nums[-1] < target:
                continue

            k = j + 1
            l = n - 1

            while k < l:
                sum = nums[i] + nums[j] + nums[k] + nums[l]
                if sum > target:
                    l -= 1
                elif sum < target:
                    k += 1
                else:
                    ans.append([nums[i],nums[j],nums[k],nums[l]])
                    k += 1
                    while k < l and nums[k] == nums[k-1]:
                        k += 1
                    l -= 1
                    while l > k and nums[l] == nums[l + 1]:
                        l -= 1
    return ans
      
      
  # Time complexity: O(n^3)
  # Space complexity: O(1)
```



#### 611. Valid Triangle Number (31/12)

```python

def triangleNumber(self, nums: List[int]) -> int:
    nums.sort()
    ans = 0
    n =  len(nums)

    for k in range(2, n):
        i = 0
        j = k - 1

        while i < j:
            if nums[i] + nums[j] > nums[k]:
                ans += j - i
                j -= 1
            else:
                i += 1
    return ans
  
def triangleNumber2(self, nums: List[int]) -> int:
    nums.sort()
    ans = 0
    n =  len(nums)

    for k in range(n-1, 1, -1):

        # Optimization 1
        if nums[0] + nums[1] > nums[k]:
            # C(k+1, 3)
            ans += (k+1) * k * (k-1) // 6
            break

        # Optimization 2
        if nums[k-2] + nums[k-1] < nums[k]:
            continue

        i = 0
        j = k - 1
        while i < j:
            if nums[i] + nums[j] > nums[k]:
                ans += j - i
                j -= 1
            else:
                i += 1
    return ans
  
# Time complexity: O(n^2)
# Space complexity: O(1)

```



#### 11. Container With Most Water (1/1)

```python

def maxArea(self, height: List[int]) -> int:
      left = 0
      right = len(height) - 1
      ans = 0

      while left < right:
          area = (right - left) * (min(height[left], height[right]))
          ans = max(ans, area)

          if height[left] < height[right]:
              left += 1
          else:
              right -= 1
      return ans

# Time complexity O(n)
# Space complexity O(1)
    
```



#### 42. Trapping Rain Water (1/1)

```python

def trap(self, height: List[int]) -> int:
    ans = 0
    n = len(height)
    pre_max = [0] * n

    pre_max[0] = height[0]

    for i in range(1, n):
        pre_max[i] = max(pre_max[i-1], height[i])

    sur_max = [0] * n
    sur_max[-1] = height[n-1]
    
    # range(start, stop, step)
    # start: The loop starts at n-2.
    # stop: The loop stops before -1. This means it will include 0 as the last value.
    # step: -1 indicates that the loop decrements by 1 on each iteration.

    for i in range(n-2, -1, -1):
        sur_max[i] = max(sur_max[i+1], height[i])

    for h, pre, sur in zip(height, pre_max, sur_max):
        ans += min(pre, sur) - h

    return ans
  
# Time complexity: O(n)
# Space complexity: O(n)

def trap2(self, height: List[int]) -> int:
    ans = 0
    left = 0
    right = len(height) - 1
    pre_max = 0
    sur_max = 0

    while left <= right:
        pre_max = max(pre_max, height[left])
        sur_max = max(sur_max, height[right])

        if pre_max < sur_max:
            ans += pre_max - height[left]
            left += 1
        else:
            ans += sur_max - height[right]
            right -= 1

    return ans

# Time complexity: O(n)
# Space complexity: O(1)
      
```



### Sliding Window

#### 209. Minimum Size Subarray Sum (1/1)



```python

def minSubArrayLen(self, target: int, nums: List[int]) -> int:
		sum = 0
		window_size = inf
		window_start = 0

		for window_end in range(len(nums)):
				
				sum += nums[window_end]

				while sum - nums[window_start] >= target:
						sum -= nums[window_start]
						window_start += 1
				
				if sum >= target:
						window_size = min(window_size, window_end - window_start + 1)

		return window_size if sum >= target else 0

# Time complexity: O(n)
# Space complexity: O(1)

```



#### 3. Longest Substring Without Repeating Characters (1/1)

```python

from collections import Counter


def lengthOfLongestSubstring(self, s: str) -> int:

		ans = 0
		left = 0
		map = Counter()

		for right, c in enumerate(s):
				
				map[c] += 1

				while map[c] > 1:
						map[s[left]] -= 1
						left += 1
				
				ans = max(ans, right - left + 1)
		
		return ans
  
# Time complexity O(n)
# Space complexity O(128) | O(1) | O(len(set(s)))

```



#### 713. Subarray Product Less Than K (1/1)

```python

def numSubarrayProductLessThanK(self, nums: List[int], k: int) -> int:
		if k <= 1:
				return 0

		prod = 1
		ans = 0
		left = 0

		for right, x in enumerate(nums):
				prod *= x

				while prod >= k:
						prod /= nums[left]
						left += 1
				
				ans += right - left + 1
		
		return ans
  
# Time complexity: O(n)
# Space complexity: O(1)

```



#### 2958. Length of Longest Subarray With at Most K Frequency (1/1)

```python

from collections import Counter


def maxSubarrayLength(self, nums: List[int], k: int) -> int:
		left = 0
		map = Counter()
		ans = 0

		for right, i in enumerate(nums):
				
				map[i] += 1

				while map[i] > k:
						map[nums[left]] -= 1
						left += 1
				
				ans = max(ans, right - left + 1)

		return ans


# Time complexity O(n)
# Space complexity O(set(nums))

```



#### 2730. Find the Longest Semi-Repetitive Substring (1/1)

```python

def longestSemiRepetitiveSubstring(self, s: str) -> int:
		lastRepeatIndex = -1
		ans = 0
		left = 0

    # edge cases
		if len(s) == 1:
				return 1

		for right in range(1, len(s)):
				if s[right] == s[right -1 ]:
						if lastRepeatIndex != -1:
								left = lastRepeatIndex
						lastRepeatIndex = right

				ans = max(ans, right - left + 1)

		
		return ans
  
# Time complexity O(n)
# Space complexity O(1)

```



#### 2779. Maximum Beauty of an Array After Applying Operation (2/1)

```python

def maximumBeauty(self, nums: List[int], k: int) -> int:
		nums.sort()
		ans = 0
		left = 0

		for right,y in enumerate(nums):
				while y - nums[left] > 2 * k:
						left += 1
				ans = max(ans, right - left + 1)
				
		return ans

  
	# Time complexity: O(nlog(n))
  # Space complexity: O(1)
  
```



#### 1004. Max Consecutive Ones III (2/1)

```python


def longestOnes(self, nums: List[int], k: int) -> int:
		ans = 0
		left = 0
		count0 = 0

		for right, i in enumerate(nums):
				
				# add 1 and 0 into the window and count the num of 0
				count0 += 1 - i

				# shrink the window
				while count0 > k:
						count0 -= 1 - nums[left]
						left += 1
				
				ans = max(ans, right - left + 1)

		return ans
  
  # Time complexity: O(n)
  # Space complexity: O(1)


```



#### 2962. Count Subarrays Where Max Element Apprears at Least K Times (2/1)

```python

def countSubarrays(self, nums: List[int], k: int) -> int:
		maxEle = max(nums)
		left = 0
		ans = 0
		max_count = 0
		n = len(nums)

		for right, x in enumerate(nums):
				if x == maxEle:
						max_count += 1
				
				while max_count >= k:
						ans += n - right
						if nums[left] == maxEle:
								max_count -= 1
						left += 1
						
		return ans
  
  
 	# Time complexity: O(n)
  # Space complexity: O(1)

```



#### 1658. Minimum Operation to Reduce X to Zero (2/1)

```python

def minOperations(self, nums: List[int], x: int) -> int:
		target = sum(nums) - x

		if target < 0: return -1

		ans = -1
		left = 0
		s = 0

		for right, x in enumerate(nums):
				s += x
				
				# shrink the array
				while s > target:
						s -= nums[left]
						left += 1
				
				if s == target:
						ans = max(ans, right - left + 1)
		
		return -1 if ans < 0 else len(nums) - ans


 	# Time complexity: O(n)
  # Space complexity: O(1)
  
```



#### 2302. Count Subarrays With Score Less Than k (2/1)

```python

def countSubarrays(self, nums: List[int], k: int) -> int:

			ans = 0
			left = 0
			sum = 0

			for right, x in enumerate(nums):

					sum += x
					
					while sum * (right - left + 1) >= k:
							sum -= nums[left]
							left += 1
					
					ans += right - left + 1
			
			return ans
    
  # Time complexity: O(n)
  # Space complexity: O(1)
    
```



#### 76*. Minimum Window Substring (3/1)

```python

def minWindow(self, s: str, t: str) -> str:

		charCount = Counter(t)
		left = 0
		minStrLen = len(s) + 1
		ans = ''

		for right, x in enumerate(s):
				charCount[x] -= 1

				# all char in t are included
				while max(charCount.values()) == 0:
						# find min substring                
						if right - left + 1 < minStrLen:
								minStrLen = right - left + 1
								ans = s[left: right + 1]
						
						charCount[s[left]] += 1
						left += 1

		return ans
  
  
def minWindow2(self, s: str, t: str) -> str:
    ans_left, ans_right = -1, len(s)
    s_count = Counter()
    t_count = Counter(t)
    left = 0

    for right, x in enumerate(s):
        s_count[x] += 1

        while s_count >= t_count:
            if right - left < ans_right - ans_left:
                ans_left, ans_right = left, right

            s_count[s[left]] -= 1
            left += 1

    return '' if ans_left == -1 else s[ans_left : ans_right + 1]

# Time complexity: O(n * k)

# The critical part is the check while max(charCount.values()) == 0:. Each time we do this check, it costsO(k), because max(...) runs in time proportional to the number of keys (distinct characters) in charCount.

# Spece complexity: O(n + k) or O(n)
# k distinct characters

# https://leetcode.cn/problems/minimum-window-substring/solutions/2713911/liang-chong-fang-fa-cong-o52mn-dao-omnfu-3ezz/

```



#### 1234*. Replace the Substring for Balanced String 





### Binary Search



#### 34. Find First and Last Position of Element in Sorted Array (3/1)



```python

def lower_bound (self, nums: List[int], target: int) -> List[int]:

		left, right = 0, len(nums) - 1

		while left <= right:

				mid = (left + right) // 2

				if target <= nums[mid]:
						right = mid - 1
				else:
						left = mid + 1

		return left

def searchRange(self, nums: List[int], target: int) -> List[int]:
		start = self.lower_bound(nums, target)
		if start == len(nums) or nums[start] != target:
				return [-1,-1]
		end = self.lower_bound(nums, target + 1) - 1
		return [start, end]


  
# Time complexity: O(log(n))
# Spece complexity: O(1)

```

















### Tree

#### 101.Symmetric Tree

```c

bool dfs(struct TreeNode* p, struct TreeNode* q){
    if(p == NULL && q == NULL){
        return true;
    }

    if((p == NULL || q == NULL) || (p->val != q->val)){
        return false;
    }

    return dfs(p->left,q->right) && dfs(p->right, q->left);

}

bool isSymmetric(struct TreeNode* root) {
    return dfs(root->left, root->right);
}

```



#### 226. Invert Binary Tree



```c


struct TreeNode* invertTree(struct TreeNode* root) {

    if(!root){
        return root;
    }

    struct TreeNode* temp = root->left;
    root->left = root->right;
    root->right = temp;

    invertTree(root->left);
    invertTree(root->right);

    return root;

}
```



#### 563. Binary Tree Tilt

```c

int sum(struct TreeNode* node, int* totalTilt){
    if(node == NULL){
        return 0;
    }

    int leftTilt = sum(node->left, totalTilt);
    int rightTilt = sum(node->right, totalTilt);

    int tilt = abs(leftTilt - rightTilt);

    *totalTilt += tilt;

    return node->val + leftTilt + rightTilt;
}


int findTilt(struct TreeNode* root) {

    int totalTilt = 0;
    sum(root, &totalTilt);
    return totalTilt;
}

```



#### 965. Univalued Tree

```c

bool dfs(struct TreeNode* root, int num){
    if(!root){
        return true;
    }
    return (root->val == num) && dfs(root->left, num) && dfs(root->right, num);

}

bool isUnivalTree(struct TreeNode* root) {

    if(root == NULL){
        return true;
    }
    return dfs(root, root->val);
}

```



#### 938. Range Sum of BST

```c

void dfs(struct TreeNode* node,int low, int high, int* sum){
    if(node == NULL){
        return;
    }
    if(node->val >= low && node->val <= high){
        *sum += node->val;
    }

    if(node->val > low){
        dfs(node->left,low,high,sum);
    }

    if(node->val < high){
        dfs(node->right,low,high,sum);
    }
}

int rangeSumBST(struct TreeNode* root, int low, int high) {
    int sum = 0;
    dfs(root, low, high, &sum);
    return sum;
}

```



#### 230. Kth Samllest Element in a BST

```c

void dfs(struct TreeNode *node, int k, int *count, int *result)
{

	if (node == NULL || *count == k)
	{
		return;
	}

	dfs(node->left, k, count, result);

	(*count)++;

	if (*count == k)
	{
		*result = node->val;
	}

	dfs(node->right, k, count, result);
}

int kthSmallest(struct TreeNode *root, int k)
{

	int count = 0;
	int result = -1;

	dfs(root, k, &count, &result);
	return result;
}

```



#### 572. Subtree of Another Tree



```c

bool isSameTree(struct TreeNode *root, struct TreeNode *subRoot)
{
	if (root == NULL && subRoot == NULL)
	{
		return true;
	}

	if (root == NULL || subRoot == NULL)
	{
		return false;
	}

	if (root->val != subRoot->val)
	{
		return false;
	}

	return isSameTree(root->left, subRoot->left) && isSameTree(root->right, subRoot->right);
}

bool isSubtree(struct TreeNode *root, struct TreeNode *subRoot)
{
	if (root == NULL)
	{
		return false;
	}

	if (subRoot == NULL)
	{
		return true;
	}

	if (isSameTree(root, subRoot))
	{
		return true;
	}

	return isSubtree(root->left, subRoot) || isSubtree(root->right, subRoot);
}

```



#### 530. Minimum Absolute Difference in BST

```c

int min(int a, int b)
{
	return a < b ? a : b;
}

// use dfs in order
void dfs(struct TreeNode *root, int *prev, int *minValue)
{

	if (root == NULL)
	{
		return;
	}

	dfs(root->left, prev, minValue);

	if (*prev != -1)
	{
		int diff = abs(*prev - root->val);
		*minValue = min(diff, *minValue);
	}

	*prev = root->val;

	dfs(root->right, prev, minValue);
}

int getMinimumDifference(struct TreeNode *root)
{
	int minValue = INT_MAX;
	int prev = -1;
	dfs(root, &prev, &minValue);
	return minValue;
}

```



#### 235. Lowest Common Ancestor of a Binary Search Tree



```c

struct TreeNode *lowestCommonAncestor(struct TreeNode *root, struct TreeNode *p, struct TreeNode *q)
{

	struct TreeNode *cur = root;

	while (cur)
	{
		if (p->val > cur->val && q->val > cur->val)
		{
			cur = cur->right;
		}
		else if (p->val < cur->val && q->val < cur->val)
		{
			cur = cur->left;
		}
		else
		{
			return cur;
		}
	}
	return cur;
}

```





#### 513. Find Bottom Left Tree Value



```python

class Solution:
    def findBottomLeftValue(self, root: Optional[TreeNode]) -> int:
        queue = []
        queue.append(root)

        while len(queue):
            node = queue.pop(0)
            if node.right:
                queue.append(node.right)
            if node.left:
                queue.append(node.left)
        
        return node.val

     
```



#### 514. Delete Node in a BST



```c

int minValue(struct TreeNode *node)
{
	while (node->left != NULL)
	{
		node = node->left;
	}
	return node->val;
}

struct TreeNode *deleteNode(struct TreeNode *current, int key)
{
	if (current == NULL)
	{
		return NULL;
	}
	if (key < current->val)
	{
		current->left = deleteNode(current->left, key);
	}
	else if (key > current->val)
	{
		current->right = deleteNode(current->right, key);
	}
	else
	{
		if (current->left == NULL && current->right == NULL)
		{
			return NULL;
		}
		if (current->left == NULL)
		{
			return current->right;
		}
		if (current->right == NULL)
		{
			return current->left;
		}
		else
		{
			int min = minValue(current->right);
			current->val = min;
			current->right = deleteNode(current->right, min);
		}
	}
	return current;
}

```



#### 112. Path Sum

```c

bool dfs(struct TreeNode *root, int targetSum, int currentSum)
{

	if (!root)
	{
		return false;
	}

	currentSum += root->val;

	// find the leaf
	if (root->left == NULL && root->right == NULL)
	{
		return currentSum == targetSum;
	}

	return dfs(root->left, targetSum, currentSum) || dfs(root->right, targetSum, currentSum);
}

bool hasPathSum(struct TreeNode *root, int targetSum)
{
	return dfs(root, targetSum, 0);
}




bool hasPathSum2(struct TreeNode *root, int targetSum)
{

	if (!root)
	{
		return false;
	}

	targetSum -= root->val;

	if (root->left == NULL && root->right == NULL)
	{
		return targetSum == 0;
	}

	return hasPathSum(root->left, targetSum) || hasPathSum(root->right, targetSum);
}

```





#### 98. Validate Bianry Search Tree

```c


#include <stdbool.h>
#include <limits.h>

bool isValid(struct TreeNode *root, long left, long right)
{
	if (root == NULL)
	{
		return true;
	}

	if (!(root->val > left && root->val < right))
	{
		return false;
	}

	return isValid(root->left, left, root->val) && isValid(root->right, root->val, right);
}

bool isValidBST(struct TreeNode *root)
{
	return isValid(root, LONG_MIN, LONG_MAX);
}

```



#### 1305. All Elements  in Two Binary Search Tree

```python

class Solution:
    def getAllElements(self, root1: Optional[TreeNode], root2: Optional[TreeNode]) -> List[int]:

        queue1 = []
        queue2 = []

        def bfs(root, queue):
            if not root:
                return None
            if root.left:
                bfs(root.left,queue)
            queue.append(root.val)
            if root.right:
                bfs(root.right,queue)
        
        bfs(root1, queue1)
        bfs(root2, queue2)

```



#### 589. N-ary Tree Preorder Traversal

```python

class Solution:
    def preorder(self, root: 'Node') -> List[int]:

        queue = []

        def dfs(node):
            if node == None:
                return
            queue.append(node.val)
            for child in node.children:
                dfs(child)
        
        dfs(root)
        return queue

```



```c

void dfs(struct Node *root, int *result, int *returnSize)
{

	// base case
	if (root == NULL)
	{
		return;
	}

	result[(*returnSize)++] = root->val;

	for (int i = 0; i < root->numChildren; i++)
	{
		dfs(root->children[i], result, returnSize);
	}
}

int *preorder(struct Node *root, int *returnSize)
{

	*returnSize = 0;

	if (root == NULL)
	{
		return NULL;
	}

	int *result = (int *)malloc(10000 * sizeof(int));
  if (!result)
	{
		perror("Failed to allocate memory");
		exit(EXIT_FAILURE);
	}

	dfs(root, result, returnSize);

	return result;
}

```



#### 590. N-ary Tree Postorder Traversal

```python

class Solution:
    def postorder(self, root: 'Node') -> List[int]:
        queue = []

        def dfs(node):
            if(node == None):
                return
            
            for child in node.children:
                dfs(child)
            queue.append(node.val)
        
        dfs(root)
        return queue

```



```c

void dfs(struct Node *root, int *result, int *returnSize)
{
	if (result == NULL)
	{
		return;
	}

	for (int i = 0; i < root->numChildren; i++)
	{
		dfs(root->children[i], result, returnSize);
	}

	result[(*returnSize)++] = root->val;
}

int *postorder(struct Node *root, int *returnSize)
{

	*returnSize = 0;

	if (root == NULL)
	{
		return NULL;
	}

	int *result = (int *)malloc(10000 * sizeof(int));
	if (!result)
	{
		perror("Failed to allocate memory");
		exit(EXIT_FAILURE);
	}
	dfs(root, result, returnSize);

	return result;
}

```



# HackerRank

### Tree

#### Huffman Decoding

```python

def decodeHuff(root, s):
    list = []
    temp = root
    
    for char in s:
        if char == '0':
            temp = temp.left
        else:
            temp = temp.right
        if not temp.left and not temp.right:
            list.append(temp.data)
            temp = root
    
    return print("".join(list))
  
```







