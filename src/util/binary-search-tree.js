import { TreeNode } from './models/tree-node';

export class BinarySearchTree {
    /**
     * @param {TreeNode} root
     */
    constructor(root) {
        this.root = root;
    }

    /**
     * insert node to binary tree
     * @param {number} val
     */
    insert(val) {
        if (this.root == null) this.root = new TreeNode(val);
        else this.insertNode(this.root, val);
    }

    /**
     * @param {TreeNode} node
     * @param {number} val
     */
    insertNode(node, val) {
        if (val < node.val) {
            if (node.left == null) node.left = new TreeNode(val);
            else this.insertNode(node.left, val);
        } else if (node.right == null) {
            node.right = new TreeNode(val);
        } else {
            this.insertNode(node.right, val);
        }
    }
}
