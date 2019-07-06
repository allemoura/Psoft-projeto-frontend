
const nome = document.getElementById('txtNome');
const sobrenome = document.getElementById('txtSobrenome');
const email = document.getElementById('txtEmail');
const senha = document.getElementById('txtSenha');

function cadastraUsuario(){
  return fetch('https://pjsw.herokuapp.com/api/v1/user/', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({name: nome.value, lastName: sobrenome.value, email:email.value,password:senha.value})
  });
}

function cadastra(){
  if(email.value != '' && senha.value != ''){
    cadastraUsuario().then(result => {
      return result.json()
    }).then(data => {
      console.log(data)
      if(data.message == 'Voce nao tem permissao. Por favor, faca login.'){
        alert('E-mail já esta cadastrado!!!')
      }else if(data.message == 'Ops, algo deu errado.'){
        alert('Ops, algo deu errado.')
    
      }else{
        window.open('login.html', '_self')
      }})
  }else{
    alert('algo esta errado, verifique e tente novamente..')
  }
  
}
function limpaLocalStorage(){localStorage.clear()};
limpaLocalStorage();
