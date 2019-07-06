let lista = document.getElementById("historico");
const input = document.getElementById("texto");


function consultaDisciplinas(){
    console.log('https://pjsw.herokuapp.com/api/v1/disciplinas/' + input.value)
    return fetch('https://pjsw.herokuapp.com/api/v1/disciplinas/' + input.value,{
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
}

function getDisciplinas(){ 
  if(input.value == ''){
    alert('É necessario digitar algo...')
  }else{
    consultaDisciplinas().then(result =>{  
    return result.json();}).then(data =>{
    let disciplinas = [];
    disciplinas = disciplinas.concat(data.map(r => `${r.id} - ${r.description}`))
    retornaDisciplinas(disciplinas);
    }).catch(err =>{
    console.log("ERRO: ",err);})}};


function retornaDisciplinas(arr){
  let opt;
  limpaLista();
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
  if(localStorage.length >= 1){
    var tmp = $i.split(" - ");
    console.log(tmp)
    localStorage.setItem("idDisciplina", tmp[0]);
    localStorage.setItem("nomeDisciplina", tmp[1]);
    window.open('disciplina.html', '_blank')
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