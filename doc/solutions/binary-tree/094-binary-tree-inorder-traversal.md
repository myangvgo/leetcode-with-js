# 94 二叉树的中序遍历

## 题目描述

<https://leetcode-cn.com/problems/binary-tree-inorder-traversal>

## 题目解析

### 思路一：递归（深度优先）

```js
/**
 * 方法一：使用递归
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    const res = [];
    traversal(root, res);
    return res;
};

/**
 * @param {TreeNode} root
 * @param {number[]} res
 * @return {void}
 */
const traversal = (root, res) => {
    if (root && root.left) traversal(root.left, res);
    if (root) res.push(root.val);
    if (root && root.right) traversal(root.right, res);
};
```

时间复杂度：O(N)
空间复杂度：O(logN)，最坏情况下为 O(N)

### 思路二：使用栈来模拟递归（迭代法）

从根节点开始，按照左子树 -> 根节点 -> 右子树 的顺序访问。

每到一个节点 A，因为根的访问在中间，将 A 入栈。然后遍历左子树，接着访问 A，最后遍历右子树。

在访问完 A 后，A 就可以出栈了。因为 A 和其左子树都已经访问完成。

核心思想为：

1. 每拿到一个 节点 就把它保存在 栈 中

2. 继续对这个节点的 左子树 重复 过程 1，直到左子树为 空

3. 因为保存在 栈 中的节点都遍历了 左子树 但是没有遍历 右子树，所以对栈中节点 出栈 并对它的 右子树 重复 过程 1

4. 直到遍历完所有节点.

这里和前序遍历思路一致，不同的只是将节点的值添加到结果序列中的时间。

```js
/**
 * 方法二：使用栈来模拟递归
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal2 = function(root) {
    const res = [];
    const stack = [];
    let cur = root;
    while (cur !== null || stack.length) {
        while (cur !== null) {
            stack.push(cur);
            cur = cur.left; // 遍历左子树
        }
        // cur 遍历指针为 null，说明已经遍历到左子树最左结点，从栈中弹出栈顶结点
        cur = stack.pop();
        res.push(cur.val); // 将当前结点的值添加到结果中
        if (cur) cur = cur.right; // 访问右子树
    }

    return res;
};
```

时间复杂度：O(N) N 为二叉树的节点个数
空间复杂度：O(N)

### 思路三：使用带有颜色标记的栈模拟递归（迭代法）

- 通过颜色来标记节点：白色代表未访问的节点，灰色代表已访问过的节点。

- 如果访问到的节点是白色，则将当前访问的节点标记为灰色，同时将节点的右孩子节点、节点自身、左孩子节点压入栈中。

- 如果访问到的节点是灰色，则输出该节点

```js
/**
 * 方法三：使用带有访问标志的栈来模拟递归
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal3 = function(root) {
    const [WHITE, GRAY] = [0, 1]; // WHITE - 未访问的新结点； GRAY - 已访问的结点
    const res = [];
    const stack = [[WHITE, root]];
    let color, node;
    while (stack.length) {
        [color, node] = stack.pop(); // 若栈中有元素，则按照左节点、根节点、右节点的顺序依次弹出元素
        if (!node) continue;
        if (color === WHITE) {
            // 当前指向的结点是未访问过的结点，将其右节点，根节点，左节点依次入栈
            stack.push([WHITE, node.right]);
            stack.push([GRAY, node]);
            stack.push([WHITE, node.left]);
        } else res.push(node.val);
    }
    return res;
};
```

时间复杂度：O(N) N 为二叉树的节点个数
空间复杂度：O(N)
