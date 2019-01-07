//https://leetcode.com/problems/license-key-formatting
/**
 * @param {string} S
 * @param {number} K
 * @return {string}
 */
var licenseKeyFormatting = function(S, K) {
    let str = S.split("-").join("").split("").reverse();
    let arr = _.chunk(str, K);
    return arr.map(a => a.reverse().join("").toUpperCase()).reverse().join("-");
};