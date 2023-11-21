function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.querySelector('input#txtano')
    var res = document.querySelector('div#res')
    var img = document.querySelector('img#foto')

    if (fano.value.length == 0 || fano.value > ano) {
        alert('[ERRO] Verique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade <10) {
                img.src = 'imagens/boy.jpg'
            } else if (idade < 21) {
                img.src = 'imagens/young-man.jpg'
            } else if (idade < 50) {
                img.src = 'imagens/man.jpg'
            } else {
                img.src = 'imagens/old-man.jpg'
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >=0 && idade <10) {
                img.src = 'imagens/girl.jpg'
            } else if (idade < 21) {
                img.src = 'imagens/young-woman.jpg'
            } else if (idade < 50) {
                img.src = 'imagens/woman.jpg'
            } else {
                img.src = 'imagens/old-woman.jpg'
            }
        } 
        res.style.textAlign = 'center'
        res.innerHTML = `<p>Detectamos ${genero} com ${idade} anos. </p>`
        res.appendChild(img)
    }
}