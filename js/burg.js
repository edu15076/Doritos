var burg = document.querySelectorAll('.burg');
var appear = document.getElementById('nav');

burg[0].addEventListener('click', () => {
    appear.classList.toggle('appear');
});
