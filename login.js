const usuario = document.getElementById('txtUsuario').value;
const senha = document.getElementById('txtSenha').value;

function login(){
    return fetch('https://ucdb-api.herokuapp.com/api/v1/auth/login', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email:usuario,password:senha})
  });
}

function fazLogin(){
    login().then(result => {
        return result.json()
    }).then(data => {
        console.log(data)
        if(data.message == 'User not found.'){
            alert('Usario ou senha incorretos!!');
        }else{
            localStorage.setItem('token', data.token)
        }
    })
}

function requisicao(){
    return fetch(`https://ucdb-api.herokuapp.com/api/v1/user/${usuario}`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }});
}
function verifica(){
    requisicao().then(result =>{
        return result.json()
    }).then(data =>{
        console.log(data)
    })
}

function getToken(){
    return localStorage.getItem('token');
}