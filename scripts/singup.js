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

formReg.onsubmit = () => {
  event.preventDefault();
  let normalizaEmailR = emailR.value.trim();
  let normalizaSenhaR = senhaR.value.replace(/ /g, "");
  let normalizaSenhaRC = senharC.value.replace(/ /g, "");
  console.log(
    `${normalizaEmailR}`,
    `${normalizaSenhaR}`,
    `${normalizaSenhaRC}`
  );

// registro do usuário
const bodyLogin = JSON.stringify({
  firstName: nomeR.value,
  lastName: sobrenomeR,
  email: emailR.value,
  password: senhaR.value
})
.then(async response => {

  if(response.status === 201){
    let body = await response.json();
    let token = body.jwt;

    sessionStorage.setItem("token", token)
  }

  if(response.status === 400){
    textoerro.appendChild(errofetch);
    textoerro.style.color = "red";
  }

  setTimeout(() => {
    emailR.value = null;
    senharC.value = null;
    senhaR.value = null;
    nomeR.value = null;
    sobrenomeR.value = null;
  }, 0.5 * 1000);
  botaoR.disabled = true;
})}
