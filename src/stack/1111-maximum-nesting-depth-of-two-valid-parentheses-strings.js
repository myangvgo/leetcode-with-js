/**
 * LeetCode NO.1111 - Maximum Nesting Depth Of Two Valid Parentheses Strings (有效括号的嵌套深度)
 * 使用栈进行括号匹配
 * @param {string} seq
 * @return {number[]}
 */
var maxDepthAfterSplit = function(seq) {
    let depth = 0;
    return seq.split('').map((value, index) => {
        if (value == '(') {
            depth++;
            return depth & 1;
        } else {
            let res = depth & 1;
            depth--;
            return res;
        }
    });
};

/**
 * LeetCode NO.1111 - Maximum Nesting Depth Of Two Valid Parentheses Strings (有效括号的嵌套深度)
 * 写法二：找左右括号与下标的规律
 * @param {string} seq
 * @return {number[]}
 */
var maxDepthAfterSplit2 = function(seq) {
    let res = [];
    for (let i = 0; i < seq.length; i++) {
        // 左括号 A 偶数下标值为 0；B 奇数下标值为 1
        if (seq[i] == '(') res[i] = i & 1;
        // 右括号 A 偶数下标值为 1；B 奇数下标值为 0
        else res[i] = (i + 1) & 1;
    }
    return res;
};

export { maxDepthAfterSplit, maxDepthAfterSplit2 };
