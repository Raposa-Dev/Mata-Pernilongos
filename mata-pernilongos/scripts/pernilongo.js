let altura = 0
let largura = 0
let life = 1
let time = 50

//Criando nivel
let levelGame = 2000

let level = window.location.search

level = level.replace('?', '')

if(level === 'facil'){
    levelGame = 2000
} else if (level === 'normal') {
    levelGame = 1500
} else if (level === 'dificil') {
    levelGame = 800
}
//--


function risizeTela(){

    altura = window.innerHeight - 100
    largura = window.innerWidth - 100

}

risizeTela()

//tempo contado

let tempo = setInterval(function() {

    time = time - 1

    if (time < 0) {

        clearInterval(tempo)
        clearInterval(clearPernilongos)
        window.location.href = '../pages/winer.html'
    }else{
        document.getElementById('time').innerHTML = time
    }   
    
},1000)

//remover a pernilongo

function positionRandomize() {

    if(document.getElementById('pernilongo')){
        document.getElementById('pernilongo').remove()

        if(life > 4) {
            window.location.href = '../pages/game_over.html'
        }else {
            document.getElementById('heart' + life).src = '../images/vida-vazia.png'

            life++
        }
    }

    //--

    let positionX = Math.floor(Math.random() * largura)

    let positionY = Math.floor(Math.random() * altura)

    positionX = positionX < 0 ? 0 : positionX
    positionY = positionY < 0 ? 0 : positionY


    //Criar pernilongo no Elemento HTML 
    let pernilongo = window.document.createElement('img')
    pernilongo.src = '../images/pernilongo.png'
    pernilongo.className = pernilongosAleatorios() + ' ' + lados()
    pernilongo.style.left = positionX + 'px'
    pernilongo.style.top = positionY + 'px'
    pernilongo.style.position = 'absolute'
    pernilongo.id = 'pernilongo'
    pernilongo.onclick = function () {
        this.remove()
    }

    window.document.body.appendChild(pernilongo)
}

//ciar pernilongo altomaticamete

let clearPernilongos = setInterval(function(){
    positionRandomize()
}, levelGame)


    //pernilongo aleatorios 

function pernilongosAleatorios() {
    let controle = Math.floor(Math.random() *3)

    switch(controle) {
        case 0:
            return 'pernilongo1'
        case 1:
            return 'pernilongo2'
        case 2:
            return 'pernilongo3'
    }
}
//Mudar lado da pernilongo

function lados() {
    let controle = Math.floor(Math.random() * 2)

    switch (controle) {
        case 0:
            return 'LadoUm'
        case 1:
            return 'LadoDois'
    }
}



