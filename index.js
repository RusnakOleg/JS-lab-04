// 1.1
function findMinLengthOfThreeWords(word1, word2, word3) {
    var minLength = Math.min(word1.length, word2.length, word3.length);
    return minLength;
}

var output = findMinLengthOfThreeWords('a', 'be', 'see');
console.log(output);