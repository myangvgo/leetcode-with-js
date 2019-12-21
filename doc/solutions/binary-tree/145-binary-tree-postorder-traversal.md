# 145 二叉树的后序遍历

## 题目描述

<https://leetcode-cn.com/problems/binary-tree-postorder-traversal/>

## 题目解析

### 思路一：递归（深度优先）

采用深度作为优先级，从一开始一直达到某个确定的叶子，然后再返回根到达另一个分支。

```js
/**
 * 解法一：递归法
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function(root) {
    const res = [];
    traversalPostorder(root, res);
    return res;
};

/**
 * @param {TreeNode} root
 * @param {number[]} res
 */
const traversalPostorder = (root, res) => {
    if (root && root.left) traversalPostorder(root.left, res);
    if (root && root.right) traversalPostorder(root.right, res);
    if (root) res.push(root.val);
};
```

时间复杂度：O(N) N 是二叉树的结点个数
空间复杂度：O(logN)，最坏情况下为O(N)

### 思路二：迭代法（深度优先）

使用栈来模拟递归过程：

从根节点开始依次迭代，弹出栈顶元素输出到输出列表中，然后依次压入孩子节点，按照**从上到下、从左到右**的顺序依次压入栈中。

因为后序遍历输出的顺序是 “左子树-右子树-根”，也就是从下到上，从左至右。所以输出顺序需要逆序。

```js
/**
 * 解法二：使用栈模拟递归（迭代法）
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function(root) {
    if (!root) return [];
    const res = [];
    const stack = [root];
    let current;
    while (stack.length) {
        current = stack.pop();
        if (current) res.unshift(current.val); // 插入到队首，或者使用 push() 对最后的结果 reverse()
        if (current && current.left) stack.push(current.left);
        if (current && current.right) stack.push(current.right);
    }
    return res;
};
```

另一种写法：

前序遍历顺序为：根 -> 左 -> 右

后序遍历顺序为：左 -> 右 -> 根

如果1： 我们将前序遍历中节点插入结果链表尾部的逻辑，修改为将节点插入结果链表的头部

那么结果链表就变为了：右 -> 左 -> 根

如果2： 我们将遍历的顺序由从左到右修改为从右到左，配合如果1

那么结果链表就变为了：左 -> 右 -> 根

这刚好是后序遍历的顺序

```js

/** 另一种写法
 * 解法二：使用栈模拟递归（迭代法）
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal3 = function(root) {
    if (!root) return [];
    const res = [];
    const stack = [];
    let current = root;
    while (current || stack.length) {
        while (current) {
            // 当前节点为非空
            res.unshift(current.val); // 将结果添加到队首
            stack.push(current);
            current = current.right; // 进入右子树
        }
        current = stack.pop();
        if (current) current = current.left; // 进入左子树
    }
    return res;
};
```

时间复杂度：O(N) N 是二叉树的结点个数
空间复杂度：O(N) 最坏情况下需要保存整棵树

### 思路三：使用颜色标记的迭代法

- 使用颜色标记节点的状态：白色为新节点，灰色为已访问的节点。

- 如果遇到节点为白色，则将其标记为灰色，同时将自身、右节点、左节点依次入栈

- 如果遇到节点为灰色，则将节点的值输出

```js
/**
 * 解法三：使用颜色标记位来模拟递归（迭代法）
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal3 = function(root) {
    if (!root) return [];
    const [WHITE, GRAY] = [0, 1];
    const res = [], stack = [[WHITE, root]];
    let color, current;
    while (stack.length) {
        [color, current] = stack.pop();
        if (!current) continue;
        if (color === WHITE) {
            stack.push([GRAY, current]);
            stack.push([WHITE, current.right]);
            stack.push([WHITE, current.left]);
        } else res.push(current.val);
    }
    return res;
};
```

时间复杂度：O(N) N 是二叉树的结点个数
空间复杂度：O(N) 最坏情况下需要保存整棵树
