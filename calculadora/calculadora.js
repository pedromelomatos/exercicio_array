let conteiro = 0
let conta = []
let numerolista = []
let paragrafo = document.getElementById('testando')
paragrafo.style.display = 'flex'
let tela = document.getElementById('resultado')
tela.innerText = ''

function mostrar(botao){
    let valor = botao.innerText
    let resultado = document.getElementById('resultado')
    resultado.innerText += `${valor} `


    let numero = 0
    if (!botao.classList.contains('fator')){
        numerolista.push(Number(botao.value))

    }
    else{
        let contador = numerolista.length - 1

        for (let i = 0; i<= numerolista.length - 1; i++){
            numero += numerolista[i] * 10 ** contador
            contador--

        }

        let num = (numero)

        conta.push(num)
        if (botao.value != '='){
        conta.push(botao.value)}
        

        numerolista = []
        num = 0
    }



}

function apagar(){
    conta = []
    tela.innerText = ''
}

function calcular(){
    for (let i = 0; i < conta.length; i++){
        if (conta[i] == 0 || conta[i] == '0'){
            conta.splice(i, 1)
        }
    }
    let aconta = conta.join('')
    tela.innerText = ''
    tela.innerText = `${eval(aconta)}`
    conteiro++
    conta = [eval(aconta)]

}

