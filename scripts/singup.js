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

botaoR.disabled = true;

nomeR.onblur = () => {
  if(nomeR.value === ""){
    nomeR.style.background = "pink";
  }
};

sobrenomeR.onblur = () => {
  if(sobrenomeR.value === ""){
    sobrenomeR.style.background = "pink";
  }
};

emailR.onblur = () => {
  if(emailR.value === ""){
    emailR.style.background = "pink";
  }
};

senhaR.onblur = () => {
  if(senhaR.value === ""){
    senhaR.style.background = "pink";
  }
};

senharC.onblur = () => {
  if(senharC.value === ""){
    senharC.style.background = "pink";
  }
};

senharC.onblur = () =>{
  if(senhaR.value === senharC.value){
    botaoR.disabled = false;
  }
  else{
    textoERR.appendChild(conteudoERR);
    textoERR.style.color = "red";
  }
};

senharC.onblur = () =>{
  if(nomeR.value, sobrenomeR.value, emailR.value, senhaR.value, senharC.value !== ""){
    botaoR.disabled = false;
  }
};


formReg.onsubmit = () => {
  event.preventDefault();
  let normalizaEmailR = emailR.value.trim();
  let normalizaSenhaR = senhaR.value.replace(/ /g, "");
  let normalizaSenhaRC = senharC.value.replace(/ /g, "");
  console.log(`${normalizaEmailR}`, `${normalizaSenhaR}`, `${normalizaSenhaRC}`);
  setTimeout(() => {
    emailR.value = null;
    senharC.value = null;
    senhaR.value = null;
    nomeR.value = null;
    sobrenomeR.value = null;
  }, 0.5 * 1000);
};