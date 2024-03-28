// 1.1
function findMinLengthOfThreeWords(word1, word2, word3) {
    var minLength = Math.min(word1.length, word2.length, word3.length);
    return minLength;
}

var output = findMinLengthOfThreeWords('a', 'be', 'see');
console.log(output);

// 1.2
function filterOddElements(arr) {
    return arr.filter(function(element) {
        return element % 2 !== 0;
    });
}

var output = filterOddElements([1,2,3,4,5]);
console.log(output);