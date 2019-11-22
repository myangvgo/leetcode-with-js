# 1. Two Sum

## Problem Description

Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

> Example:
> Given nums = [2, 7, 11, 15], target = 9,
> Because nums[0] + nums[1] = 2 + 7 = 9,
> return [0, 1].

## Possible Solutions

### 1. Brute Force

Use two loops, time complexity is **O(n^2)**

### 2. Use Memorized Structure

Loop the array and store elements in a memorized structure.

We can use Map / Object / Array to store the elements and all of these data strucure has **constant time complexity lookup**. Space complexity will be O(n).

- Map

    ```js
    const twoSum = (nums, target) => {
        let memorized = new Map();
        for (let i = 0; i < nums.length; i++) {
            let diff = target - nums[i];
            if (memorized.has(diff)) {
                // constant complexity lookup
                return [memorized[diff], i];
            }
            memorized[nums[i]] = i;
        }
        return [];
    };
    ```

- Object property

    ```js
    const twoSum = (nums, target) => {
        let memorized = {};
        for (let i = 0; i < nums.length; i++) {
            let complement = target - nums[i];
            if (complement in memorized)
                // constant complexity lookup
                return [memorized[complement], i];
            memorized[nums[i]] = i;
        }
        return [];
    };
    ```

- Array

    ```js
    const twoSum = (nums, target) => {
        let memorized = [];
        for (let i = 0; i < nums.length; i++) {
            let complement = target - nums[i];
            if (memorized[complement] != undefined) {
                return [memorized[complement], i];
            }
            memorized[nums[i]] = i;
        }
        return [];
    };
    ```
