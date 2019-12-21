/**
 * 解法一：递归
 * @param {Node} root
 * @return {number[]}
 */
var postorder = function(root) {
    const res = [];
    postorderTraversal(root, res);
    return res;
};

/**
 * @param {Node} node
 * @param {number[]} res
 * @return {void}
 */
const postorderTraversal = (node, res) => {
    if (!node) return;
    if (node.children)
        node.children.forEach(childNode => postorderTraversal(childNode, res));
    res.push(node.val);
};

/**
 * 解法二：迭代法，使用栈模拟递归
 * @param {Node} root
 * @return {number[]}
 */
var postorder2 = function(root) {
    const res = [];
    const stack = [];
    if (!root) return [];
    stack.push(root);
    let node;
    while (stack.length) {
        node = stack.pop();
        if (node) res.unshift(node.val);
        if (node && node.children)
            node.children.forEach(child => stack.push(child));
    }
    return res;
};

export { postorder, postorder2 };
