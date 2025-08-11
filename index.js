const passWordBox =document.getElementById("Password")
const length=12
const upperCase="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerCase="abcdefghijklmnopqrstuvwxyz"
const number="0123456789"
const symbol="!@#$%^&*()[]{}"
const allChar= upperCase + lowerCase + number + symbol;
function createPassword(){
    let passwordArray=[];
    passwordArray.push(upperCase[Math.floor(Math.random() * upperCase.length)]);
    passwordArray.push(lowerCase[Math.floor(Math.random() * lowerCase.length)]);
    passwordArray.push(number[Math.floor(Math.random() * number.length)]);
    passwordArray.push(symbol[Math.floor(Math.random() * symbol.length)]);
while ( passwordArray.length < length){

    passwordArray.push(allChar[Math.floor(Math.random() * allChar.length)]);

}
for (let i = passwordArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [passwordArray[i], passwordArray[j]] = [passwordArray[j], passwordArray[i]];
}
const password = passwordArray.join('');
passWordBox.value=password;
}
