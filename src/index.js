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
    // write your solution here
    arr=[];
for (let i=0; i<expr.length; i+=10) {
arr.push(expr.slice(i, (i+10)));
//console.log (expr.slice(i, (i+10)));
}

arr2 = [];
arr.map( (a) => a.replace(/10/g, ".").replace(/11/g, "-").replace(/00/g, "").replace(/\*/g, " ")).forEach( item => item == "          " ? arr2.push(" ") : arr2.push(MORSE_TABLE[item]));

var c = arr2.join('');
//console.log (c);
return c;

}

module.exports = {
    decode
}