let formulario = document.getElementById("formulario");
let email = document.getElementById("inputEmail");
let senha = document.getElementById("inputPassword");
let errormessage = document.getElementById("erro");
let textoerro = document.createTextNode("Existe(m) campo(s) inválido(s)!");
let errofetch = document.createTextNode("Erro de login!");
let botao = document.querySelector(".sub");
let urlTodo = "https://ctd-fe2-todo-v2.herokuapp.com/v1/";
const header = { "Content-type": "application/json; charset=UTF-8" };
let emailOk = false;
let senhaOk = false;
botao.disabled = true;

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

formulario.onsubmit = () => {
  formulario.removeChild(errormessage);

  // login do usuário
  const bodyLogin = JSON.stringify({
    email: email.value,
    password: senhaR.value,
  }).then(async (response) => {
    if (response.status === 201) {
      let body = await response.json();
      let token = body.jwt;

      sessionStorage.setItem("token", token);
    }

    if (response.status === 400) {
      function myFunction() {
        var x = document.getElementById("erro");
        x.innerHTML = "Login Failed, try again!";
        textoERR.style.color = "red";
      }
      myFunction();
    }
  });
};

setTimeout(() => {
  email.value = null;
  senha.value = null;
}, 0.5 * 1000);
