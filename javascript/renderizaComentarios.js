import {getComentario, comentarios} from './requisicaoComentario.js';
import './mural.js';

function render() {
    let $comen = document.getElementById("comentarios");
    $comen.innerHTML = '';
    console.log(comentarios)
    if(comentarios.length > 0){
        comentarios.map(r => renderiza(r, $comen));
    }else{
        alert('disciplina sem comentario, seja o primeiro a comentar!!')
    }
}

function renderiza(r,t) {
    let novo = document.createElement("ps-comentario");
    if(r[2] != null || r[2] != ""){
        novo.setAttribute('id', r[0]);
        novo.setAttribute('usuario', r[1]);
        novo.setAttribute('comentario', r[2]);
        t.appendChild(novo);
    } 
}


async function init() {
    await getComentario();
    render()
}
init()

export{init}
