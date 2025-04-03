let imagem = document.getElementById('imagem')
        
        
function mostrarInfos(){
    let ano_nascimento = Number(document.getElementById('idades').value)
    let data = new Date()
    let ano_atual = data.getFullYear()
    let idade = Number(ano_atual - ano_nascimento)
    let sexo = document.querySelector('input[name="botoes"]:checked')

    if (ano_atual >= ano_nascimento && idade <130 && sexo.value != null && idade >= 0) {
        document.getElementById('texto').innerHTML = `Você é ${sexo.value} e tem ${idade} anos.`;
        document.getElementById('texto').style.display = 'flex';
        
        if (idade < 3){
            imagem.src = document.getElementById('bebe').src
            imagem.style.display = 'flex';
            
        }

        if (idade >= 3 && idade < 12) {
            if (sexo.value == 'homem') {
                imagem.src = document.getElementById('crianco').src;
                imagem.style.display = 'flex';
            } else if (sexo.value == 'mulher') {
                imagem.src = document.getElementById('crianca').src;
                imagem.style.display = 'flex';
            }
        }

        if (idade >= 12 && idade < 18) {
            if (sexo.value == 'homem') {
                imagem.src = document.getElementById('garoto').src;
                imagem.style.display = 'flex';
            } else if (sexo.value == 'mulher') {
                imagem.src = document.getElementById('garota').src;
                imagem.style.display = 'flex';
            }
        }

        if (idade >= 18 && idade < 55) {
            if (sexo.value == 'homem') {
                imagem.src = document.getElementById('adulto').src;
                imagem.style.display = 'flex';
            } else if (sexo.value == 'mulher') {
                imagem.src = document.getElementById('adulta').src;
                imagem.style.display = 'flex';
            }
        }

        if (idade >=55){
            if (sexo.value == 'homem'){
                imagem.src = document.getElementById('idoso').src
                imagem.style.display = 'flex';
            }else if (sexo.value =='mulher'){
                imagem.src = document.getElementById('idosa').src
                imagem.style.display = 'flex';
            }

        }

    }else if(ano_atual < ano_nascimento || idade == '' || sexo.value == null || idade >130 ){
        alert('[ERRO] Informações inválidas.')
    }


}