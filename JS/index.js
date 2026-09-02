// Declaração de variáveis 
let indice = 0
let imagens = [
    "img/cake_spidermen.jpg",
    "img/merry_vangonh.jpg",
    "img/theo_cake.jpg"

]

// Função para trocar a imagem
function trocar() {
    let img = document.getElementById("img")
    img.src = imagens[indice]
}

// lógiva para trocar de imagens
setInterval (function(){
    trocar()
    indice++

    if (indice >= imagens.length){
        indice = 0
    }
}, 1000)

trocar()