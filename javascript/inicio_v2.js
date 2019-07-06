const idDisciplina = localStorage.getItem("idDisciplina");
const token = localStorage.getItem('token')

function inicia(){
    
    
    
    fetch('https://pjsw.herokuapp.com/api/v1/disciplinas/' + idDisciplina + 'perfil', {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization':token
    }}).then(result=>{return result.json()}).then(data=>{
        let disciplina = document.getElementById('disciplina');
        let qtdLike = document.getElementById('qtdLike');
        disciplina.textContent=data.description;
        qtdLike.textContent = data.qtdLikes;
    })
}


inicia()
