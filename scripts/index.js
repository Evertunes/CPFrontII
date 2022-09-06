const email = document.querySelector("input.inputMail");
const emailvalor = email.value;
const senha = document.querySelector("input.inputPassword");
const principal = document.querySelector("body");
const formulario = document.getElementById("forms");

function removaTodoEspaco() {

document.querySelector('.email').innerHTML = emailvalor;
let str = emailvalor.replace(/\s+/g, '');
console.log(str);
document.querySelector('emailvalor').textContent = str; 
//document.querySelector('.inputMail').innerHTML = str;
};

function RemoveEspaco(){

    

};

