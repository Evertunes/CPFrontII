let formulario = document.getElementById("formulario");
let email = document.getElementById("inputEmail");
let senha = document.getElementById("inputPassword");
let errormessage = document.getElementById("erro");
let textoerro = document.createTextNode("Não pode haver campos vazios!");
let botao = document.querySelector(".sub");
let urlTodo = "https://ctd-todo-api.herokuapp.com/v1";

botao.disabled = true;

function desabilita() {
  if (email || senha == "") {
    botao.disabled = true;
  } else {
    botao.disabled = false;
  }
}

// Ao retirar o foco do input o mesmo fica vermelho indicando erro quando vazio
// formulario.addEventListener("focusout", (evento) => {
//   //evento.preventDefault();
//   if (email.value == "" || senha.value == "") {
//     evento.target.style.background = "pink";
//     desabilita();
//   }
//   else {
//   }
// });
function validateEmail(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}

email.addEventListener("keypress", (evento) => {
  if(email.value == ""){
    errormessage.appendChild(textoerro);
    errormessage.style.color = "red";
  }
  else{
    evento.target.style.background = "";
  }
});

senha.addEventListener("keypress", (evento) => {
  if(senha.value == ""){
    errormessage.appendChild(textoerro);
    errormessage.style.color = "red";
  }
  else{
    evento.target.style.background = "";
  }
});

email.addEventListener("focusout", (evento) => {
  if(email.value !== "" && validateEmail(email.value)){
    errormessage.removeChild(textoerro);
  }
  else{
    evento.target.style.background = "pink";
    errormessage.appendChild(textoerro);
    errormessage.style.color = "red";
  }
});

senha.addEventListener("focusout", (evento) => {
  if(senha.value !== ""){
    errormessage.removeChild(textoerro);
  }
  else{
    evento.target.style.background = "pink";
    errormessage.appendChild(textoerro);
    errormessage.style.color = "red";
  }
});


formulario.addEventListener("keypress", (evento) => {
  //evento.preventDefault();
    //evento.target.style.background = "";
    botao.disabled = false;
  }
);

formulario.onsubmit = () => {
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
};

// login do usuário
const login = fetch(`${urlTodo}/users/login`, {
  method: "POST",
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
  body: JSON.stringify({ email: "everton@gmail.com", password: "enha" }),
})
  .then((response) => {response.json()})
  .then((dados) => {
    console.log(dados);
  })
  .catch((erro) => {
    console.log(erro);
  });


  
