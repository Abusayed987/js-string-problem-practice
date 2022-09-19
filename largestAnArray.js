// practice :01 largest an array
/*
function maxInArray(numbers) {
     let largest = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        const index = i;
        const elements = numbers[index];
        // console.log(elements);
        if (elements>largest) {
            largest = elements;  
        }    
    }
    return largest;
}

const height = [167, 190, 145, 136, 162]
const tallest = maxInArray(height);
console.log(tallest);

// practice :02 largest an array
function maxInArray2(numbers) {
    let largest2 = [0];
    for (let i = 0; i < numbers.length; i++) {
        const index =i;
        const elements =numbers[index];
        console.log(elements);
        if (elements>largest2) {
            largest2 = elements;
        }
    }
    return largest2

}
const height2 = [142, 251, 56, 45, 15, 75, 356, 121];
const tallest2 = maxInArray2(height2)
console.log('tallest person is',tallest2);

// practice :03 largest an array
function maxInArray3(numbers) {
    let largest3 = [0];
    for (let i = 0; i < numbers.length; i++) {
        const index = i;
        const elements = numbers[index];
        if (elements > largest3) {
            largest3 = elements;// largest return korbe tai largest k lagbe
        }
    }
    return largest3;
}
const height3 = [12, 454, 145, 458, 45, 65, 425, 782, 361, 94, 697, 698];
const tallest3 = maxInArray3(height3);
console.log('the tallest person is: ', tallest3);
// practice :04 largest an array
function maxInArray4(numbers) {
    let largest4= [0];
    for (let i = 0; i < numbers.length; i++) {
        const index= i;
        const elements = numbers[index];
        console.log(elements);
        if (elements>largest4) {
            largest4=elements;     
        }
        
    }
    return largest4
}
const height4 = [142, 251, 56, 45, 15, 75, 356, 121];
const tallest4 = maxInArray4(height4);
console.log('the tallest person is :', tallest4);

// practice :05 largest an array
function maxInArray5(numbers) {
    let largest5 = [0];
    for (let i = 0; i < numbers.length; i++) {
        const index = i;
        const elements = numbers[index];
        console.log(elements);
        if (elements > largest5) {
            largest5 = elements
        }

    }
    return largest5
}
const height5 = [1142, 1251, 516, 145, 115, 751, 3516, 1211];
const tallest5 = maxInArray5(height5);
console.log(tallest5, 'is the tallest person !');
*/
// practice :06 largest an array
function maxInArray6(numbers) {
    let largest6 = [0];
    for (let i = 0; i < numbers.length; i++) {
        const index = i;
        const elements = numbers[index];
        console.log(elements);
        if (elements > largest6) {
            largest6 = elements;
        }
    }
    return largest6
}
const height6 = [12, 23, 34, 45, 566, 778, 34, 56, 787, 98, 098,]
const tallest6 = maxInArray6(height6)
console.log(tallest6, 'is Winer');
// practice :07 largest an array
function maxInArray7(numbers) {
    let big = [0];
    for (let i = 0; i < numbers.length; i++) {
        const index = i;
        const elements = numbers[index];
        console.log(elements);
        if (elements > big) {
            big = elements
        }
    }
    return big;
}
const height7 = [12, 23, 34, 45, 566, 778, 34, 56, 787, 98, 098,];
const bigger = maxInArray7(height7);
console.log(bigger,'is the Bigger Person');
