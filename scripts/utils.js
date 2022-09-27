let formularioTarefa = document.forms["formtarefa"];
let adicionar = formularioTarefa["add"];
let caracteres = formularioTarefa["novaTarefa"].minLength = "5";
//adicionar.disabled = true;

window.onload = () => {
  infoUsuario();
  infoTarefas();
};

function finalizarSessao() {
  sessionStorage.clear("token");
  window.location.href = "index.html";
}

function infoUsuario() {
  const urlTodo = "https://ctd-fe2-todo-v2.herokuapp.com/v1";
  fetch(`${urlTodo}/users/getMe`, {
    method: "get",
    headers: {
      Authorization: `${sessionStorage.getItem("token")}`,
    },
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      sessionStorage.setItem("dadosUsuario", JSON.stringify(data));
      const usuario = JSON.parse(sessionStorage.getItem("dadosUsuario"));
      document.getElementById(
        "nome-usuario"
      ).textContent = `${usuario.firstName} ${usuario.lastName}`;
    })
    .catch(function (erro) {
      console.log(erro);
    });
}

function infoTarefas() {
  const urlTodo = "https://ctd-fe2-todo-v2.herokuapp.com/v1";
  fetch(`${urlTodo}/tasks`, {
    method: "get",
    headers: {
      Authorization: `${sessionStorage.getItem("token")}`,
    },
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      sessionStorage.setItem("dadosTarefas", JSON.stringify(data));
      const tarefas = JSON.parse(sessionStorage.getItem("dadosTarefas"));
      console.log(tarefas);
    })
    .catch(function (erro) {
      console.log(erro);
    });
}
