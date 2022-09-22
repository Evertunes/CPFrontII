let formulario = document.getElementById("formulario");
let email = document.getElementById("inputEmail");
let senha = document.getElementById("inputPassword");
let errormessage = document.getElementById("erro");
let textoerro = document.createTextNode("Não pode haver campos vazios!");
let errofetch = document.createTextNode("Erro de login!");
let botao = document.querySelector(".sub");
let urlTodo = "https://ctd-todo-api.herokuapp.com/v1";
const header = { "Content-type": "application/json; charset=UTF-8" };
botao.disabled = true
function desabilita() {
  if (email || senha == "") {
    botao.disabled = true;
  } else {
    botao.disabled = false;
  }
}

function validateEmail(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}

email.onkeyup = (evento) => {
  if (email.value == "") {
    errormessage.appendChild(textoerro);
    errormessage.style.color = "red";
  } else {
    evento.target.style.background = "";
  }
};

senha.onkeyup = (evento) => {
  if (senha.value == "") {
    errormessage.appendChild(textoerro);
    errormessage.style.color = "red";
  } else {
    evento.target.style.background = "";
  }
};

email.onblur = (evento) => {
  if (email.value !== "" && validateEmail(email.value)) {
    if (errormessage == true) {
      errormessage.removeChild(textoerro);
    }
  } else {
    evento.target.style.background = "pink";
    errormessage.appendChild(textoerro);
    errormessage.style.color = "red";
  }
};

senha.onkeyup = () => {
  if (senha.value !== "" ) {
    botao.disabled = false;
  } 
}

senha.onblur = (evento) => {
  if (senha.value !== "" && errormessage == true) {
    errormessage.removeChild(textoerro);
  } 
  else {
    evento.target.style.background = "pink";
    errormessage.appendChild(textoerro);
    errormessage.style.color = "red";
  }
};

formulario.onsubmit = () => {
  formulario.removeChild(errormessage);
  let normalizaEmail = email.value.trim();
  let normalizaSenha = senha.value.replace(/ /g, "");
  console.log(`${normalizaEmail}`, `${normalizaSenha}`);

  // login do usuário
  const bodyLogin = JSON.stringify({
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
      function myFunction() {
        var x = document.getElementById("erro");
          x.innerHTML = "Login Failed, try again!";
          textoERR.style.color = "red";
        }
      myFunction();
      }
  
  
    })
    }

  setTimeout(() => {
    email.value = null;
    senha.value = null;
  }, 0.5 * 1000);


