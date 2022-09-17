// 2 vabe ( Swap = OdolBodol ) kora jau !
// swap WRONG APPROCH ***

/*
let first = 5;
let secoend = 7;
first = secoend;
secoend = first;
console.log(first,secoend)
*/

// swap approach 01 , use Temporary friend 
/*
let first = 5;
let secoend = 7;
console.log(first, secoend);
const temp = first;
first = secoend;
secoend = temp;
console.log(first, secoend);
*/


// swap approach 02 ---------- Desatructuring!

let first = 5;
let secoend = 7;
console.log(first, secoend);

[first, secoend] = [secoend, first]
console.log(first, secoend);