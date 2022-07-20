const botaosort = document.querySelector("div.box button")
var numerosort = document.querySelector("div.box h1")
var roleta = []; 
const music = new Audio ('audio/som.mp3')
const music2 = new Audio ('audio/fogo.mp3')
const timer = 1000;
const timer2 = 4000; 

for (i = 1; i <= 6; i++) {
    roleta.push(i)
}

botaosort.addEventListener("click", () => {
    numerosort.innerHTML = "" + roleta[Math.floor(Math.random()*roleta.length)]
    
    if (roleta[Math.floor(Math.random() * roleta.length)] == roleta.length){
        alert("infelizmente sua lingua foi queimada")
        setTimeout(() => {
            numerosort.innerHTML = "Tente a sorte no desafio da Roleta"
        music.play();
        }, timer2);
        numerosort.innerHTML = "QUEIMADO" 
    } else{
        setTimeout(() => {
            numerosort.innerHTML = "Tente novamente"
        }, timer);
        music2.play();
        numerosort.innerHTML = "Não foi dessa vez..."  
    }
}) 
