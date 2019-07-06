

function fazLogin(){
    let usuario= document.getElementById('txtUsuario');
    let senha = document.getElementById('txtSenha');
    return fetch('https://pjsw.herokuapp.com/api/v1/auth/login/', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email:usuario.value,password:senha.value})
  });
}

function login(){
    let usuario = document.getElementById('txtUsuario');
    fazLogin().then(result => {
        return result.json();
    }).then(data => {
        if(data.message == 'User not found.'){
            alert('Usario não cadastrado!!');
        }else if(data.message == 'Password invalid or incorrect. Try again.'){
            alert('senha incorreta ou invalida, tente novamente');}
        else{
            localStorage.setItem('token', data.token);
            localStorage.setItem('usuario',usuario.value);
	    window.open('home.html', '_self');
        }
    })
}

