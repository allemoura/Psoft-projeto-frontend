function darLike(){
    var disc = localStorage.getItem('disciplina');
    var token = localStorage.getItem('token');
    
    fetch("'localhosr:8081/api/' + ${disc}", {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ token:token})
      }).then(resul =>{console.log(resul)}).then(data =>{
          acaoLike(data)
      })
}

function acaoLike(msg){
    if(msg.message == '"Disciplina nao existe."'){
        alert('Por Favor, tente novamente!!')
    }else if(msg.message == 'Você não tem permissão. Por favor, faça login.'){
        alert('Você não esta cadastrado, cadastre-se para poder curtir!!')
    }else{
        var like = document.getElementById('like');
        like.src = 'https://imagepng.org/wp-content/uploads/2017/10/coracao.png';
    }
}

