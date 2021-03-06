//https://leetcode.com/problems/implement-queue-using-stacks
/**
 * Initialize your data structure here.
 */
var MyQueue = function() {
    this.Q = [];
};

/**
 * Push element x to the back of queue. 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.Q.push(x)
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    let temp = [];
    while(this.Q.length !== 0) {
        temp.push(this.Q.pop());
    }
    let x = temp.pop();
    while(temp.length !== 0) {
        this.Q.push(temp.pop());
    }
    return x;
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    return this.Q[0];
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return this.Q.length === 0;
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = Object.create(MyQueue).createNew()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */