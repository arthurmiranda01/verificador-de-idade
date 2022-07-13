function verificar() {
   var data = new Date();
   var ano = data.getFullYear()
   var fano = document.getElementById('txtano') 
   var res = document.getElementById('res')
   if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente.')
   } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'criançaH.png')
            } else if (idade < 21) {
                //Adolescente
                img.setAttribute('src', 'adolescenteH.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'adultoH.png')
            } else {
                //Idoso
                img.setAttribute('src', 'idosoH.png')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'criançaM.png')
            } else if (idade < 21) {
                //Adolescente
                img.setAttribute('src', 'adolescenteM.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'adultoM.png')
            } else {
                //Idoso
                img.setAttribute('src', 'idosoM.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
   }
}