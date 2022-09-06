const email = document.querySelector("input.inputEmail");
const senha = document.querySelector("input.inputPassword");
const principal = document.querySelector("body");
const formulario = document.getElementById("forms");

function removaTodoEspaco() {

document.querySelector('.inputMail').innerHTML = email;

let str = email.replace(/\s+/g, '');
console.log(str);
document.querySelector('.inputMail').textContent = str; 
//document.querySelector('.inputMail').innerHTML = str;
};

function RemoveEspaco(){

    

};

