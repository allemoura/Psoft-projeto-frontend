const comentarios = [];


async function getComentario(){  
  var idDisciplina = localStorage.getItem('idDisciplina');
  var token = localStorage.getItem('token');
  console.log('aqui')
  let response = await fetch('https://pjsw.herokuapp.com/api/v1/comentarios/' + idDisciplina +'-all',{
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization':token
    }
  });
  let data = await response.json();
  let tmp = await carregaComentario(data);
  console.log(tmp)
  comentarios.push(...tmp);
  console.log(comentarios)
}

function carregaComentario(data){
  var comen = [];
  comen = comen.concat(data.map(r => geraArray(r)));
  return comen;
}

const geraArray = (obj =>{
  var arra = [];
  arra.push(obj.id);
  arra.push(obj.username);
  arra.push(obj.content);
  return arra;
})

export{getComentario, comentarios}