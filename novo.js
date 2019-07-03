import{getComentario, comentarios} from './comentario.js'

function render() {
    let $comen = document.getElementById("comentarios");
    $comen.innerHTML = '';
    comentarios.map(r => renderiza(r, $comen)) 
}

function renderiza(r,t) {
    let html = `<style>
                    #dados{
                        background-color: aqua; 
                        display:flex; 
                        width: 350px;
                        color:black;
                    }
                    #user{
                        margin: 5px
                    }
                    #hora{
                        margin: 5px
                    }
                    #comentario{
                        margin:5px;
                    }
                    #caixa{
                        background-color: gray;
                        border-radius: 10px;
                        margin-top:5px

                    }
                </style>
                <li id="caixa" onclick="funn()">
                    <h4 id="user">${r[0]}</h4>
                    <h4 id="hora"> ${r[1]}</h4>
                    <h3 id="comentario">${r[2]}</h3>
                    
                 </li>`;
    
    let novo = document.createElement("div");                
    let shadow = novo.attachShadow({"mode": "open"});
    shadow.innerHTML = html;
    t.appendChild(novo)
};


function inicia(){getComentario()
.then(function () {
    
    render()

})};

setInterval(1000,inicia())