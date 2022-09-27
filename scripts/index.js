let formulario = document.getElementById("formulario");
let email = document.getElementById("inputEmail");
let senha = document.getElementById("inputPassword");
let errormessage = document.getElementById("erro");
let textoerro = document.createTextNode("Existe(m) campo(s) inválido(s)!");
let errofetch = document.createTextNode("Erro de login!");
let botao = document.querySelector(".sub");
const urlTodo = "https://ctd-fe2-todo-v2.herokuapp.com/v1";
let tipoHeader = { "Content-type": "application/json; charset=UTF-8" };
let emailOk = false;
let senhaOk = false;
botao.disabled = true;

window.onload = () => {
  if (sessionStorage.getItem("token") !== null) {
    window.location.href = "tarefas.html";
  }
};

function validateEmail(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}

function validaBotao() {
  if (emailOk && senhaOk) {
    botao.disabled = false;
  } else {
    botao.disabled = true;
  }
}

email.onkeyup = (evento) => {
  email.value = email.value.replace(/ /g, "");
  if (validateEmail(email.value)) {
    errormessage.innerText = "";
    evento.target.style.background = "";
    emailOk = true;
  } else {
    evento.target.style.background = "pink";
    errormessage.appendChild(textoerro);
    errormessage.style.color = "red";
    emailOk = false;
  }
  validaBotao();
};

senha.onkeyup = (evento) => {
  senha.value = senha.value.replace(/ /g, "");
  if (senha.value !== "") {
    errormessage.innerText = "";
    evento.target.style.background = "";
    senhaOk = true;
  } else {
    evento.target.style.background = "pink";
    errormessage.appendChild(textoerro);
    errormessage.style.color = "red";
    senhaOk = false;
  }
  validaBotao();
};

// login do usuário

function login(event) {
  event.preventDefault();

  let email = document.getElementById("inputEmail").value;
  let password = document.getElementById("inputPassword").value;

  const dados = {
    email,
    password,
  };

  fetch(`${urlTodo}/users/login`, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dados),
  })
    .then(function (response) {
      if (response.status === 400) {
        return alert("Senha Incorreta!");
      } else if (response.status === 404) {
        return alert("Usuário não encontrado!");
      }
      return response.json();
    })
    .then(function (data) {
      sessionStorage.setItem("token", data.jwt);
      window.location.href = "tarefas.html";
    })
    .catch(function (erro) {
      console.log(erro);
    });
}
