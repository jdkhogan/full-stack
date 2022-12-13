const whaleSpeak = input => {
    const vowels = ['a', 'e', 'i', 'o', 'u']; // 2
    const resultArr = []; // 3

    for (let char of input) { // 4
        for (let vowel of vowels) { // 6
            // if (char === vowel) console.log(char); // 8
            if (char === vowel) {
                resultArr.push(char); // 9
                if (char === 'e' || char === 'u') {
                    resultArr.push(char); // 10 + 11
                }
            }
        }
    }

    // console.log(resultArr); // 9 & 12
    const resultStr = resultArr.join('').toUpperCase(); // 13
    // console.log(resultStr);
    return resultStr;
}

let input = "Any phrase you’d like"; // step 1
console.log( whaleSpeak(input) );

input = 'turpentine and turtles';
console.log( whaleSpeak(input) );