/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    // 方法一：循环替换匹配的字符串
    if (s == null || s === '') return true;
    while (s.includes('()') || s.includes('[]') || s.includes('{}')) {
        // 当前字符串中发现了匹配括号，则替换
        s = s.replace('()', '');
        s = s.replace('[]', '');
        s = s.replace('{}', '');
    }
    return s === '';
};

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid2 = function(s) {
    // 方法二：使用栈
    const map = new Map();
    map.set(')', '(');
    map.set(']', '[');
    map.set('}', '{');

    const stack = [];
    for (let i = 0; i < s.length; i++) {
        const c = s.charAt(i);
        if (map.has(c)) {
            const topElement = stack.length ? stack.pop() : '#';
            if (topElement !== map.get(c)) return false;
        } else stack.push(c);
    }
    return stack.length === 0;
};

var isValid3 = function(s) {
    // 方法三：使用栈优化
    const rightSymbols = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') rightSymbols.push(')');
        else if (s[i] === '[') rightSymbols.push(']');
        else if (s[i] === '{') rightSymbols.push('}');
        else if (rightSymbols.pop() !== s[i]) return false;
    }
    return rightSymbols.length === 0;
};

export { isValid, isValid2, isValid3 };
