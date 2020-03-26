# leetcode-with-js

Solving LeetCode problems using JavaScript。

题目涵盖了 LeetCode、「程序员的面试金典」（Cracking the Coding Interview）[第六版] 以及「剑指 offer」。

* [I. 项目说明](#i-项目说明)
  * [项目结构](#项目结构)
    * [1. src](#1-src)
    * [2. test](#2-test)
    * [3. doc](#3-doc)
  * [运行题目的测试案例](#运行题目的测试案例)
    * [Run all tests](#run-all-tests)
    * [Run all tests in a file (or multiple files matched)](#run-all-tests-in-a-file-or-multiple-files-matched)
    * [Run all test cases matched in multiple files](#run-all-test-cases-matched-in-multiple-files)
  * [工具篇](#工具篇)
    * [1. 链接 add 命令](#1-链接-add-命令)
    * [2. 创建文件](#2-创建文件)
    * [3. 如果需要移除当前目录的命令连接](#3-如果需要移除当前目录的命令连接)
* [II. LeetCode 分类题解](#ii-leetcode-分类题解)
  * [数组 (array)](#数组-array)
  * [链表 (linked list)](#链表-linked-list)
  * [栈 (stack)](#栈-stack)
  * [哈希表 (hashtable)](#哈希表-hashtable)
  * [递归 (recursion)](#递归-recursion)
  * [二叉树 (binary tree)](#二叉树-binary-tree)
  * [二分搜索 (binary search)](#二分搜索-binary-search)
  * [深度优先搜索和广度优先搜索 (DFS &amp; BFS)](#深度优先搜索和广度优先搜索-dfs--bfs)
  * [贪心算法 (greedy)](#贪心算法-greedy)
  * [动态规划 (dynamic programming)](#动态规划-dynamic-programming)
  * [排序算法 (sort)](#排序算法-sort)
  * [位操作 (bit manipulation)](#位操作-bit-manipulation)
  * [数学 (math)](#数学-math)
* [III. 剑指 Offer 题解](#iii-剑指-offer-题解)
* [IV. 程序员面试金典题解](#iv-程序员面试金典题解)

## I. 项目说明

### 项目结构

#### 1. src

src 文件夹下按照题目分类存放解题文件，每道题对应一个文件。
文件的命名按照 [题号]-[题目的英文名].js 格式，英文单词用 - 连接。

#### 2. test

test 目录下存放按照题目分类存解题测试文件，每道题对应一个测试文件
文件的命名按照 [题号]-[题目的英文名].test.js 格式，英文单词用 - 连接。

#### 3. doc

doc 目录下主要存放解题笔记以及优秀的题解总结。

* doc/solutions 目录下存放按照题目分类的解题笔记文件，每道题对应一个笔记文件
* 文件的命名按照 [题号]-[题目的英文名].md 格式，英文单词用 - 连接。

### 运行题目的测试案例

#### Run all tests

```shell
npm test test/**/*.js
```

#### Run all tests in a file (or multiple files matched)

```shell
npm test test/path/to/file.js
```

#### Run all test cases matched in multiple files

```shell
npm test -- --grep test-regex-string
```

### 工具篇

对于每道题目都需要创建三个文件：源文件，测试文件，笔记文件，可以借助于自定义的 `add` 命令快速创建。

#### 1. 链接 add 命令

首先运行如下命令，将当前项目 bin 目录下的命令关联到本地 node_modules 下面

```shell
npm link
```

#### 2. 创建文件

```shell
# -f filename (required) -c category (required) -t chineseDesc (optional)
add -f numberOfProblem-name-of-leetcode-problem -c categoryName -t chineseDescription

# 例如（提供中文题目名称）- 供题解 Markdown 文件使用
add -f 102-binary-tree-level-order-traversal -c binary-tree -t 二叉树的层次遍历
# 不提供中文题目名称
add -f 102-binary-tree-level-order-traversal -c binary-tree
```

#### 3. 如果需要移除当前目录的命令连接

```shell
npm unlink
```

移除之后，可以通过运行如下命令，跟运行步骤2中的 `add` 命令等价。

```shell
node bin/add.js -f numberOfProblem-name-of-leetcode-problem -c categoryName -t chineseDesc
```

## II. LeetCode 分类题解

### 数组 (array)

| 题号 | 题目链接                                                     |                   难度                    |                           题解链接                           | 刷题思路             |
| ---- | ------------------------------------------------------------ | :---------------------------------------: | :----------------------------------------------------------: | -------------------- |
| 1    | [两数之和](https://leetcode-cn.com/problems/two-sum/)        | <span style="color: #43A047;">简单</span> |         [题解](./doc/solutions/array/001-two-sum.md)         |                      |
| 11   | [盛水最多的容器](https://leetcode-cn.com/problems/container-with-most-water/) | <span style="color: #EF6C00;">中等</span> | [题解](./doc/solutions/array/011-container-with-most-water.md) |                      |
| 15   | [三数之和](https://leetcode-cn.com/problems/3sum/)           | <span style="color: #EF6C00;">中等</span> |        [题解](./doc/solutions/array/015-three-sum.md)        |                      |
| 26   | [删除排序数组中的重复项](https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array) | <span style="color: #43A047;">简单</span> | [题解](./doc/solutions/array/026-remove-duplicates-from-sorted-array.md) |                      |
| 27   | [移除元素](https://leetcode-cn.com/problems/remove-element)  | <span style="color: #43A047;">简单</span> |     [题解](./doc/solutions/array/027-remove-element.md)      |                      |
| 66   | [加一](https://leetcode-cn.com/problems/plus-one)            | <span style="color: #43A047;">简单</span> |        [题解](./doc/solutions/array/066-plus-one.md)         |                      |
| 70   | [爬楼梯](https://leetcode-cn.com/problems/climbing-stairs)   | <span style="color: #43A047;">简单</span> |     [题解](./doc/solutions/array/070-climbing-stairs.md)     |                      |
| 80   | [删除排序数组中的重复项 II](https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array-ii) | <span style="color: #EF6C00;">中等</span> | [题解](./doc/solutions/array/080-remove-duplicates-from-sorted-array-ii.md) |                      |
| 88   | [合并两个有序数组](https://leetcode-cn.com/problems/merge-sorted-array) | <span style="color: #43A047;">简单</span> |   [题解](./doc/solutions/array/088-merge-sorted-array.md)    |                      |
| 189  | [旋转数组](https://leetcode-cn.com/problems/rotate-array)    | <span style="color: #43A047;">简单</span> |      [题解](./doc/solutions/array/189-rotate-array.md)       |                      |
| 283  | [移动零](https://leetcode-cn.com/problems/move-zeroes)       | <span style="color: #43A047;">简单</span> |       [题解](./doc/solutions/array/283-move-zeroes.md)       |                      |
| 724  | [寻找数组的中心索引](https://leetcode-cn.com/problems/find-pivot-index) | <span style="color: #43A047;">简单</span> |    [题解](./doc/solutions/array/724-find-pivot-index.md)     |                      |
| 747  | [至少是其他数字两倍的最大数](https://leetcode-cn.com/problems/largest-number-at-least-twice-of-others) | <span style="color: #43A047;">简单</span> | [题解](./doc/solutions/array/747-largest-number-at-least-twice-of-others.md) |                      |
| 999  | [车的可用捕获量](https://leetcode-cn.com/problems/available-captures-for-rook) | <span style="color: #43A047;">简单</span> | [题解](./doc/solutions/array/999-available-captures-for-rook.md) | 使用方向向量简化移动 |

### 链表 (linked list)

| 题号 | 题目链接                                                     |                   难度                    |                           题解链接                           | 刷题思路                         |
| ---- | ------------------------------------------------------------ | :---------------------------------------: | :----------------------------------------------------------: | -------------------------------- |
| 146  | [LRU缓存机制](https://leetcode-cn.com/problems/lru-cache)    | <span style="color: #EF6C00;">中等</span> |     [题解](./doc/solutions/linked-list/146-lru-cache.md)     |                                  |
| 876  | [链表的中间结点](https://leetcode-cn.com/problems/middle-of-the-linked-list) | <span style="color: #43A047;">简单</span> | [题解](./doc/solutions/linked-list/876-middle-of-the-linked-list.md) | 1. 一次遍历；2. 使用快慢指针遍历 |

### 栈 (stack)

| 题号 | 题目链接                                                     |                   难度                    |                        题解链接                        | 刷题思路 |
| ---- | ------------------------------------------------------------ | :---------------------------------------: | :----------------------------------------------------: | -------- |
| 20   | [有效的括号](https://leetcode-cn.com/problems/valid-parentheses) | <span style="color: #43A047;">简单</span> | [题解](./doc/solutions/stack/020-valid-parentheses.md) |          |
| 155  | [最小栈](https://leetcode-cn.com/problems/min-stack)        | <span style="color: #43A047;">简单</span> | [题解](./doc/solutions/stack/155-min-stack.md) |          |

### 哈希表 (hashtable)

| 题号 | 题目链接 | 难度 | 题解链接 | 刷题思路 |
| ---- | -------- | :--: | :------: | -------- |
|      |          |      |          |          |

### 递归 (recursion)

| 题号 | 题目链接 | 难度 | 题解链接 | 刷题思路 |
| ---- | -------- | :--: | :------: | -------- |
|      |          |      |          |          |

### 二叉树 (binary tree)

| 题号 | 题目链接 | 难度 | 题解链接 | 刷题思路 |
| ---- | -------- | :--: | :------: | -------- |
|      |          |      |          |          |

### 二分搜索 (binary search)

| 题号 | 题目链接 | 难度 | 题解链接 | 刷题思路 |
| ---- | -------- | :--: | :------: | -------- |
|      |          |      |          |          |

### 深度优先搜索和广度优先搜索 (DFS & BFS)

| 题号 | 题目链接 | 难度 | 题解链接 | 刷题思路 |
| ---- | -------- | :--: | :------: | -------- |
|      |          |      |          |          |

### 贪心算法 (greedy)

| 题号 | 题目链接 | 难度 | 题解链接 | 刷题思路 |
| ---- | -------- | :--: | :------: | -------- |
|      |          |      |          |          |

### 动态规划 (dynamic programming)

| 题号 | 题目链接                                                     |                   难度                    |                   题解链接                   | 刷题思路 |
| ---- | ------------------------------------------------------------ | :---------------------------------------: | :------------------------------------------: | -------- |
| 32   | [最长有效括号](https://leetcode-cn.com/problems/longest-valid-parentheses/) | <span style="color: #E91E63;">困难</span> | [题解](./doc/solutions/dynamic-programming/032-longest-valid-parentheses.md) |          |

### 排序算法 (sort)

| 题号 | 题目链接 | 难度 | 题解链接 | 刷题思路 |
| ---- | -------- | :--: | :------: | -------- |
|      |          |      |          |          |

### 位操作 (bit manipulation)

| 题号 | 题目链接 | 难度 | 题解链接 | 刷题思路 |
| ---- | -------- | :--: | :------: | -------- |
|      |          |      |          |          |

### 数学 (math)

| 题号 | 题目链接                                                     |                   难度                    |                           题解链接                           | 刷题思路   |
| ---- | ------------------------------------------------------------ | :---------------------------------------: | :----------------------------------------------------------: | ---------- |
| 892  | [三维形体的表面积](https://leetcode-cn.com/problems/surface-area-of-3d-shapes) | <span style="color: #43A047;">简单</span> | [题解](./doc/solutions/math/892-surface-area-of-3d-shapes.md) | 画图找规律 |

## III. 剑指 Offer 题解

| 题号 | 题目链接 | 难度 | 题解链接 | 分类 | 刷题思路 |
| ---- | -------- | :--: | :------: | ---- | -------- |
|      |          |      |          |      |          |

## IV. 程序员面试金典题解

| 题号  | 题目链接                                                     |                   难度                    |                           题解链接                           | 分类         | 刷题思路                  |
| ----- | ------------------------------------------------------------ | :---------------------------------------: | :----------------------------------------------------------: | ------------ | ------------------------- |
| 10.01 | [合并排序的数组](https://leetcode-cn.com/problems/sorted-merge-lcci) | <span style="color: #43A047;">简单</span> | [题解](./doc/solutions/cracking-the-coding-interview/10_01-sorted-merge-lcci.md) | 数组、双指针 |                           |
| 17.16 | [按摩师](https://leetcode-cn.com/problems/the-masseuse-lcci) | <span style="color: #43A047;">简单</span> | [题解](./doc/solutions/cracking-the-coding-interview/17_16-the-masseuse-lcci.md) | 动态规划     | 类似于 198. 打家劫舍 问题 |
