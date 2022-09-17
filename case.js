// practice:01
const userName = 'alom mia'
const userInput = 'Alom Mia'
if (userName.toLowerCase === userInput.toLowerCase) {
    console.log('valid user');
}
else{
    console.log('InValid User');
}

// practice:02
const YouName= 'md. abu sayed';
const OwnerInput =" MD. ABU SAYED";
if (YouName.toUpperCase === OwnerInput.toUpperCase ) {
    console.log('WelCome to Our Community');
}
else{
    console.log('try again : your are not valid Customer');
}
// practice:03
let passWord = 'key SensiTive';
let chechPass = 'KeY SeNSiTive';
if (passWord.toLocaleLowerCase === chechPass.toLocaleLowerCase) {
    console.log(passWord);
    console.log(chechPass);
}
else {
    console.log('Try Again Letter');
}