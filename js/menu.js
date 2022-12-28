// Essa função serve para o Dropdown do menu

function handleAbrirMenu(classe) {
    menuButton = document.getElementsByClassName(classe);
    
    if (!menuButton.hidden) {
        menuButton.hidden = true;
        menuButton[0].classList.add("disable");
    } else {
        menuButton.hidden = false
        menuButton[0].classList.remove("disable");
    }
};

menuButton = document.querySelector('[data-nav-button]');

menuButton.addEventListener('click', function() {
    handleAbrirMenu('cabecalho__mobile')
});

// Essa função serve para o Dropdown do Cadastro

menuCadastroButton = document.querySelector('[data-nav-cadastro]');

menuCadastroButton.addEventListener('click', function() {
    handleAbrirMenu('cabecalho__dropdown-cadastro')
});
