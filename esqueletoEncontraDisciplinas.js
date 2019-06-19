const http = require('http');

const getDisciplinas = (letra, callback) =>{
    const url = `http://localhost:8000/disciplinas.json`;
   http.get(url, res => {
        let resultado = '';
        res.on('data', dados =>{
            resultado += dados;
        })

        res.on('end', () =>{
            callback(JSON.parse(resultado));
        })

    })
}

let nomes = [];
getDisciplinas('/n', disciplinas =>{
    nomes = nomes.concat(disciplinas.map(a => `${a.nome}`))
    console.log(nomes);
    const subStrings = nomes.filter(nomes => findSubString(nomes, "LAB"));
    console.log(subStrings)
})

function findSubString(string, substring){
    let tmp = string.indexOf(substring);
    return tmp > -1;
}
