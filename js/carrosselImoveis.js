const slides = document.querySelectorAll('[data-carrosel-item]');

const rightButton = document.querySelector('[data-right-button]');
const leftButton = document.querySelector('[data-left-button]');

let cont = 0;

rightButton.addEventListener('click', () => {
    if (cont >= 2) {
        cont = -1
        cont++
    } else {
        cont++
    }
    slides.forEach(slide => {
        slide.classList.remove('imoveis__card-visivel');
    });
    slides[cont].classList.add('imoveis__card-visivel');
});

leftButton.addEventListener('click', () => {
    if (cont <= 0) {
        cont = 3
        cont--
    } else {
        cont--
    }
    slides.forEach(slide => {
        slide.classList.remove('imoveis__card-visivel');
    });
    slides[cont].classList.add('imoveis__card-visivel');
    console.log(cont)
});