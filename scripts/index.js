const email = document.getElementById("inputEmail");
const senha = document.querySelector("input.inputPassword");
const formulario = document.getElementById("forms");

function removaTodoEspaco() {
let digitado = document.getElementById("inputEmail").value;
console.log(digitado);
//document.querySelector('emailvalor').textContent = str; 
//document.querySelector('.inputMail').innerHTML = str;
};

function RemoveEspaco(){
};

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();
    removaTodoEspaco();
    let text1 = digitado;
    let text2 = text1.split(" ").join("");
    console.log(text2); 
    //document.querySelector('.outputString').textContent = text2; 


});
