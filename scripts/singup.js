let formularioRegistro = document.getElementById("registro");
let emailR = document.getElementById("emailreg");
let senhaR = document.getElementById("senhareg");
let senhaRConfirma = document.getElementById("senharegc");
let errormessage = document.getElementById("erro");
let textoerro = document.createTextNode("Não pode haver campos vazios!");
let botao = document.querySelector("botaoRegistro");
var inputs = document.querySelectorAll("input");

botao.disabled = true;

function checkInputs(inputs) {
  var filled = true;
  inputs.forEach(function (input) {
    if (input.value === "" && senhaR !== senhaRConfirma) {
      filled = false;
    }
  });
  return filled;
}

inputs.forEach(function (input) {
  input.addEventListener("focusin", () => {
    if (checkInputs(inputs)) {
      botao.disabled = false;
    } else {
      botao.disabled = true;
    }
  });
});

formularioRegistro.addEventListener("focusout", (evento) => {
  if (emailR.value == "" || senhaR.value == "") {
    evento.target.style.background = "red";
    errormessage.appendChild(textoerro);
  } else {
  }
});

formularioRegistro.addEventListener("keypress", (evento) => {
  evento.target.style.background = "";
});

formularioRegistro.onsubmit = (evento) => {
  formularioRegistro.removeChild(errormessage);
  let normalizaEmail = emailR.value.trim();
  let normalizaSenha = senhaR.value.replace(/ /g, "");
  let normalizaSenhaRc = senhaRConfirma.value.replace(/ /g, "");
  console.log(`${normalizaEmail}`, `${normalizaSenha}`, `${normalizaSenhaRc}`);
  setTimeout(() => {
    emailR.value = null;
    senhaR.value = null;
    senhaRConfirma.value = null;
  }, 0.5 * 1000);
};
