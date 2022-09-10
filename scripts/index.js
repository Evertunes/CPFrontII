let formulario = document.getElementById("formulario");
let email = document.getElementById("inputEmail");
let senha = document.getElementById("inputPassword");
let errormessage = document.getElementById("erro");
let textoerro = document.createTextNode("Não pode haver campos vazios!");


formulario.addEventListener('focusin', (evento) => {
  if(email || senha == null){
  event.target.style.background = 'pink';
}
});

formulario.addEventListener('focusout', (evento) => {
  event.target.style.background = '';
});

botao.disabled = true;
email.addEventListener("change", stateHandle);
function stateHandle() {
  if (document.querySelector(".inputMail").value === "") {
    botao.disabled = true; 
  } else {
    botao.disabled = false;
  }
};

formulario.onsubmit = (event) => {
  event.preventDefault();
  if(email || senha == null){
    errormessage.appendChild(textoerro);
  }
  // Por ser do tipo email, o campo não permite espaços entre a digitação apenas no começo e fim, por isso usamos o metodo "trim";
  let normalizaEmail = email.value.trim();
  //O campo senha por sua vez, permite espaços aleatórios entre os caracteres, por esse motivo usamos o "replace";
  let normalizaSenha = senha.value.replace(/ /g, "");
  console.log(`${normalizaEmail}`, `${normalizaSenha}`);
};
