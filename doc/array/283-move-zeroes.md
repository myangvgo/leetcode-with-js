# 283. Move Zeroes

## Problem description

Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

> Example:
> Input: [0,1,0,3,12]
> Output: [1,3,12,0,0]

Note:
You must do this in-place without making a copy of the array.
Minimize the total number of operations.

## Possible Solutions

### 1. Use a temporary variable to remember the last non zero position

Swap non zero element and zero.

Time complexity is O(n)
Space complexity is O(1) since it's in place.

```js
var moveZeroes = function(nums) {
    for (let i = 0, lastNonZeroAt = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            [nums[lastNonZeroAt], nums[i]] = [nums[i], nums[lastNonZeroAt]];
            lastNonZeroAt++;
        }
    }
};
```

### 2. Sort and then add zeroes

Move the non zero elements to the head and keep their order
Replace remaining elements with zeroes.

Time complexity is O(n)
Space complexity is O(1) sort in place

```js
var moveZeroes = function(nums) {
    // sort the non-zero to the head of the array
    let lastNonZeroFoundAt = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[lastNonZeroFoundAt++] = nums[i];
        }
    }

    // add the remaining zeroes
    for (let j = lastNonZeroFoundAt; j < nums.length; j++) {
        nums[j] = 0;
    }
};
```
