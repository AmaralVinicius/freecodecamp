const caesarCipher = (str, shift, decode = false) => {
  let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let output = '';

  shift = decode ? Math.abs(shift) * -1 : Math.abs(shift);

  for (let i = 0; i < str.length; i++) {
    let letter = str.charAt(i);
    let index = alphabet.indexOf(letter)

    if (index !== -1) {
      output += alphabet.charAt((index + shift + alphabet.length) % alphabet.length);
    }
    else {
      output += letter;
    };
  };

  return output;
};

const rot13 = (str) => caesarCipher(str, 13, true);

console.log(rot13("SERR PBQR PNZC")); // FREE CODE CAMP
console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.")); // THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.
console.log(caesarCipher('HELLO WORLD!', 15)); // WTAAD LDGAS!
