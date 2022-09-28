let formularioTarefa = document.forms["formtarefa"];
let adicionar = formularioTarefa["add"];
let caracteres = document.getElementById("nova-Tarefa");
adicionar.disabled = true;

window.onload = () => {
  infoUsuario();
  infoTarefas();
};

function finalizarSessao() {
  sessionStorage.clear("token");
  sessionStorage.clear("dadosUsuario");
  sessionStorage.clear("dadosTarefas");
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
      const listaTarefasPendentes = data.map((tarefa) =>
        criaListaTarefasPendentes(tarefa)
      );
      const listaTarefasConcluidas = data.map((tarefa) =>
        criaListaTarefasConcluidas(tarefa)
      );
      document.getElementById("lista-tarefas").innerHTML =
        listaTarefasPendentes.join("");
      document.getElementById("tarefas-terminadas").innerHTML =
        listaTarefasConcluidas.join("");
    })
    .catch(function (erro) {
      console.log(erro);
    });
}

function criaListaTarefasPendentes(tarefa) {
  if (tarefa.completed === false) {
    return `
    <li class="tarefa">
    <div class="not-done" id="${tarefa.id}"></div>
    <div class="descricao">
        <p class="nome">${tarefa.description}</p>
        <p class="timestamp"><i class="far fa-calendar-alt"></i> ${tarefa.createdAt}</p>
    </div>
</li>
`;
  }
}

function criaListaTarefasConcluidas(tarefa) {
  if (tarefa.completed === true) {
    return `
    <li class="tarefa">
    <div class="done"></div>
    <div class="descricao">
    <p class="nome">${tarefa.description}</p>
    <div>
        <button><i id="${tarefa.id}" class="fas fa-undo-alt change"></i></button>
        <button><i id="${tarefa.id}" class="far fa-trash-alt"></i></button>
    </div>
    </div>
</li>
`;
  }
}

function validar(x, y) {
  if (y.length == x.minLength) {
    var next = x.tabIndex;
    if (next < document.getElementById("myForm").length) {
      adicionar.disabled = false;
    }
  }
}

function criarTarefa(event) {
  event.preventDefault();
  let nomeTarefa = document.getElementById("nova-Tarefa").value;
  caracteres.value = caracteres.value.trim();
  const urlTodo = "https://ctd-fe2-todo-v2.herokuapp.com/v1";
  fetch(`${urlTodo}/tasks`, {
    method: "post",
    headers: {
      Authorization: `${sessionStorage.getItem("token")}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      description: nomeTarefa,
      completed: false,
    }),
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      infoTarefas();
    })
    .catch(function (erro) {
      console.log(erro);
    });
}
