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
let errofetch2 = document.createTextNode("Erro de Cadastro!");
let emailRok = false;
let senhaRok = false;
const urlTodoR = "https://ctd-fe2-todo-v2.herokuapp.com/v1/";

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
  
  else if(senhaR.value === senharC.value){

    textoERR.innerText = "";
    evento.target.style.background = "";
    senhaRok = true;

  }

  else {
    evento.target.style.background = "pink";
    textoERR.appendChild(conteudoERR);
    textoERR.style.color = "red";
    senhaRok = false;
  }
  validaBotaoR();
   
};
formReg.addEventListener ("submit", function (event) {
  event.preventDefault();
  let nomeR = document.getElementById("nomereg").value;
  let sobrenomeR = document.getElementById("sobrenomereg").value;
  let emailR = document.getElementById("emailreg").value;
  let senhaR = document.getElementById("senhareg").value;
  
  const bodyLogin = JSON.stringify({
  firstName: nomeR,
  lastName: sobrenomeR,
  email: emailR,
  password: senhaR})
  console.log("body", bodyLogin)
  fetch(`${urlTodoR}users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: bodyLogin,
})
.then(async response => {
  console.log("response", response);
  // https://ctd-fe2-todo-v2.herokuapp.com/v1/users
  // https://ctd-fe2-todo-v2.herokuapp.com/v1/users
  if(response.status === 201){
    let body = await response.json();
    let token = body.jwt;

    sessionStorage.setItem("token", token)
  }

  if(response.status === 400){
    textoERR.appendChild(errofetch2);
    textoERR.style.color = "red";
  }

  else{
    textoERR.innerText = "";
  }
  
  setTimeout(() => {
    nomeR.value = null;
    sobrenomeR.value = null;
    emailR.value = null;
    senhaR.value = null;
    senharC.value = null  
    botaoR.disabled = true;
  }, 0.5 * 1000)
})},

)