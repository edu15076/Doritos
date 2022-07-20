var oldMan = document.querySelectorAll('.old');
var veio = document.getElementById('veio');

const spinTimer = 2000;

oldMan[0].addEventListener('click', () => {
    veio.classList.add('spin');
    setTimeout(() => {
        veio.classList.remove('spin');
    }, spinTimer);
});