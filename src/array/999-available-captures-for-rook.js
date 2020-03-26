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

export { numRookCaptures, numRookCaptures2 };
