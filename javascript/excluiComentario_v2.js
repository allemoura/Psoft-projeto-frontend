
function apagaComentario(id){
    let token = localStorage.getItem('token')
    return fetch("https://pjsw.herokuapp.com/api/v1/comentarios/" + id, {
        method: 'DELETE',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization':token}
      })
}
function getComentario(id){
    let token = localStorage.getItem('token')
    return fetch("https://pjsw.herokuapp.com/api/v1/comentarios/" + id, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization':token}
      })
}
function excluir($i){
    getComentario($i.title).then(result=>{return result.json()}).then(d=>{
        if(d.username == localStorage.getItem('usuario')){
            apagaComentario($i.title).then(result=>{
                return result.json()
            }).then(data=>{
                if(data.message=='O Comentario nao existe.'){
                    alert("Ops... algo deu errado, certeza que esse comentario é seu?")
                }else{
                   window.location.reload()
                }
            })
        }else{
            alert("este comentario nao pode ser apagado, pois não é seu!!")
        }
    })
    
}
