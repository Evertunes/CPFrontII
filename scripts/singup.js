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
  input.addEventListener("keypress", () => {
    if (checkInputs(inputs)) {
      botao.disabled = false;
    } else {
      botao.disabled = true;
    }
  });
});

formularioRegistro.addEventListener("focusout", function () {
  if (checkInputs(inputs)) {
    botao.disabled = false;
  } else {
    botao.disabled = true;
    errormessage.appendChild(textoerro);
    errormessage.style.color = "red";
    event.target.style.background = "pink";
  }
});
formularioRegistro.addEventListener("keypress", () => {
  if (!checkInputs(inputs)) {
    event.target.style.background = "";
    formularioRegistro.addEventListener("focusout", () => {
      event.target.style.background = "";
    });
  }
});

senhaRConfirma.addEventListener("focusout", () => {
  if (senhaR.value != senhaRConfirma.value) {
    errormessage.appendChild(textoConfere);
    errormessage.style.color = "red";
  } else {
    errormessage.removeChild(textoConfere);
  }
});

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
const registro = fetch(
  `${urlTodo}/users`,
  {
    method: "POST",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify({
      firstName: "Everton",
      lastName: "Alves",
      email: "alveseverton02@gmail.com",
      password: "12345689",
    }),
  }
    .then((response) => {
      response.json();
    })
    .then((dados) => {
      console.log(dados);
    })
    .catch((erro) => {
      console.log(erro);
    })
);
