function mostrar(botao){
    let valor = botao.innerText
    let resultado = document.getElementById('resultado')
    resultado.innerText += `${valor} `
}

function apagar(){
    let resultado = document.getElementById('resultado')
    resultado.innerHTML = ''
}