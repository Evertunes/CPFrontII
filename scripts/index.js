const email = document.getElementById("inputEmail").value;
const senha = document.querySelector("input.inputPassword");
const formulario = document.forms["forms"];


function removaTodoEspaco() {
//document.querySelector('.inputMail').innerHTML = email;
var str = email.replace(/\s/g, '');
//document.querySelector('.inputMail').innerHTML = str;
console.log("str");
};

function RemoveEspaco(){
};

formulario.addEventListener("submit", (evento) => {
evento.preventDefault();
removaTodoEspaco();
console.log("Teste");
});
