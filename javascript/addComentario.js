const comentario = document.getElementById('comentario');

function enviaComentario(){
    let idDisciplina = localStorage.getItem('idDisciplina');
    var token = localStorage.getItem('token');
    return fetch('https://pjsw.herokuapp.com/api/v1/comentarios/' + idDisciplina, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization':token
    },body: JSON.stringify({content:comentario.value})
})};

function addComentario(){
    console.log('oii')
    enviaComentario().then(result =>{return result.json()}).then(data =>{
        
        if(data.message == "Voce nao tem permissao. Por favor, faca login." ||data.message=="Ops, algo deu errado."){
            alert("Ops, algo deu errado, tente nocamente")
        }else{
            window.location.reload()
        }
    })
}
