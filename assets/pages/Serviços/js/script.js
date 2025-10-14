const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");

hamburger.addEventListener("click", () => nav.classList.toggle("active"));

function modo() {
    // Cabeçario
    let Body = document.querySelector('.body')
    let ButtonMode = document.querySelector('.modo')
    let header = document.querySelector('.header')
    let nav = document.querySelector('.nav')
    let NavList = document.querySelector('.nav-list')

    // Meio 
    let serviços = document.querySelector('.serviços')
    let tituloPrincipal = document.querySelector('.titulo-principal')
    let card = document.querySelectorAll('.card')
    let CardTitulos = document.querySelectorAll('.titulos-cards')
    let cardConteudo = document.querySelectorAll('.textocard')

    // imagens 
    let imageTransforme1 = document.querySelector('.imageTransforme1')
    let imageTransforme2 = document.querySelector('.imageTransforme2')
    let imageTransforme3 = document.querySelector('.imageTransforme3')
    let imageTransforme4 = document.querySelector('.imageTransforme4')
    let imageTransforme5 = document.querySelector('.imageTransforme5')
    let imageTransforme6 = document.querySelector('.imageTransforme6')

    // contato área
    let ContatoTitulo = document.querySelector('.contato-titulo')
    let redes = document.querySelector('.redes')
    let rede = document.querySelectorAll('.rede')

    document.body.classList.toggle('.modo')

    if (document.body.classList.contains('.modo')) {
        //cabeçario
        Body.style.background = '#0c1d39'
        Body.style.color = '#f4f8fb'
        Body.style.transition = '1s'

        header.style.background = '#0c1d39'
        header.style.color = '#f4f8fb'
        header.style.transition = '1s'

        nav.style.background = '#0c1d39'
        nav.style.color = '#f4f8fb'
        nav.style.transition = '1s'

        NavList.style.background = '#0c1d39'
        NavList.style.color = '#f4f8fb'
        NavList.style.transition = '1s'

        ButtonMode.innerHTML = `<i class="fa-solid fa-moon"></i> Escuro`
        ButtonMode.style.background = '#0c1d39'
        ButtonMode.style.color = '#f4f8fb'
        ButtonMode.style.transition = '1s'

        // meio
        serviços.style.background = '#0c1d39'
        serviços.style.color = '#f4f8fb'
        serviços.style.transition = '1s'

        tituloPrincipal.style.background = '#0c1d39'
        tituloPrincipal.style.color = '#f4f8fb'
        tituloPrincipal.style.transition = '1s'

        if (CardTitulos) CardTitulos.forEach(c => c.style.color = '#f4f8fb')
        if (CardTitulos) CardTitulos.forEach(c => c.style.transition = '1s')

        if (cardConteudo) cardConteudo.forEach(c => c.style.color = '#f4f8fb')
        if (cardConteudo) cardConteudo.forEach(c => c.style.transition = '1s')

        if (card) card.forEach(c => c.style.background = '#1c3e62');
        if (card) card.forEach(c => c.style.color = '#f4f8fb');
        if (card) card.forEach(c => c.style.transition = '1s')



        // imagens
        imageTransforme1.src = 'image/estrutura modo escuro.png'
        imageTransforme1.style.transition = '1s'

        imageTransforme2.src = 'image/Visual modo escuro.png'
        imageTransforme2.style.transition = '1s'

        imageTransforme3.src = 'image/Ajustes modo escuro.png'
        imageTransforme3.style.transition = '1s'

        imageTransforme4.src = 'image/criação modo escuro.png'
        imageTransforme4.style.transition = '1s'

        imageTransforme5.src = 'image/Responsividade modo escuro.png'
        imageTransforme5.style.transition = '1s'

        imageTransforme6.src = 'image/Interatividade modo escuro.png'
        imageTransforme6.style.transition = '1s'

        //Contato

        ContatoTitulo.style.color = '#f4f8fb'
        ContatoTitulo.style.transition = '1s'

        redes.style.background = '#0c1d39'
        redes.style.color = '#f4f8fb'
        redes.style.transition = '1s'

        if (rede) rede.forEach(c => c.style.color = '#f4f8fb');


    } else {
        //cabeçario
        Body.style.background = '#f4f8fb'
        Body.style.color = '#0c1d39'
        Body.style.transition = '1s'

        header.style.background = '#f4f8fb'
        header.style.color = '#0c1d39'
        header.style.transition = '1s'

        nav.style.background = '#f4f8fb'
        nav.style.color = '#0c1d39'
        nav.style.transition = '1s'

        NavList.style.background = '#f4f8fb'
        NavList.style.color = '#0c1d39'
        NavList.style.transition = '1s'

        ButtonMode.innerHTML = `<i class="fa-solid fa-sun"></i> Claro`
        ButtonMode.style.background = '#f4f8fb'
        ButtonMode.style.color = '#0c1d39'
        ButtonMode.style.transition = '1s'

        // meio
        serviços.style.background = '#f4f8fb'
        serviços.style.color = '#0c1d39'
        serviços.style.transition = '1s'

        tituloPrincipal.style.background = '#f4f8fb'
        tituloPrincipal.style.color = '#0c1d39'
        tituloPrincipal.style.transition = '1s'

        if (CardTitulos) CardTitulos.forEach(c => c.style.color = '#0c1d39')

        if (cardConteudo) cardConteudo.forEach(c => c.style.color = '#0c1d39')

        if (card) card.forEach(c => c.style.background = '#f4f8fb');
        if (card) card.forEach(c => c.style.color = '#0c1d39');


        // imagens
        imageTransforme1.src = "image/estrutura.png"
        imageTransforme2.src = "image/Visual.png"
        imageTransforme3.src = "image/Ajustes.png"
        imageTransforme4.src = "image/criação.png"
        imageTransforme5.src = "image/Responsividade.png"
        imageTransforme6.src = "image/Interatividade.png"

        //Contato

        ContatoTitulo.style.color = '#0c1d39'
        ContatoTitulo.style.trasition = '1s'

        redes.style.background = '#f4f8fb'
        redes.style.color = '#0c1d39'
        redes.style.transition = '1s'

        if (rede) rede.forEach(c => c.style.color = '#0c1d39');

    }


}