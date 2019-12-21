# 144 二叉树的前序遍历

## 题目描述

<https://leetcode-cn.com/problems/binary-tree-preorder-traversal/>

## 题目解析

### 思路一：递归法（深度优先）

遍历顺序是从上到下，从左到右。

```js
/**
 * 解法一：递归法
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(root) {
    const res = [];
    traversalPreorder(root, res);
    return res;
};

/**
 * @param {TreeNode} root
 * @param {number[]} res
 */
const traversalPreorder = (root, res) => {
    if (root) res.push(root.val);
    if (root && root.left) traversalPreorder(root.left, res);
    if (root && root.right) traversalPreorder(root.right, res);
};
```

时间复杂度：O(N) N 为 二叉树节点个数
空间复杂度：O(logN)，最坏情况下为O(N)

### 思路二：使用栈模拟递归（迭代法）

从根节点开始，每次迭代弹出当前栈顶元素，并将孩子节点按照**先右孩子节点**再**左孩子节点**压入栈中。

最后的结果按照 Top -> Bottom, Left -> Right 的顺序打印，符合前序输出。

```js
/**
 * 解法二：使用栈来模拟递归（迭代法）
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal2 = function(root) {
    if (!root) return [];
    const res = [];
    const stack = [root];
    let current;
    while (stack.length) {
        current = stack.pop();
        if (current) res.push(current.val);
        if (current && current.right) stack.push(current.right);
        if (current && current.left) stack.push(current.left);
    }
    return res;
};
```

时间复杂度：O(N) N 为节点个数
空间复杂度：O(N) 最坏的情况下存储整棵树

另一种写法：

访问根节点后，然后访问其左子树；当左子树遍历完成之后，需要访问右子树，这个时候就需要拿到父节点的信息。
通过父节点从而访问右子树，这样整棵树遍历完成之后，继续回退到上一层。直至当前子树访问完成，同时栈为空。

核心思想为：

1. 每拿到一个 节点 就把它保存在 栈 中

2. 继续对这个节点的 左子树 重复 过程1，直到左子树为 空

3. 因为保存在 栈 中的节点都遍历了 左子树 但是没有遍历 右子树，所以对栈中节点 出栈 并对它的 右子树 重复 过程1

4. 直到遍历完所有节点.

```js
/**
 * 另一种写法
 * 解法二：使用栈来模拟递归（迭代法）
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal3 = function(root) {
    if (!root) return [];
    const res = [];
    const stack = [];
    let current = root;
    while (current || stack.length) {
        while (current) {
            // 若当前节点非空
            res.push(current.val);
            stack.push(current);
            current = current.left; // 进入左子树
        }
        current = stack.pop();
        if (current) current = current.right; // 进入右子树
    }
    return res;
};
```

### 思路三：使用带有颜色标记的栈模拟递归（迭代法）

- 通过颜色来标记节点：白色代表未访问的节点，灰色代表已访问过的节点。

- 如果访问到的节点是白色，则将当前访问的节点标记为灰色，同时将节点的右孩子节点、左孩子节点、节点自身压入栈中。

- 如果访问到的节点是灰色，则输出该节点

```js

/**
 * 解法三：使用颜色标记位来模拟递归 （迭代法）
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal4 = function(root) {
    if (!root) return [];
    const [WHITE, GRAY] = [0, 1]; // WHITE - 未处理， GRAY - 已处理
    const stack = [[WHITE, root]]; // 初始状态： 根节点 未访问
    const res = [];
    let color, current;
    while (stack.length) {
        [color, current] = stack.pop();
        if (!current) continue;
        if (color === WHITE) {
            stack.push([WHITE, current.right]);
            stack.push([WHITE, current.left]);
            stack.push([GRAY, current]);
        } else res.push(current.val);
    }
    return res;
};
```

时间复杂度：O(N) N 为二叉树节点的个数
空间复杂度：O(N) 需要用到栈来存储节点，最坏情况下要存储整棵树

### 思路四：莫里斯遍历

遍历二叉树时，最大的难点在于，遍历到子节点的时候怎样重新返回到父节点（假设节点中没有指向父节点的p指针），由于不能用栈作为辅助空间。为了解决这个问题，Morris方法用到了线索二叉树（threaded binary tree）的概念。在Morris方法中不需要为每个节点额外分配指针指向其前驱（predecessor）和后继节点（successor），只需要利用叶子节点中的左右空指针指向某种顺序遍历下的前驱节点或后继节点就可以了。

```java
class Solution {
  public List<Integer> preorderTraversal(TreeNode root) {
    LinkedList<Integer> output = new LinkedList<>();

    TreeNode node = root;
    while (node != null) {
      if (node.left == null) {
        output.add(node.val);
        node = node.right;
      }
      else {
        TreeNode predecessor = node.left;
        while ((predecessor.right != null) && (predecessor.right != node)) {
          predecessor = predecessor.right;
        }

        if (predecessor.right == null) {
          output.add(node.val);
          predecessor.right = node;
          node = node.left;
        }
        else{
          predecessor.right = null;
          node = node.right;
        }
      }
    }
    return output;
  }
}
```
