const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};




function decode(expr) {
    let result = '';

    for (let i = 0; i < expr.length; i+=10) {

        const substring = expr.slice(i, i + 10);
        let char = '';
        if (substring === '**********') {
            result += ' ';
        } else {
            for (let j = 0; j < substring.length; j+=2) {
                const subchar = substring.slice(-j - 2, substring.length - j);
                char += subchar === '11' ? '-' : subchar === '10' ? '.' : '';
            }

            char = char.split('').reverse().join('');
            result += MORSE_TABLE[char];
        }
    }

    return result;
}

module.exports = {
    decode
}