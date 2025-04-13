function verificador(){
    let palavra_pre = document.getElementById('palavra').value
    palavra = palavra_pre.toLowerCase()
    let contador_diferente = 0
    let contador_array = 0
    for (let i = 1; i <= palavra.length/2; i++ ){
        if (palavra[contador_array] != palavra[palavra.length - i]){
            contador_diferente += 1
       }
       contador_array++
    }
    if (contador_diferente == 0){
        let paragrafo = document.getElementById('resultado')
        paragrafo.innerText = `"${palavra_pre}" é um palíndromo.`
        paragrafo.style.display = 'flex'
    }else{
        let paragrafo = document.getElementById('resultado')
        paragrafo.innerText = `"${palavra_pre}" NÃO é um palíndromo.`
        paragrafo.style.display = 'flex'

    }


}