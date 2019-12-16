# 20 有效的括号

## 题目描述

<https://leetcode-cn.com/problems/valid-parentheses>

## 题解

### 方法一：暴力法

#### 思路

通过不断循环的替换有效的括号对，经过多次循环后，如果源字符串被替换为空，那么说明是有效的字符串。

```js
var isValid = function(s) {
    // 方法一：循环替换匹配的字符串
    if (s == null || s === '') return true;
    while (s.includes('()') || s.includes('[]') || s.includes('{}')) {
        // 当前字符串中发现了匹配括号，则替换
        s = s.replace('()', '');
        s = s.replace('[]', '');
        s = s.replace('{}', '');
    }
    return s === '';
};
```

时间复杂度：O(n^2)
空间复杂度：O(1)

### 方法二：使用栈来解决

#### 思路

使用一个栈，遍历字符串每个字符，如果遇到左括号则入栈，如果遇到右括号取出当前栈顶元素比较。

```js
var isValid2 = function(s) {
    // 方法二：使用栈
    const map = new Map();
    map.set(')', '(');
    map.set(']', '[');
    map.set('}', '{');

    const stack = [];
    for (let i = 0; i < s.length; i++) {
        const c = s.charAt(i);
        if (map.has(c)) {
            const topElement = stack.length ? stack.pop() : '#';
            if (topElement !== map.get(c)) return false;
        } else stack.push(c);
    }
    return stack.length === 0;
};
```

时间复杂度：O(n)
空间复杂度：O(1)

### 方法三：使用栈（优化）

#### 思路

使用栈，只存储对应的右括号。遍历字符串，如果遇到左括号，则将对应的右括号加入到栈中，否则取出栈顶元素与当前字符比较。

```js
var isValid3 = function(s) {
    // 方法三：使用栈优化
    const rightSymbols = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') rightSymbols.push(')');
        else if (s[i] === '[') rightSymbols.push(']');
        else if (s[i] === '{') rightSymbols.push('}');
        else if (rightSymbols.pop() !== s[i]) return false;
    }
    return rightSymbols.length === 0;
};
```

时间复杂度：O(n)
空间复杂度：O(1)
