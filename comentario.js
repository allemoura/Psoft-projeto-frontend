const comentarios = [];

async function getComentario(){
  
  let response = await fetch('http://localhost:8000/user.json')
  let data = await response.json()
  let tmp = await carregaComentario(data);
  comentarios.push(...tmp);
  console.log(comentarios)
}

function carregaComentario(data){
  var lista = document.getElementById('listaComentarios');
  var comen = [];
  comen = comen.concat(data.map(r => geraArray(r)));
  return comen;
}

const geraArray = (obj =>{
  var arra = [];
  arra.push(obj.id);
  arra.push(obj.usuario);
  arra.push(obj.hora);
  arra.push(obj.comentario);
  return arra;
})

export{getComentario, comentarios}