//https://leetcode.com/problems/keyboard-row
/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
    let arr = [];
    let rowOne = 'qwertyuiop';
    
    let rowTwo = 'asdfghjkl';
    
    let rowThree = 'zxcvbnm';
    
    for( let i = 0 ; i < words.length; i++) {
        if(checkWord(rowOne, words[i])) {
            arr.push(words[i]);
        }
        
        if(checkWord(rowTwo, words[i])) {
            arr.push(words[i]);
        }
        
        if(checkWord(rowThree, words[i])) {
            arr.push(words[i]);
        }
        
    }
    
    return arr;
    
};

let checkWord = (arrRow, word) => {
    for(let i = 0 ; i < word.length; i++) {
        let index = arrRow.indexOf(word[i].toLowerCase());
        if(index === -1) {
            return false;
        }
    }
    
    return true;
}