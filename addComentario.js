const comentario = document.getElementById('comentario').value;
const token = getToken();
const idDisciplina = getDisciplina();

function enviaComentario(){
    return fetch('http://localhost:8000/disciplinas.json'/*, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body:JSON.stringify({id:idDisciplina,comentario:comentario, token:token})
}*/)};

function addComentario(){
    console.log("oii")
    if(token == "nao tem" || comentario == "nao tem"){
        alert("ALGO DEU ERRADO, TENTE FAZER LOGIN OU COMENTAR NOVAMENTE!");
    }else{
        enviaComentario().then(result =>{return result.json}).then(data =>{
            if(data.message == "Você não tem permissão. Por favor, faça login."){
                alert("Você não tem permissão. Por favor, faça login.")
            }else{
                alert("atualize a pagina!!")
                
            }
        })
    }
}


function getToken(){
    if (localStorage.length > 1){
        return localStorage.getItem('token');
    }else{
        return "nao tem";
    }
}
function getDisciplina(){
    if(localStorage.length > 3){
        return localStorage.getItem('disciplina')
    }else{
        return "nao tem";
    }
}