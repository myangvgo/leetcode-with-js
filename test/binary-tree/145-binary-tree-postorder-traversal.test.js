import { expect } from 'chai';
import {
    TreeNode,
    postorderTraversal,
    postorderTraversal2,
    postorderTraversal3,
    postorderTraversal4
} from '../../src';

describe('Test binary tree postorder traversal', () => {
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
        output = [3, 2, 1];
    });

    it('Use postorderTraversal (recursive), it should print the correct result', () => {
        // act
        const actual = postorderTraversal(root);

        // assert
        expect(actual).deep.equal(output);
    });

    it('Use postorderTraversal2 (iterative), it should print the correct result', () => {
        // act
        const actual = postorderTraversal2(root);

        // assert
        expect(actual).deep.equal(output);
    });

    it('Use postorderTraversal3 (iterative), it should print the correct result', () => {
        // act
        const actual = postorderTraversal3(root);

        // assert
        expect(actual).deep.equal(output);
    });

    it('Use postorderTraversal4 (iterative), it should print the correct result', () => {
        // act
        const actual = postorderTraversal4(root);

        // assert
        expect(actual).deep.equal(output);
    });
});
