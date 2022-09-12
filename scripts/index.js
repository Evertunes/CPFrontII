let formulario = document.getElementById("formulario");
let email = document.getElementById("inputEmail");
let senha = document.getElementById("inputPassword");
let errormessage = document.getElementById("erro");
let textoerro = document.createTextNode("Não pode haver campos vazios!");
let botao = document.getElementById("botao");

window.onload = () => {
  botao.disabled = true;
  function stateHandle() {
    if (email === null || senha === null) {
      botao.disabled = true; 
    } 
    else {
      botao.disabled = false;
    }
  };
  email.addEventListener("change", stateHandle());
  };

// Ao retirar o foco do input o mesmo fica vermelho indicando erro quando vazio
formulario.addEventListener("focusout", (evento) => {
  if (email || senha == null) {
    event.target.style.background = "pink";
  }
});
// ao colocar o foco no input o mesmo se normaliza esperando receber um valor
formulario.addEventListener("focusin", (evento) => {
  event.target.style.background = "";
});


formulario.onsubmit = (event) => {
  event.preventDefault();
  if (email || senha == null) {
    errormessage.appendChild(textoerro);
    event.target.style.color = "red";
  }
  // Por ser do tipo email, o campo não permite espaços entre a digitação apenas no começo e fim, por isso usamos o metodo "trim";
  let normalizaEmail = email.value.trim();
  //O campo senha por sua vez, permite espaços aleatórios entre os caracteres, por esse motivo usamos o "replace";
  let normalizaSenha = senha.value.replace(/ /g, "");
  console.log(`${normalizaEmail}`, `${normalizaSenha}`);
};