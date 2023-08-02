const palindrome = (str) => {

  str = str.toLowerCase().replace(/[$_!,:#|-\s.()]/g, "");

  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) !== str.charAt((str.length - 1 ) - i)) {
      return false;
    }

    if (i >= Math.floor(str.length / 2)) {
      return true;
    }
  }

  return true;
};

console.log(palindrome('Sit on a potato pan, Otis!')); // true
console.log(palindrome('Hello World!')); // false
