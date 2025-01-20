const palindromes = function (string) {

    const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789';

    const s = string
    .toLowerCase()
    .split('')
    .filter((character) => alphanumerical.includes(character))
    .join('');

    const reversedString = s.split('').reverse().join('');

    return s === reversedString;
    
};

// Do not edit below this line
module.exports = palindromes;
