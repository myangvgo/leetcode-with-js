import { expect } from 'chai';
import {
    TreeNode,
    preorderTraversal,
    preorderTraversal2,
    preorderTraversal3,
    preorderTraversal4
} from '../../src';

describe('Test binary tree preorder traversal', () => {
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
        output = [1, 2, 3];
    });

    it('Use preorderTraversal (recursive), it should print the correct result', () => {
        // act
        const actual = preorderTraversal(root);

        // assert
        expect(actual).deep.equal(output);
    });

    it('Use preorderTraversal2 (iterative), it should print the correct result', () => {
        // act
        const actual = preorderTraversal2(root);

        // assert
        expect(actual).deep.equal(output);
    });

    it('Use preorderTraversal3 (iterative), it should print the correct result', () => {
        // act
        const actual = preorderTraversal3(root);

        // assert
        expect(actual).deep.equal(output);
    });

    it('Use preorderTraversal4 (iterative), it should print the correct result', () => {
        // act
        const actual = preorderTraversal4(root);

        // assert
        expect(actual).deep.equal(output);
    });
});
