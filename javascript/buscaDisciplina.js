let lista = document.getElementById("historico")
const input = document.getElementById("texto");

function consultaDisciplinas(){
    return fetch('http://localhost:8000/disciplinas.json');
}

function getDisciplinas(){ consultaDisciplinas().then(result =>{
    return result.json();
}).then(data =>{
    let disciplinas = [];
    disciplinas = disciplinas.concat(data.map(r => `${r.ID} - ${r.nome}`))
    geraOpcoes(disciplinas);
}).catch(err =>{
    console.log("ERRO: ",err);
})};

function geraOpcoes(data){
    var str = input.value
    str = str.toUpperCase()
    var subDisciplinas = data.filter(data => findSubString(data,str));
    retornaDisciplinas(subDisciplinas);
}

function findSubString(string, substring){
    let tmp = string.indexOf(substring);
    return tmp > -1;
}

function retornaDisciplinas(arr){
  let opt;
  limpaLista();
  console.log(arr.length);
  console.log('oi');
  var i = 0;
  var n = arr.length;
  while(i < n){
      opt = document.createElement('option');
      opt.value = arr[i];
      opt.text=arr[i];
      lista.appendChild(opt);
      i++;
  }
}
function changeFunc($i) {
  if(localStorage > 1){
    localStorage.setItem(idDisciplina, $i.split("-")[0]);
    localStorage.setItem(disciplina, $i.split("-")[1]);
    window.open('localhost:8082/disciplina.html', '_blank')
  }else{
    alert("VOCÊ TEM QUE ESTA LOGADO PARA TER ACESSO!!")
  }
}
  function limpaLista(){
    var tmp = lista.children; 
    var i = tmp.length;
    console.log(i);
    while(i > 0){
        i--;
        lista.removeChild(tmp[i]);
    }
  }