let formReg = document.forms["registro"];
let botaoR = formReg["criar"];
let nomeR = formReg["nomereg"];
let sobrenomeR = formReg["sobrenomereg"];
let emailR = formReg["emailreg"];
let senhaR = formReg["senhareg"];
let senharC = formReg["senharegc"];
let textoERR = document.getElementById("erro");
let conteudoERR = document.createTextNode("Confirmação de senha não confere!");
let conteudoERR2 = document.createTextNode("Não pode haver campos vazios!");
let emailRok = false;
let senhaRok = false;
const urlTodoR = "https://ctd-fe2-todo-v2.herokuapp.com/v1";

botaoR.disabled = true;

function validateEmailR(emailR) {
  var reR = /\S+@\S+\.\S+/;
  return reR.test(emailR);
}

function validaBotaoR() {
  if (emailRok && senhaRok) {
    botaoR.disabled = false;
  } else {
    botaoR.disabled = true;
  }
}

nomeR.onkeyup = (evento) => {
  if (nomeR.value !== "") {
    textoERR.innerText = "";
    evento.target.style.background = "";
    emailRok = true;
  } else {
    evento.target.style.background = "pink";
    textoERR.appendChild(conteudoERR2);
    textoERR.style.color = "red";
    emailRok = false;
  }
  validaBotaoR();
};

sobrenomeR.onkeyup = (evento) => {
  if (sobrenomeR.value !== "") {
    textoERR.innerText = "";
    evento.target.style.background = "";
    emailRok = true;
  } else {
    evento.target.style.background = "pink";
    textoERR.appendChild(conteudoERR2);
    textoERR.style.color = "red";
    emailRok = false;
  }
  validaBotaoR();
};

emailR.onkeyup = (evento) => {
  emailR.value = emailR.value.replace(/ /g, "");
  if (validateEmailR(emailR.value)) {
    textoERR.innerText = "";
    evento.target.style.background = "";
    emailRok = true;
  } else {
    evento.target.style.background = "pink";
    textoERR.appendChild(conteudoERR2);
    textoERR.style.color = "red";
    emailRok = false;
  }
  validaBotaoR();
};

senhaR.onkeyup = (evento) => {
  senhaR.value = senhaR.value.replace(/ /g, "");
  if (senhaR.value !== "") {
    textoERR.innerText = "";
    evento.target.style.background = "";
    senhaRok = true;
  } else {
    evento.target.style.background = "pink";
    textoERR.appendChild(conteudoERR2);
    textoERR.style.color = "red";
    senhaRok = false;
  }
  validaBotaoR();
};

senharC.onkeyup = (evento) => {
  senharC.value = senharC.value.replace(/ /g, "");
  if (senharC.value !== "") {
    textoERR.innerText = "";
    evento.target.style.background = "";
    senhaRok = true;
  } 
  
  else if(senhaR.value !== senharC.value){

    evento.target.style.background = "pink";
    textoERR.appendChild(conteudoERR);
    textoERR.style.color = "red";
    senhaRok = false;

  }

  else {
    evento.target.style.background = "pink";
    textoERR.appendChild(conteudoERR2);
    textoERR.style.color = "red";
    senhaRok = false;
  }
  validaBotaoR();
   
};

formReg.onsubmit = (event) => {
  event.preventDefault();
  let normalizaEmailR = emailR.value.trim();
  let normalizaSenhaR = senhaR.value.replace(/ /g, "");
  let normalizaSenhaRC = senharC.value.replace(/ /g, "");
  console.log(
    `${normalizaEmailR}`,
    `${normalizaSenhaR}`,
    `${normalizaSenhaRC}`
  );
  }
// registro do usuário

const test = 0;
// login do usuário

function registrar(event) {
  event.preventDefault();
  let nomeR = document.getElementById("nomereg").value;
  let sobrenomeR = document.getElementById("sobrenomereg").value;
  let emailR = document.getElementById("emailreg").value;
  let passwordR = document.getElementById("senhareg").value;

  const dados = {
    nomeR,
    sobrenomeR,
    emailR,
    passwordR,
  };

  const teste = 0;

  fetch(`${urlTodoR}/users`, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dados),
  })
    .then(function (response) {
      if ((response.status = 400)) {
       return alert("Usuário já se encontra registrado!");
      } else if (response.status = 404) {
       return alert("Alguns dados solicitados estão incorretos!");
      }
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      localStorage.setItem("token", data.jwt);
      window.location.href = "tarefas.html";
    })
    .catch(function (err) {
      const teste = err;
      console.log(teste);
    });
}

// const bodyLogin = JSON.stringify({
//   firstName: nomeR.value,
//   lastName: sobrenomeR,
//   email: emailR.value,
//   password: senhaR.value
// })
// .then(async response => {

//   if(response.status === 201){
//     let body = await response.json();
//     let token = body.jwt;

//     sessionStorage.setItem("token", token)
//   }

//   if(response.status === 400){
//     textoerro.appendChild(errofetch);
//     textoerro.style.color = "red";
//   }

//   setTimeout(() => {
//     emailR.value = null;
//     senharC.value = null;
//     senhaR.value = null;
//     nomeR.value = null;
//     sobrenomeR.value = null;
//   }, 0.5 * 1000);
//   botaoR.disabled = true;
// })