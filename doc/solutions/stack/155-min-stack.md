# 155 最小栈 Min Stack

## 题目描述

<https://leetcode-cn.com/problems/min-stack>

## 题目解答

### 方法一：使用辅助栈

#### 思路

使用两个栈，一个正常的数据栈，另一最小站用来保存最小值。

```js
class MinStack {
    constructor() {
        this.stack = [];
        this.minStack = [];
    }

    push(x) {
        this.stack.push(x);
        if (this.minStack.length) {
            this.minStack[this.minStack.length - 1] < x
                ? ''
                : this.minStack.push(x);
        } else this.minStack.push(x);
    }

    pop() {
        // 元素出栈，同时判断出栈的元素是否等于最小栈的栈顶元素
        if (this.stack.pop() === this.minStack[this.minStack.length - 1])
            // 最小栈元素出栈
            this.minStack.pop();
    }

    top() {
        return this.stack[this.stack.length - 1];
    }

    getMin() {
        return this.minStack[this.minStack.length - 1];
    }
}
```

### 方法二：将最小元素同时压入栈中保存

#### 思路

使用一个栈，但是每次将前一次的最小元素入栈，缺点是栈中存储了一些额外的元素。

```js

/**
 * @description 特定的解法
 * 使用一个栈来实现，用一个变量来保存最小值
 */
class MinStack2 {
    constructor() {
        this.stack = [];
        this.min = Infinity;
    }

    push(x) {
        if (x <= this.min) {
            this.stack.push(this.min); // 将之前的最小值保存
            this.min = x; // 更新最小值
        }
        this.stack.push(x); // 入栈
    }

    pop() {
        // 元素出栈，同时如果出栈元素是最小值
        if (this.stack.pop() === this.min) {
            // 因为保存了之前的最小值，将保存的临时最小值变量也出栈，同时更新当前最小值
            this.min = this.stack.pop();
        }
    }

    top() {
        return this.stack[this.stack.length - 1];
    }

    getMin() {
        return this.min;
    }
}
```