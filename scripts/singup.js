let formularioRegistro = document.getElementById("registro");
let nomeR = document.getElementById("nomereg");
let sobrenomeR = document.getElementById("sobrenomereg");
let emailR = document.getElementById("emailreg");
let senhaR = document.getElementById("senhareg");
let senhaRConfirma = document.getElementById("senharegc");
let errormessage = document.getElementById("erro");
let textoerro = document.createTextNode("Não pode haver campos vazios!");
let textoConfere = document.createTextNode(
  "A confirmação de senha não confere!"
);
let inputs = document.querySelectorAll("input");
let botao = document.querySelector("button");
let urlTodo = "https://ctd-todo-api.herokuapp.com/v1";
botao.disabled = true;

function checkInputs(inputs) {
  var filled = true;
  inputs.forEach((input) => {
    if (input.value === "") {
      filled = false;
    }
  });
  return filled;
}

inputs.forEach((input) => {
  input.onkeypress = () => {
    if (checkInputs(inputs)) {
      botao.disabled = false;
    } else {
      botao.disabled = true;
    }
  };
  formularioRegistro.onblur = () => {
    if (checkInputs(inputs)) {
      botao.disabled = false;
    } else {
      botao.disabled = true;
      errormessage.appendChild(textoerro);
      errormessage.style.color = "red";
      event.target.style.background = "pink";
    }
  };
  formularioRegistro.onkeypress = () => {
    if (!checkInputs(inputs)) {
      event.target.style.background = "";
      formularioRegistro.onblur = () => {
        event.target.style.background = "";
      };
    }
  };

  senhaRConfirma.onblur = () => {
    if (senhaR.value != senhaRConfirma.value) {
      if (errormessage == true) {
        errormessage.appendChild(textoConfere);
        errormessage.style.color = "red";
      }
    } else {
      if (checkInputs(inputs) == false) {
        if (errormessage == true) {
          errormessage.removeChild(textoConfere);
        }
      }
    }
  };

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

  //registrar usuário
  formularioRegistro.onsubmit = (evento) => {
    evento.preventDefault();
    fetch(`${urlTodo}/users/getME`, {
      method: "GET",
      headers: headerGetMe,
    }).then(async (response) => {
      if (response.status === 200) {
        let body = await response.json();

        let nomeCompleto = `${body.firstName} ${body.lastName}`;
        sessionStorage.setItem("nomeCompleto", nomeCompleto);
      }
    });
}})