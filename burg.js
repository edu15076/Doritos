var burg = document.querySelectorAll('.burg');
var appear = document.getElementById('nav');

burg[0].addEventListener('click', () => {
    if (appear.classList.contains('appear'))
        appear.classList.remove('appear');
    else
        appear.classList.add('appear');
});
