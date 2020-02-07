/**
 * 快速幂等法一（递归）
 * 计算 x 的 n 次幂函数
 * @param {number} x 
 * @param {number} n 
 * @return {number} 
 */
var myPow = function(x, n) {
    if (n === 0) return 1;
    let pow = Math.abs(n);
    let half = myPow(x, Math.floor(pow / 2))
    let result = pow % 2 === 0
        ? half * half
        : half * half * x;
    return n > 0 ? result : 1 / result;
}

/**
 * 快速幂等法二（递归）
 * 计算 x 的 n 次幂函数
 * @param {number} x 
 * @param {number} n 
 * @return {number} 
 */
var myPow1 = function(x, n) {
    if (n === 0) return 1;
    let pow = Math.abs(n);
    let result = pow % 2 === 0
        ? myPow1(x * x, pow / 2)
        : myPow1(x * x, (pow - 1) / 2) * x;
    return n > 0 ? result : 1 / result;
}

/**
 * 快速幂等法 三（循环-迭代法）
 * @param {number} x 
 * @param {number} n 
 */
var myPow2 = function(x, n) {
    if (n === 0) return 1;
    if (n < 0) {
        n = - n;
        x = 1 / x;
    }
    let res = 1;
    let current_product = x;
    for (let i = n; i > 0; i = Math.floor(i / 2)) {
        if(i % 2 === 1) res = res * current_product;
        current_product = current_product * current_product;
    }
    return res;
}

export { myPow, myPow1, myPow2 }