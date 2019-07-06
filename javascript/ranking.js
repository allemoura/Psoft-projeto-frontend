
function rankingLike(){
    var token = localStorage.getItem('token')
    return fetch('https://pjsw.herokuapp.com/api/v1/disciplinas/rank',{
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization':token
        },
      })
}

function carregaRanking(){
    rankingLike().then(resul=>{return resul.json()}).then(data=>{
        let disc = [];
        if(data.message == "Voce nao tem permissao. Por favor, faca login."){
            alert('algo deu errado, tente novamente...')
        }else{
            var tmp = topDez(data);
            disc = disc.concat(tmp.map(r => `${r.description} - ${r.qtdLikes}`));
            listar(disc);
        }
    })
}

function topDez(arr){
    let topDez = []
    for(i =0;i<10;i++){
        topDez[i] = arr[i];
    }
    return topDez;
}
function listar(arr){
    let node = document.getElementById("rankingLike");
    
    var i = 0;
    var n = arr.length;
  while(i < n){
      let filho = document.createElement('li')
      filho.textContent = arr[i];
      node.appendChild(filho);
      i++;
  }
}
carregaRanking()
