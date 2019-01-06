//https://leetcode.com/problems/minimum-index-sum-of-two-lists
/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function(list1, list2) {
    let res = []
    let sumIndex = list1.length + list2.length;
    
    list1.forEach((e1, i) => {
        let j = list2.indexOf(e1);
        if (j !== -1) {
            if (sumIndex > i + j) {
                sumIndex = i + j
                res = [e1];
            } else if (sumIndex == i + j) {
                res.push(e1);
            }
        }
    });
    return res;
};