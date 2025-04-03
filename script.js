let select = document.getElementById("oselect")
let soma = 0
let contagem = 0

let lista = []
function pegarNumero(){
    let opcao = document.createElement("option")
    opcao.value = Number(document.getElementById("onumero").value)
    opcao.text = `Valor ${opcao.value} adicionado.`
    lista.push(opcao.value)
    select.appendChild(opcao)
    contagem++
    soma+= Number(opcao.value)
    
}

function escreveInfos(){
    texto1 = document.getElementById("quantidadenumero")
    texto1.innerHTML = `Ao todo temos ${contagem} números.`
    texto1.style.display = "flex"
    texto2 = document.getElementById("maiorvalor")
    texto2.innerHTML = `O maior valor digitado foi ${Math.max(...lista)}.`
    texto2.style.display = "flex"
    texto3 = document.getElementById("menorvalor")
    texto3.innerHTML = `O menor valor foi ${Math.min(...lista)}.`
    texto3.style.display = 'flex'
    texto4 = document.getElementById('soma')
    texto4.innerHTML = `A soma dos valores é ${soma}.`
    texto4.style.display = 'flex'
    texto5 = document.getElementById('média')
    texto5.innerHTML = `A média dos valores é ${soma/lista.length.toFixed(2)}.`
    texto5.style.display = 'flex'

}