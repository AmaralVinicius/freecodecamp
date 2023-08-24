const telephoneCheck = str => /^(1)?[\s\-]?(\(\d{3}\)|\d{3})[\s\-]?(\d{3})[\s\-]?(\d{4})$/.test(str);

console.log(telephoneCheck("1 555-555-5555")); // true
console.log(telephoneCheck("1-(555)-555-5555")); // true
console.log(telephoneCheck("555-5555")); // false
