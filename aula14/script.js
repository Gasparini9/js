function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Digite novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade <= 12)  {
                //BB
                img.setAttribute('src', 'imagens/bby.jpg')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'imagens/hjovem.jpg')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'imagens/homem.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'imagens/veio.jpg')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade <= 12)  {
                //BB
                img.setAttribute('src', 'imagens/bbm.jpg')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'imagens/mjovem.jpg')
            } else if (idade < 50) {
                //adulta
                img.setAttribute('src', 'imagens/mulher.jpg')
            } else {
                //idosa
                img.setAttribute('src', 'imagens/veia.jpg')
            }
        }
        
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.</br>`
        res.appendChild(img)
        
    }
}