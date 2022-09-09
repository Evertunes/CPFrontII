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

//desabilita o botão no início 
document.getElementById("botao").disabled = true;
 //cria um event listener que escuta mudanças no input 
document.getElementById("input").addEventListener("input", function(event){ 
//busca conteúdo do input 
var conteudo = document.getElementById("input").value; 
//valida conteudo do input 
if (conteudo !== null && conteudo !== '') { 
//habilita o botão 
document.getElementById("botao").disabled = false; 
} 
else {
//desabilita o botão se o conteúdo do input ficar em branco 
document.getElementById("botao").disabled = true; } });

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
