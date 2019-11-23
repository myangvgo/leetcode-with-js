# Remove duplicates from sorted array

## Problem Description

Given a sorted array nums, remove the duplicates in-place such that each element appear only once and return the new length.
Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

> **Example 1:**
> Given nums = [1,1,2],
> Your function should return length = 2, with the first two elements of nums being 1 and 2 respectively.
> It doesn't matter what you leave beyond the returned length.
> **Example 2:**
> Given nums = [0,0,1,1,1,2,2,3,3,4],
> Your function should return length = 5, with the first five elements of nums being modified to 0, 1, 2, 3, and 4 respectively.
> It doesn't matter what values are set beyond the returned length.

## Possible Solutions

### Two pointer copy and replace

Since the array is sorted, so the duplicated element must be ajacent to each other. So we can move unique elements to the left of the array.

- Use a slow pointer `p` and a fast pointer `q`

- Compare the elements in index `p` and `q`.

- If they are equal, advance `q` by 1 step

- If not equal, advance `p` by 1 step first and assign `nums[q]` to `nums[p]`

- Repeat until `q` reaches the end of the array.

- The length of new array is `p + 1`

```js
const removeDuplicates = nums => {
    if (nums.length < 2) return nums.length;

    let p = 0,
        q = 1;

    while (q < nums.length) {
        if (nums[q] !== nums[p]) {
            nums[++p] = nums[q];
        } else {
            q++;
        }
    }

    return (nums.length = p + 1);
};
```

Time complexity is **O(n)** for one loop
Space complexity is **O(1)** operate in place
