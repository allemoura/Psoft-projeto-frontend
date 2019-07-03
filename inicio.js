const id = getDisciplina() ;
const disciplina = document.getElementById('disciplina');

function inicia(){
    disciplina.textContent=id;

}
function getDisciplina(){
    if(localStorage.length > 3){
        return localStorage.getItem('disciplina')
    }else{
        return "PROJETO DE SOFTWARE";
    }
}

inicia()