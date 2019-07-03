function rankingLike(){
    return fetch('http://localhost:8000/rLike.json')
}

function carregaRanking(){
    rankingLike().then(resul=>{return resul.json()}).then(data=>{
        let disc = [];
        console.log(data);
        disc = disc.concat(data.map(r => `${r.nome} - ${r.like}`));
        listar(disc);
    })
}

function listar(arr){
    let node = document.getElementById("rankingLike");
    
    var i = 0;
    var n = arr.length;
  while(i < n){
      let filho = document.createElement('li')
      filho.textContent = arr[i];
      filho.onclick="changeFunc(value)";
      node.appendChild(filho);
      i++;
  }
}
setTimeout(1000,carregaRanking())
