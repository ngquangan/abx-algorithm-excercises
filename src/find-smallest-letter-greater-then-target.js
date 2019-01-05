//https://leetcode.com/problems/find-smallest-letter-greater-than-target
/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
    return letters.find(letter => letter > target) || letters[0];
};