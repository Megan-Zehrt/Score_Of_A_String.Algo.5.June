// 3110. Score of a String

// You are given a string s. The score of a string is defined as the sum of the absolute difference between the ASCII values of adjascent characters.
// Return the score of s.






/**
 * @param {string} s
 * @return {number}
 */
var scoreOfString = function(s) {
    
    let score = 0;

    for(let i = 0; i < s.length-1; i++){
        let value1 = s.charCodeAt(i)
        let value2 = s.charCodeAt(i+1)
        let difference = Math.abs(value1 - value2)
        score += difference
    }
    return score
};