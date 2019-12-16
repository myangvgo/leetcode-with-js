/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.stack = [];
    this.internalStack = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    this.stack.push(x);
    if (this.internalStack.length)
        this.internalStack[this.internalStack.length - 1] < x
            ? ''
            : this.internalStack.push(x);
    else this.internalStack.push(x);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    let popElement = this.stack.pop();
    if (popElement === this.internalStack[this.internalStack.length - 1])
        this.internalStack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1];
};
/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.internalStack[this.internalStack.length - 1];
};

/**
 * @description 特定的解法
 * 使用一个栈来实现，用一个变量来保存最小值
 */
class MinStack2 {
    constructor() {
        this.stack = [];
        this.min = Infinity;
    }

    push(x) {
        if (x <= this.min) {
            this.stack.push(this.min); // 将之前的最小值保存
            this.min = x; // 更新最小值
        }
        this.stack.push(x); // 入栈
    }

    pop() {
        // 元素出栈，同时如果出栈元素是最小值
        if (this.stack.pop() === this.min) {
            // 因为保存了之前的最小值，将保存的临时最小值变量也出栈，同时更新当前最小值
            this.min = this.stack.pop();
        }
    }

    top() {
        return this.stack[this.stack.length - 1];
    }

    getMin() {
        return this.min;
    }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

module.exports = { MinStack, MinStack2 };
