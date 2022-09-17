let jim = 93;
let dela = 94;
let chinku = 97;
// approch 01
if (jim > dela && jim > chinku) {
    console.log('jim will Win this cake!');
} else if (dela > jim && dela > chinku) {
    console.log('dela Will Win This Cake');
}
else{
    console.log('ChinKu will win this Cake');
}
// approch 02
const winCake = Math.max(jim,dela,chinku);
console.log('He/She is Win, his/her marks is :',winCake);