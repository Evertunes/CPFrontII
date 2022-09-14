let formularioRegistro = document.getElementById("registro");
let nomeR = document.getElementById("nomereg");
let sobrenomeR = document.getElementById("sobrenomereg");
let emailR = document.getElementById("emailreg");
let senhaR = document.getElementById("senhareg");
let senhaRConfirma = document.getElementById("senharegc");
let errormessage = document.getElementById("erro");
let textoerro = document.createTextNode("Não pode haver campos vazios!");
let inputs = document.querySelectorAll("input");
let botao = document.querySelector("button");
botao.disabled = true;

function checkInputs(inputs) {
  var filled = true;
  inputs.forEach((input) => {
    if (input.value === "") {
      filled = false;
    }
  });
  return filled;
};

inputs.forEach((input) => {
  input.addEventListener("keypress", () => {
    if (checkInputs(inputs)) {
      botao.disabled = false;
    } else {
      botao.disabled = true;
    }
  });
});

formularioRegistro.addEventListener("focusout", function() {
      if (checkInputs(inputs)) {
        botao.disabled = false;
      } else {
        botao.disabled = true;
        errormessage.appendChild(textoerro);
        event.target.style.background = "red";
      }
    });
formularioRegistro.addEventListener("keypress", () => {
    if(!checkInputs(inputs)){
        event.target.style.background = "";
        formularioRegistro.addEventListener("focusout", () => {
            event.target.style.background = "";
        })
    }
}
)
//email.addEventListener("focusin", stateHandlein());

// Ao colocar o foco do input o mesmo fica vermelho indicando erro quando vazio
/*formularioRegistro.addEventListener("focusout", (evento) => {
  evento.preventDefault();
  if (
    nomeR == "" ||
    sobrenomeR == "" ||
    emailR ||
    senhaR == "" ||
    senhaRConfirma == ""
  ) {
    evento.target.style.background = "red";
    desabilita();
  }
});

senhaRConfirma.addEventListener("focusout", () => {
  formularioRegistro.removeChild(errormessage);
});


nomeR.addEventListener("focusout", () => {
  if (nomeR.value == "") {
    errormessage.appendChild(textoerro);
    errormessage.style.color = "red";
  }
  else{
    evento.target.style.background = "";
  }
});

sobrenomeR.addEventListener("focusout", () => {
  if (sobrenomeR.value == "") {
    errormessage.appendChild(textoerro);
    errormessage.style.color = "red";
  }
  else{
    evento.target.style.background = "";
  }
});

emailR.addEventListener("focusout", () => {
  if (emailR.value == "") {
    errormessage.appendChild(textoerro);
    errormessage.style.color = "red";
  }
  else{
    evento.target.style.background = "";
  }
});

senhaR.addEventListener("focusout", () => {
  if (senhaR.value == "") {
    errormessage.appendChild(textoerro);
    errormessage.style.color = "red";
  }
  else{
    evento.target.style.background = "";
  }
});

senhaRConfirma.addEventListener("focusout", () => {
  if (senhaRConfirma.value == "") {
    errormessage.appendChild(textoerro);
    errormessage.style.color = "red";
  }
  else{
    formularioRegistro.removeChild(errormessage);
        evento.target.style.background = "";
  }
});

formularioRegistro.addEventListener("keypress", (evento) => {
  evento.target.style.background = "";
  botao.disabled = false;
});
*/

formularioRegistro.onsubmit = (evento) => {
  evento.preventDefault();
  errormessage.removeChild(textoerro);
  let normalizaNome = nomeR.value.trim();
  let normalizaSobrenome = sobrenomeR.value.trim();
  let normalizaEmail = emailR.value.trim();
  let normalizaSenha = senhaR.value.replace(/ /g, "");
  let normalizaSenhaRc = senhaRConfirma.value.replace(/ /g, "");
  console.log(
    `${normalizaNome}`,
    `${normalizaSobrenome}`,
    `${normalizaEmail}`,
    `${normalizaSenha}`,
    `${normalizaSenhaRc}`
  );
  setTimeout(() => {
    emailR.value = null;
    senhaR.value = null;
    senhaRConfirma.value = null;
    nomeR.value = null;
    sobrenomeR.value = null;
  }, 2.0 * 1000);
};
