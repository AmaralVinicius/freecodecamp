const caesarCipher = (str, shift, decode = false) => {
  let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let output = '';

  shift = decode ? Math.abs(shift) * -1 : Math.abs(shift);

  for (let i = 0; i < str.length; i++) {
    let letter = str.charAt(i);

    if (/[A-Z]/.test(letter)) {
      if ((alphabet.indexOf(letter) + shift) < 0) {
        output += alphabet.charAt((alphabet.indexOf(letter) + shift + alphabet.length));
      }
      else if ((alphabet.indexOf(letter) + shift) > alphabet.length - 1) {
        output += alphabet.charAt((alphabet.indexOf(letter) + shift - alphabet.length));
      }
      else {
        output += alphabet.charAt(alphabet.indexOf(letter) + shift);
      };
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
