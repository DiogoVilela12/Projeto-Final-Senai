const slidesDekstop = document.querySelectorAll('[data-carrosel-item-dekstop]');

const rightButtonDekstop = document.querySelector('[data-right-button-dekstop]')
const leftButtonDekstop = document.querySelector('[data-left-button-dekstop]')

let contador = 0

rightButtonDekstop.addEventListener('click', () => {
    if (contador >= 2) {
        contador = -1
        contador++
    } else {
        contador++
    }
    slidesDekstop.forEach(slide => {
        slide.classList.remove('imoveis__card-visivel');
    });
    slidesDekstop[contador].classList.add('imoveis__card-visivel');
});

leftButtonDekstop.addEventListener('click', () => {
    if (contador <= 0) {
        contador = 3
        contador--
    } else {
        contador--
    }
    slidesDekstop.forEach(slide => {
        slide.classList.remove('imoveis__card-visivel');
    });
    slidesDekstop[contador].classList.add('imoveis__card-visivel');
});
