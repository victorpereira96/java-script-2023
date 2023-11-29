function contar() {
    var ini = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('passo')
    var res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        alert('[ERRO] Falta dados!')
        res.innerHTML = 'Impossível contar!'
    } else {
        res.innerHTML = 'Contando... <br>'
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        if (p <= 0) {
            alert('PAsso inválido! Considerando PASSO 1')
            p = 1
        }
        if (i < f) {
            // Contagem Crescente
            for (var c = i; c <= f; c += p){
                res.innerHTML += `${c} \u{1F449} `
            }
            
        } else {
            // Contagem Regressiva
            var c = i
            while (c >= f) {
                res.innerHTML += `${c} \u{1F449} `
                c -= p
            }
        }
        res.innerHTML += `\u{1F3C1}`
     } 
    
}