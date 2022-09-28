/*
*/

const wakeUp = () => 'Wake Up!';
const letsGetSomeBreakfast = () => `Let's get some breakfast!`;
const letsSleep = () => `Let's sleep!`

const doThings = (callback) => callback();

console.log(doThings(wakeUp));
console.log(doThings(letsGetSomeBreakfast));
console.log(doThings(letsSleep));
