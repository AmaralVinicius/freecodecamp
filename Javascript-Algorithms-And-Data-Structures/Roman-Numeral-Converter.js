const convertToRoman = (num) => {

  const romanLookup = {'M':	1000, 'CM':	900, 'D':	500, 'CD':	400, 'C':	100, 'XC':	90, 'L':	50, 'XL':	40, 'X':	10, 'IX':	9, 'V':	5, 'IV':	4, 'I':	1};

  return Object.keys(romanLookup).reduce((romainized, romanKey) => {
    while (num >= romanLookup[romanKey]) {
      num -= romanLookup[romanKey];
      romainized += romanKey;
    };

    return romainized;
  }, '');
};

console.log(convertToRoman(83)); // LXXXIII
console.log(convertToRoman(97)); // XCVII
