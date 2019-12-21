import { expect } from 'chai';
import {
    TreeNode,
    inorderTraversal,
    inorderTraversal2,
    inorderTraversal3
} from '../../src';

describe('Test binary tree inorder traversal', () => {
    let input;
    let output;
    let root; // 构建二叉树，不一定是二叉查找树

    beforeEach(() => {
        // arrange
        input = [1, null, 2, 3];
        // 根据测试案例手动构建二叉树
        root = new TreeNode(1);
        root.right = new TreeNode(2);
        root.right.left = new TreeNode(3);
        output = [1, 3, 2];
    });

    it('Use inorderTraversal (recursive), it should print the correct result', () => {
        // act
        const actual = inorderTraversal(root);

        // assert
        expect(actual).deep.equal(output);
    });

    it('Use inorderTraversal2 (iterative), it should print the correct result', () => {
        // act
        const actual = inorderTraversal2(root);

        // assert
        expect(actual).deep.equal(output);
    });

    it('Use inorderTraversal3 (iterative), it should print the correct result', () => {
        // act
        const actual = inorderTraversal3(root);

        // assert
        expect(actual).deep.equal(output);
    });
});
