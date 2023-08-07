const palindrome = (str) => {

  str = str.replace(/[^a-zA-Z0-9]/g,'').toLowerCase();

  return str.split('').reverse().join('') === str ? true : false;
};

console.log(palindrome('Sit on a potato pan, Otis!')); // true
console.log(palindrome('Hello World!')); // false
