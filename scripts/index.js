let formulario = document.getElementById("formulario");
let email = document.getElementById("inputEmail");
let senha = document.getElementById("inputPassword");
let errormessage = document.getElementById("erro");
let textoerro = document.createTextNode("Não pode haver campos vazios!");
let botao = document.querySelector(".sub");

function desabilita() {
  if (email || senha == "") {
    botao.disabled = true;
  }
  else {
    botao.disabled = false;
  }
};

//email.addEventListener("focusin", stateHandlein());


// Ao colocar o foco do input o mesmo fica vermelho indicando erro quando vazio

formulario.addEventListener("focusout", (evento) => {
  //evento.preventDefault();
  if (email.value == "" || senha.value == "") {
    evento.target.style.background = "red";
    evento.target.style.color = "red";
    errormessage.appendChild(textoerro);
    desabilita();
  }
  else {
    evento.target.style.background = "";
    botao.disabled = false;
  }
});

formulario.addEventListener("keypress", (evento) => {
  //evento.preventDefault();
    evento.target.style.background = "";
    botao.disabled = false;
  }
);


formulario.onsubmit = (evento) => {
  
    formulario.removeChild(errormessage);
    // Por ser do tipo email, o campo não permite espaços entre a digitação apenas no começo e fim, por isso usamos o metodo "trim";
  let normalizaEmail = email.value.trim();
  //O campo senha por sua vez, permite espaços aleatórios entre os caracteres, por esse motivo usamos o "replace";
  let normalizaSenha = senha.value.replace(/ /g, "");
  console.log(`${normalizaEmail}`, `${normalizaSenha}`);
    setTimeout(() => {
      email.value = null;
      senha.value = null;
    }, 0.5 * 1000);
  
  
}
