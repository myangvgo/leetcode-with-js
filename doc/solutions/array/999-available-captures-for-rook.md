# LeetCode 999. 车的可用捕获量 (Available Captures For Rook)

[返回题解列表](../../../README.md)

## 题目描述

<https://leetcode-cn.com/problems/available-captures-for-rook/>

## 题目解析

题目的意思就是，车可以沿着四个方向移动，除非超出边界，遇到象，或者捕获到卒。
由于只有一个车，先找到车的位置。在以车为中心点，向四个方向遍历。

### 解法一

```js
/**
 * LeetCode NO.999 - Available Captures For Rook (车的可用捕获量)
 * @param {character[][]} board
 * @return {number}
 */
var numRookCaptures = function(board) {
    let [x, y] = [0, 0];
    for (let i = 0; i < 8; i++)
        for (let j = 0; j < 8; j++) {
            if (board[i][j] == 'R') {
                x = i;
                y = j;
                break;
            }
        }

    let count = 0;
    // traverse left
    for (let i = y - 1; i >= 0; i--) {
        if (board[x][i] == 'B') break;
        if (board[x][i] == 'p') {
            count++;
            break;
        }
    }
    // traverse right
    for (let i = y + 1; i < 8; i++) {
        if (board[x][i] == 'B') break;
        if (board[x][i] == 'p') {
            count++;
            break;
        }
    }
    // traverse up
    for (let i = x - 1; i >= 0; i--) {
        if (board[i][y] == 'B') break;
        if (board[i][y] == 'p') {
            count++;
            break;
        }
    }
    // traverse down
    for (let i = x + 1; i < 8; i++) {
        if (board[i][y] == 'B') break;
        if (board[i][y] == 'p') {
            count++;
            break;
        }
    }
    return count;
};
```

时间复杂度：`O(N^2)` 其中 N 是棋盘的边长。找白色车在棋盘中的位置需要 O(N^2)的时间复杂度; 模拟车在四个方向上捕获颜色相反的卒需要 O(2N) 的时间复杂度，所以一共需要 O(N^2 + 2 \* N) = O(N^2)

空间复杂度：`O(1)`

### 解法二

通过观察可以发现，向四个方向移动的处理逻辑是一样的，这里可以通过使用方向向量来消除重复代码。
同时在遍历的时候，使用 label 跳出多层循环。

```js
/**
 * 解法二：使用方向向量优化
 * LeetCode NO.999 - Available Captures For Rook (车的可用捕获量)
 * @param {character[][]} board
 * @return {number}
 */
var numRookCaptures2 = function(board) {
    let [x, y] = [0, 0];
    let dx = [-1, 0, 1, 0]; // 车在X轴上移动的方位
    let dy = [0, -1, 0, 1]; // 车在Y轴上移动的方位

    // 声明label
    // 遍历棋盘，找到初始状态下车的位置
    loop: for (let i = 0; i < 8; i++)
        for (let j = 0; j < 8; j++) {
            if (board[i][j] == 'R') {
                x = i;
                y = j;
                break loop;
            }
        }
    let count = 0;
    for (let i = 0; i < 4; i++) {
        for (let step = 1; ; step++) {
            let tx = x + step * dx[i];
            let ty = y + step * dy[i];
            if (tx < 0 || tx >= 8 || ty < 0 || ty >= 8 || board[tx][ty] == 'B')
                break;
            if (board[tx][ty] == 'p') {
                count++;
                break;
            }
        }
    }
    return count;
};
```

时间复杂度：`O(N^2)` 其中 N 是棋盘的边长。找白色车在棋盘中的位置需要 O(N^2)的时间复杂度; 模拟车在四个方向上捕获颜色相反的卒需要 O(2N) 的时间复杂度，所以一共需要 O(N^2 + 2 \* N) = O(N^2)

空间复杂度：`O(1)`

[返回题解列表](../../../README.md)
