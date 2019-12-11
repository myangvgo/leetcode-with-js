/**
 * 解法一：暴力求解
 * @param {number[]} height
 * @return {number} 最大面积
 */
var maxArea = function(height) {
    let areaMax = 0;
    for (let i = 0; i < height.length - 1; i++) {
        for (let j = i + 1; j < height.length; j++) {
            areaMax = Math.max(
                areaMax,
                Math.min(height[i], height[j]) * (j - i)
            );
        }
    }
    return areaMax;
};

/**
 * 解法二：使用头尾双指针往中间夹击（for loop）
 * @param {number[]} height
 * @return {number} 最大面积
 */
var maxArea2 = function(height) {
    let areaMax = 0;
    for (let i = 0, j = height.length - 1; i < j; ) {
        const minHeight = height[i] < height[j] ? height[i++] : height[j--]; // 求矩形高度，同时移动对应的指针
        areaMax = Math.max(areaMax, minHeight * (j - i + 1)); // 矩形的宽度加一，抵消上述指针提前移动的影响
    }
    return areaMax;
};

/**
 * 解法二：使用头尾双指针往中间夹击 (while 写法)
 * @param {number[]} height
 * @return {number} 最大面积
 */
var maxArea3 = function(height) {
    let areaMax = 0,
        l = 0,
        r = height.length - 1;

    while (l < r) {
        if (height[l] < height[r]) {
            areaMax = Math.max(areaMax, height[l] * (r - l));
            l++;
        } else {
            areaMax = Math.max(areaMax, height[r] * (r - l));
            r--;
        }
    }

    return areaMax;
};

export { maxArea, maxArea2, maxArea3 };
