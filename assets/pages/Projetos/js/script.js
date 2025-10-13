const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");

hamburger.addEventListener("click", () => nav.classList.toggle("active"));

function modo() {
    // Cabeçario
    let header = document.querySelector('.header')
    let nav = document.querySelector('.nav')
    let NavList = document.querySelector('.nav-list')
    let ButtonMode = document.querySelector('.modo')
    let Body = document.querySelector('.body')

    //Projetos
    let TituloP = document.querySelector('.titulo-principal')
    let Projetos = document.querySelector('.Projetos')
    let CardProjeto = document.querySelectorAll('.card-projetos')
    let CardTitle = document.querySelectorAll('.card-title')

    //Contato
    let TextoContato = document.querySelector('.texto-contato')
    let contatoTitulo = document.querySelector('.contato-titulo')
    let Redes = document.querySelector('.redes')
    let rede = document.querySelectorAll('.rede')
    document.body.classList.toggle('.modo')

    if (document.body.classList.contains('.modo')) {
        //modo escuro
        // Cabeçario
        header.style.background = '#0C1D39'
        header.style.color = '#F4F8FB'
        header.style.transition = '1s'

        nav.style.color = '#f4f8fb'
        nav.style.background = '#0c1d39'
        nav.style.transition = '1s'

        NavList.style.color = '#f4f8fb'
        NavList.style.background = '#0c1d39'
        NavList.style.transition = '1s'

        ButtonMode.style.background = '#0c1d39'
        ButtonMode.style.color = '#f4f8fb'
        ButtonMode.innerHTML = '<i class="fa-solid fa-moon"></i> Escuro'
        ButtonMode.style.transition = '1s'

        Body.style.background = '#0c1d39'
        Body.style.color = '#f4f8fb'
        Body.style.transition = '1s'
        // Projetos

        Projetos.style.background = '#0c1d39'
        Projetos.style.color = '#f4f8fb'
        Projetos.style.transition = '1s'

        if (CardProjeto) CardProjeto.forEach(c => c.style.background = '#f4f8fb')
        if (CardProjeto) CardProjeto.forEach(c => c.style.transition = '1s')

        if (CardTitle) CardTitle.forEach(c => c.style.color = '#0c1d39')
        if (CardTitle) CardTitle.forEach(c => c.style.transition = '1s')

        TituloP.style.color = '#f4f8fb'
        TituloP.style.transition = '1s'


        //Contato
        contatoTitulo.style.color = '#f4f8fb'
        contatoTitulo.style.transition = '1s'
        
        TextoContato.style.background = '#0c1d39'
        TextoContato.style.color = '#f4f8fb'
        TextoContato.style.transition = '1s'

        if (rede) rede.forEach(c => c.style.color = '#f4f8fb')

        Redes.style.background = '#0c1d39'
        Redes.style.color = '#f4f8fb'
        Redes.style.transition = '1s'


    } else {
        // modo claro
        //Cabeçario
        header.style.background = '#f4f8fb'
        header.style.color = '#0c1d39'

        nav.style.background = '#f4f8fb'
        nav.style.color = '#0c1d39'

        NavList.style.color = '#0c1d39'
        NavList.style.background = '#f4f8fb'

        ButtonMode.style.background = '#f4f8fb'
        ButtonMode.style.color = '#0c1d39'
        ButtonMode.innerHTML = `<i class="fa-solid fa-sun"></i>Claro`

        //Projetos
        Body.style.background = '#f4f8fb'
        Body.style.color = '#0c1d39'
        Body.style.transition = '1s'

        Projetos.style.background = '#f4f8fb'
        Projetos.style.color = '#0c1d39'

        if (CardProjeto) CardProjeto.forEach(c => c.style.background = '#99A0A5')

        if (CardTitle) CardTitle.forEach(c => c.style.color = '#f4f8fb')

        TituloP.style.color = '#0c1d39'

        //Contato
        contatoTitulo.style.color = '#0c1d39'
        contatoTitulo.style.transition = '1s'
        
        TextoContato.style.background = '#f4f8fb'
        TextoContato.style.color = '#0c1d39'

        Redes.style.background = '#f4f8fb'
        Redes.style.color = '#0c1d39'

        if (rede) rede.forEach(c => c.style.color = '#0c1d39')

    }
}