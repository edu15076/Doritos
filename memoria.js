const baralho = [
    {
        nome: "amarelo",
        img: "img/amarelo.jpg"
    },
    {
        nome: "verde",
        img: "img/verde.jpg"
    },
    {
        nome: "laranja",
        img: "img/laranja.jpg"
    },
    {
        nome: "roxo",
        img: "img/roxa.jpg"
    },
    {
        nome: "amarelo",
        img: "img/amarelo.jpg"
    },
    {
        nome: "verde",
        img: "img/verde.jpg"
    },
    {
        nome: "laranja",
        img: "img/laranja.jpg"
    },
    {
        nome: "roxo",
        img: "img/roxa.jpg"
    },
    {
        nome: "mist",
        img: "img/misterio.jpeg"
    },
    {
        nome: "mist",
        img: "img/misterio.jpeg"
    },
    {
        nome: "dorito",
        img: "img/doritos-queijo.jpg"
    },
    {
        nome: "dorito",
        img: "img/doritos-queijo.jpg"
    }
];
baralho.sort(() => {
    return 0.5 - Math.random();
});
const grade = document.querySelector("#grade");
const pontuacao = document.querySelector("#pontos"); 
let escolhidas = [];
let ponto;

function criarGrade() {
    ponto = 0;
    pontuacao.innerText = ponto; 
    for (let i = 0; i < baralho.length; i++) {
        let carta = document.createElement("img");
        carta.id = i;
        carta.name = baralho[i].nome;
        carta.src = "img/int.png";
        carta.addEventListener("click", escolherCarta);
        grade.appendChild(carta);
    }
}
function escolherCarta() {
    let carta = this;
    carta.src = baralho[carta.id].img;
    escolhidas.push(carta);

    if (escolhidas.length == 2) {

        setTimeout(() => {
            let carta1 = escolhidas[0];
            let carta2 = escolhidas[1];

            if (carta1.name == carta2.name) {
                carta1.src = "img/correto.png";
                carta2.src = "img/correto.png";
                carta1.removeEventListener("click", escolherCarta);
                carta2.removeEventListener("click", escolherCarta);
                ponto++;
                pontuacao.innerText = ponto; 
            }else {
                carta1.src = "img/int.png";
                carta2.src = "img/int.png";
            }

            if (ponto == baralho.length / 2) {
                alert("Caçador de doritos muito esperto, Meus parabéns!!!!(reinicie a pagina para jogar novamente)"); 
                grade.innerHTML=""; 
            }

            escolhidas = [];
        }, 1000);

    }
}
