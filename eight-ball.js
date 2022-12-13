let userName = 'Lisa Simpson';

console.log(userName ? `Hello, ${userName}!` : 'Hello');

let userQ = 'Will humanity solve global warming?';

let output = userName ? `${userName}, y` : 'Y';
output += `ou asked "${userQ}"`;
console.log(output);

let randomNumber = Math.floor(Math.random() * 8);
let eightball = [
    'It is certain',
    'It is decidedly so',
    'Reply hazy try again',
    'Cannot predict now',
    'Do not count on it',
    'My sources say no',
    'Outlook not so good',
    'Signs point to yes'
];

console.log(eightball[randomNumber]);