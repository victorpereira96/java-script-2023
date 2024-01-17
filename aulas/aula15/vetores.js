let num = [2, 5, 9, 8, 6, 7]
num[2] = 3
num.push(1)
num.sort()

for(let pos in num){
    console.log(`O valor ${num[pos]} está na posição ${pos}`)
}

console.log(`O vetor tem ${num.length} valores.`)

let pos = num.indexOf(0)
if(pos == -1){
    console.log('Valor não encontrado!')
} else {
    console.log(`O valor está na posição ${pos}`)
}