const botaosort = document.querySelector("div.box button")
var numerosort = document.querySelector("div.box h1")
var roleta = []; 
const music = new Audio ('som.mp3')
const music2 = new Audio ('fogo.mp3')


for (i = 1; i <= 6; i++){
    roleta.push(i)
}

botaosort.addEventListener("click", () => {
    numerosort.innerHTML = "" + roleta[Math.floor(Math.random()*roleta.length)]
    
    if (roleta[Math.floor(Math.random()*roleta.length)] == roleta.length){
        numerosort.innerHTML = "QUEIMADO" 
        alert("infelizmente sua lingua foi queimada")
        music.play();
    }
    else{
        numerosort.innerHTML = "Não foi dessa vez..."
        music2.play();
    }
}) 
