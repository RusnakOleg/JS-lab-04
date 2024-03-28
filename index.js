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

//1.3
function getLengthOfShortestElement(arr) {
    if (arr.length === 0) {
        return 0; 
    }

    var shortestLength = arr[0].length; 

    for (var i = 1; i < arr.length; i++) {
        var currentLength = arr[i].length;
        if (currentLength < shortestLength) {
            shortestLength = currentLength; 
        }
    }

    return shortestLength;
}

var output = getLengthOfShortestElement(["one", "two", "three"]);
console.log(output);

//1.4
function joinArrayOfArrays(arr) {
    return arr.reduce(function(acc, curr) {
        return acc.concat(curr);
    }, []);
}

var output = joinArrayOfArrays([[1, 4], [true, false], ["x", "y"]]);
console.log(output);

// 1.5
function findSmallestNumberAmongMixedElements(arr) {
    var numbers = arr.filter(function(element) {
        return typeof element === 'number';
    });

    if (arr.length === 0 || numbers.length === 0) {
        return 0;
    }

    var smallestNumber = Math.min.apply(null, numbers);
    return smallestNumber;
}

var output = findSmallestNumberAmongMixedElements([4, 'lincoln', 9, "octopus"]);
console.log(output);

// 1.6
function computeSummationToN(n) {
    var sum = 0;
    for (var i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

var output = computeSummationToN(6);
console.log(output);

// 1.7
function convertScoreToGrade(score) {
    switch (true) {
        case (score >= 90 && score <= 100):
            return 'A';
        case (score >= 80 && score < 90):
            return 'B';
        case (score >= 70 && score < 80):
            return 'C';
        case (score >= 60 && score < 70):
            return 'D';
        case (score >= 0 && score < 60):
            return 'F';
        default:
            return 'INVALID SCORE';
    }
}

var output = convertScoreToGrade(91);
console.log(output);

// 1.8
function getLongestOfThreeWords(word1, word2, word3) {
    var longestWord = '';

    if (word1.length >= word2.length && word1.length >= word3.length) {
        longestWord = word1;
    } else if (word2.length >= word1.length && word2.length >= word3.length) {
        longestWord = word2;
    } else {
        longestWord = word3;
    }

    return longestWord;
}

var output = getLongestOfThreeWords("these", "three", "words")
console.log(output);

// 1.9
function multiply(num1, num2) {
    var result = 0;
    for (var i = 0; i < num2; i++) {
        result += num1;
    }
    return result;
}

var output = multiply(4, 7);
console.log(output);
