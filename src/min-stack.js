//https://leetcode.com/problems/min-stack
/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.S = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    this.S.push(x);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.S.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.S[this.S.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.S.reduce((p, c) => {
        return c < p ? c : p;
    },)
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = Object.create(MinStack).createNew()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */