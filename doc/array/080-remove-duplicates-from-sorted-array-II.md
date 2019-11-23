# Remove duplicates from sorted array II

## Problem description

Given a sorted array nums, remove the duplicates **in-place** such that **duplicates appeared at most twice** and return the new length.
Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

> **Example 1:**
> Given nums = [1,1,1,2,2,3],
> Your function should return length = 5, with the first five elements of nums being 1, 1, 2, 2 and 3 respectively.
> It doesn't matter what you leave beyond the returned length.
> **Example 2:**
> Given nums = [0,0,1,1,1,1,2,3,3],
> Your function should return length = 7, with the first seven elements of nums being modified to 0, 0, 1, 1, 2, 3 and 3 respectively.
> It doesn't matter what values are set beyond the returned length.

## Possible solutions

### Solution 1

- Remove in place must use two pointer, one for traversal, one for place to insert element.

- If the position of traversal pointer is `i`, and the position for insert pointer is `current + 1`;

- When `nums[i]` is equal to `nums[current - 1]` and `nums[current]`, then we cannot insert element.

- When `nums[i]` is not equal to `nums[current - 1]` and `nums[current]`, then we can insert element.

- Considering array is sorted and when `nums[i]` is not equal to `nums[current - 1]`, we can insert element

```js
const removeDuplicatesII = nums => {
    if (nums.length < 2) return nums.length;
    // last position of the new array [0, ..., k]; new element will be inserted at k + 1
    let k = 1;
    for (let i = 2; i < nums.length; i++) {
        if (nums[i] !== nums[k - 1]) {
            nums[++k] = nums[i];
        }
    }

    return k + 1; // size of the new array
};
```

### Optimized solution which can be generalized

- define k as the length of desired array [0, ..., k - 1]

- loop the nums array

- if length of the new array is less than two, the new array will not contain two elements with the same value, we add current element to the new array and update the length

- if the value of current element will not be the same as the value of the last two elements in the new array, then we add current element to the new array and update the length

- report the process until reach the end of the end of the original array.

```js
const removeDuplicatesII = nums => {
    let k = 0;
    for (let i = 0; i < nums.length; i++) {
        if (k < 2 || nums[i] !== nums[k - 1 - 1]) {
            nums[k++] = nums[i];
        }
    }
    return k;
};
```
