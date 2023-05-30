// pegando os atributos necessario do html
let showNumber = document.querySelector('.container-grid-show')
let input = document.querySelector('.container-grid-n1')
let msg1 = document.querySelector('.container-msg1')
let msg2 = document.querySelector('.container-msg2')



//função para gerar numero aleatorio
function random() {
    if(input.value != "") {
        let random = Math.ceil(Math.random()* 10) 
        showNumber.innerHTML = random 
        verifyEqualsNumbers(random)
    } else {
        return false
    }
}


//função para verificar se os numeros são iguais
function verifyEqualsNumbers(random) {
    let n1 = input.value

    if (random == n1) { 
        msg1.innerHTML = "Parabéns voce acertou 🥳"
        msg2.innerHTML = "Eu pensei em " + random + " e você pensou em " + n1
    } else {
        msg1.innerHTML = "Que Pena, voce errou 🤨"
        msg2.innerHTML = "Eu pensei em " + random + " e você pensou em " + n1
    }
    input.value = ""
}