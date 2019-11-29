/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    for (let i = digits.length - 1; i >= 0; i--) {
        digits[i]++; // 加一
        digits[i] %= 10; // 处理进位情况
        // 只要有一位没有进位，也就是加一之后该位还不是0，那么之后都不会进位，直接返回当前数组
        if (digits[i] !== 0) {
            return digits;
        }
    }
    // 每一位都进位[9,9,9,...]这种情况，直接返回一个长度加一的新数组[1,0,0,0...]
    let newDigits = Array(digits.length + 1).fill(0);
    newDigits[0] = 1;
    return newDigits;
};

export { plusOne }
