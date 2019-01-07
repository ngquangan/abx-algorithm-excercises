//https://leetcode.com/problems/implement-stack-using-queues/
/**
 * Initialize your data structure here.
 */
var MyStack = function() {
    this.Q = []
};


/**
 * Push element x onto stack. 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    let tempQ = []
    while (this.Q.length > 0) {
        tempQ.unshift(this.Q.pop());
    }
    
    this.Q.unshift(x);
    while (tempQ.length > 0) {
        this.Q.unshift(tempQ.pop())
    }
};

/**
 * Removes the element on top of the stack and returns that element.
 * @return {number}
 */
MyStack.prototype.pop = function() {
    return this.Q.pop();
};

/**
 * Get the top element.
 * @return {number}
 */
MyStack.prototype.top = function() {
    return this.Q[this.Q.length - 1];
};

/**
 * Returns whether the stack is empty.
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return this.Q.length === 0;
};

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = Object.create(MyStack).createNew()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */