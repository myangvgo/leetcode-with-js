/**
 * 「Cracking the Coding Interview」 NO.10_01 - Sorted Merge (合并排序的数组)
 * @param {number[]} A
 * @param {number} m
 * @param {number[]} B
 * @param {number} n
 * @return {void} Do not return anything, modify A in-place instead.
 */
var mergeSorted = function(A, m, B, n) {
    let i = m - 1;
    let j = n - 1;
    let k = m + n - 1;
    while (i >= 0 && j >= 0)
        A[i] > B[j] ? (A[k--] = A[i--]) : (A[k--] = B[j--]);
    while (j >= 0) A[k--] = B[j--];
};
export { mergeSorted };
