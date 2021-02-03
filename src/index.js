module.exports = function toReadable (number) {
    const numbers = {
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
        20: 'twenty',
        30: 'thirty',
        40: 'forty',
        50: 'fifty',
        60: 'sixty',
        70: 'seventy',
        80: 'eighty',
        90: 'ninety',
    }

    if (number === 0) return 'zero';
    if (number < 21 || number % 10 === 0 && number < 100) return numbers[number];
    if (number % 100 === 0) return `${numbers[number / 100]} hundred`;
    if (number % 10 === 0) return `${numbers[Math.floor(number / 100)]} hundred ${numbers[number % 100]}`;
    if (number > 20 && number < 100) return `${numbers[number - (number % 10)]} ${numbers[number % 10]}`;
    if ( number > 99) {
        const hundred = number % 100;
        return (`${numbers[Math.floor(number / 100)]} hundred ${hundred > 20 ? numbers[(hundred) - (number % 10)] : numbers[hundred]} ${hundred > 20 ? numbers[(number % 10)]: ''}`).trim()
    }
}
