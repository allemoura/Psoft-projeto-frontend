function apagaComentario(id){
    return fetch("link", {
        method: 'DELETE',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id:id})
      });
}
function excluir($i){
    apagaComentario($i.title).then(result=>{
        return result.json()
    }).then(data=>{
        if(data.message=='deu erro'){
            alert("Ops... algo deu errado, certeza que esse comentario é seu?")
        }else{
            alert("aluatize a pagina!!")
        }
    })
}