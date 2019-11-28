# Remove Element

## Problem Description

Given an array nums and a value val, remove all instances of that value in-place and return the new length.

Do not allocate extra space for another array, you must do this by modifying the input array in-place with **O(1)** extra memory.

The order of elements can be changed. It doesn't matter what you leave beyond the new length.

> **Example 1:**
> Given nums = [3,2,2,3], val = 3,
> Your function should return length = 2, with the first two elements of nums being 2.
> It doesn't matter what you leave beyond the returned length.
> **Example 2:**
> Given nums = [0,1,2,2,3,0,4,2], val = 2,
> Your function should return length = 5, with the first five elements of nums containing 0, 1, 3, 0, and 4.
> Note that the order of those five elements can be arbitrary.
> It doesn't matter what values are set beyond the returned length.

## Possible Solution

### 1. Two Pointer Copy and Replace

We need to maintain a new array [0, ... , k] based on the original array, and then copy and replace all non-val elements to the new array.

Time complexity is **O(n)** for one loop
Space complexity is **O(1)** for operartion is in place

Operations is optimized if there are a lot elements to be removed.

```js
const removeElement = (nums, val) => {
    let k = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) nums[k++] = nums[i];
    }

    nums.length = k; // shorten the size of the array, i.e. remove elements
    return k;
};
```

### 2. Two Pointer Copy and remove with last element

To deal with the case that fewer elements to be removed, the first option is not optimized.

Consider the order of elements in the array can be changed, we do not need to move all elements to the left.

The idea here is to swap the val with the last element and then remove the last element.

Time complexity is **O(n)**
Space complexity is **O(1)**

Operation is optimized if there are not so many elements to be removed.

```js
const removeElement = （nums, val) => {
    let i = 0,
    j = nums.length;

    while(i < j) {
        if(nums[i] === val) {
            nums[i] = nums[j - 1];
            j--; // remove the last element by decreasing the size
        } else {
            i++;
        }
    }

    return j;
}
```
