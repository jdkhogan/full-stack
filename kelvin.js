// set temp in degrees Kelvin
const kelvin = 293;
// const kelvin = 0;

// conversion to C
let celsius = kelvin - 273;

// conversion to F
let fahrenheit = celsius * 1.8 + 32;

// round down
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

let newton = celsius * (33/100);
newton = Math.floor(newton);
console.log(`The temperature is ${newton} degrees Newton.`);