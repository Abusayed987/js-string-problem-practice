// reverse string with carecter
// practise :01
function reverseString(text) {
    let reverse = '';
    for (let i = text.length - 1; i >= 0; i--) {
        const element = text[i];
        reverse = reverse + element
        console.log(reverse);
    }
    return reverse
}
let myString = 'i will try to Solve this'; // arrayer moode dio na abr
const reversed = reverseString(myString);
console.log(reversed);
// practise :02
// practise :03
// practise :04
// practise :05