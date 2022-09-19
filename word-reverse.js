// practise :01
function reverseWord(str) {
    let reWord = str.split(' ');
    const result = [];
    // console.log(reWord);
    for (let i = str.length-1 ; i >= 0; i--) {
        const element = reWord;
        result.push(element)

    }
    const reversed = result.join(' ');
    return reversed
}
const myString = 'i am a good boy';
const result = reverseWord(myString);
console.log(result);

// practise :02
// practise :03
// practise :04
// practise :05