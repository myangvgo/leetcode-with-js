# leetcode-with-js

Solving LeetCode problems using JavaScript。

题目涵盖了 LeetCode、程序员的面试金典（Cracking the Coding Interview）[第六版]、剑指 offer。

## 项目结构

### 1. src

src 文件夹下按照题目分类存放解题文件，每道题对应一个文件。
文件的命名按照 [题号]-[题目的英文名].js 格式，英文单词用 - 连接。

### 2. test

test 目录下存放按照题目分类存解题测试文件，每道题对应一个测试文件
文件的命名按照 [题号]-[题目的英文名].test.js 格式，英文单词用 - 连接。

### 3. doc

doc 目录下主要存放解题笔记以及优秀的题解总结。

- doc/solutions 目录下存放按照题目分类的解题笔记文件，每道题对应一个笔记文件
- 文件的命名按照 [题号]-[题目的英文名].md 格式，英文单词用 - 连接。

## 运行题目的测试案例

### Run all tests

```shell
npm test test/**/*.js
```

### Run all tests in a file (or multiple files matched)

```shell
npm test test/path/to/file.js
```

### Run all test cases matched in multiple files

```shell
npm test -- --grep test-regex-string
```

## 工具篇

对于每道题目都需要创建三个文件：源文件，测试文件，笔记文件，可以借助于自定义的 `add` 命令快速创建。

### 1. 首先运行如下命令，将当前项目 bin 目录下的命令关联到本地 node_modules 下面

```shell
npm link
```

### 2. 创建文件

```shell
# -f filename (required) -c category (required) -t chineseDesc (optional)
add -f numberOfProblem-name-of-leetcode-problem -c categoryName -t chineseDescription

# 例如（提供中文题目名称）- 供题解 Markdown 文件使用
add -f 102-binary-tree-level-order-traversal -c binary-tree -t 二叉树的层次遍历
# 不提供中文题目名称
add -f 102-binary-tree-level-order-traversal -c binary-tree

```

### 3. 如果需要移除当前目录的命令连接

```shell
npm unlink
```

移除之后，可以通过运行如下命令，跟运行步骤2中的 `add` 命令等价。

```shell
node bin/add.js -f numberOfProblem-name-of-leetcode-problem -c categoryName -t chineseDesc
```
