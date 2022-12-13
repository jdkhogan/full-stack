let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

// 1 + 2
// console.log(secretMessage.length);
secretMessage.pop()
// console.log(secretMessage.length);

// 3
secretMessage.push('to', 'Program');
// console.log(secretMessage.length);

// 4
secretMessage[secretMessage.indexOf('easily')] = 'right';
// console.log(secretMessage);

// 5
secretMessage.shift();

// 6
secretMessage.unshift('Programming');
// console.log(secretMessage);

// 7
secretMessage.splice(secretMessage.indexOf('get'), 5, 'know,');
// console.log(secretMessage);

// 8 
console.log(secretMessage.join(' '));