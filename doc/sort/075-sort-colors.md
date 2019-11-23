# 75. Sort Colors

## Problem description

Given an array with n objects colored red, white or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white and blue.

Here, we will use the integers 0, 1, and 2 to represent the color red, white, and blue respectively.

**Note**: You are not suppose to use the library's sort function for this problem.

> **Example:**
> Input: [2,0,2,1,1,0]
> Output: [0,0,1,1,2,2]

## Possible solutions

### 1. Use two passes counting sort

- Iterate array and count the number of 0, 1, 2

- Put them back to the original array

Time complexity is O(n)
Space comlexity is O(1)

```js
const sortColors = nums => {
    let zero = 0,
        one = 0,
        two = 0;
    // count elements
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) zero++;
        if (nums[i] === 1) one++;
        if (nums[i] === 2) two++;
    }

    // write elements to array
    let i = 0;
    while (i < zero) {
        nums[i++] = 0;
    }
    while (i < zero + one) {
        nums[i++] = 1;
    }
    while (i < zero + one + two) {
        nums[i++] = 2;
    }
};
```

### 2. Use three pointer quick sort

```txt
divide into four sections：red，white，blue和unclassified
    |——0——|--1---|--unclassified--|--2---|
          |      |                |
        red   white             blue
    when white and blue is not met：
        nums[w] is 0，swap to red section，red and white pointer advances by 1 step。
        nums[w] is 1，white pointer advance by 1 step。
        nums[w] is 2，swap to blue section, blue moves 1 step left。
```

Time complexity is O(n)
Space complexity is O(1)
One pass

```js
const sortColors = nums => {
    let p0 = 0,
        p1 = 0,
        p2 = nums.length - 1;

    while (p1 < p2) {
        if (nums[p1] === 0) {
            [nums[p0], nums[p1]] = [nums[p1], nums[p0]];
            p0++;
            p1++; // all values in left side of p1 are scanned, need to proceed to next element
        } else if (nums[p1] === 2) {
            [nums[p1], nums[p2]] = [nums[p2], nums[p1]];
            p2--; // element in right side of p1 are not scanned
        } else {
            p1++;
        }
    }
};
```
