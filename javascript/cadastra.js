
const nome = document.getElementById('txtNome').value;
const sobrenome = document.getElementById('txtSobrenome').value;
const emaail = document.getElementById('txtEmail').value;
const senha = document.getElementById('txtSenha').value;

function cadastraUsuaarioo(){
  return fetch('https://pjsw.herokuapp.com/api/v1/user/', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({name: name, lastName: lastName, email:email,password:password})
  });
}

function cadastra(){
  cadastraUsuaario().then(result => {
  return result.json()
}).then(data => {
  console.log(data)
  if(data.message == 'User already registered.'){
    alert('E-mail já esta cadastrado!!!')
  }else{
    window.open('login.html', '_self')
  }
})}
