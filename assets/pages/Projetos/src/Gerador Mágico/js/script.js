const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");

hamburger.addEventListener("click", () => nav.classList.toggle("active"));

function modo() {
    // Cabeçario
    let Body = document.querySelector('.body')
    let header = document.querySelector('.header')
    let nav = document.querySelector('.nav')
    let NavList = document.querySelector('.nav-list')
    let ButtonMode = document.querySelector('.modo')

    // Projeto
    let tituloH1 = document.querySelector('.tituloH1')
    let DataProjeto = document.querySelector('.data-Projeto')
    let tecnologias = document.querySelectorAll('.tecnologias')
    let skill = document.querySelector('.skill')
    let conteudo = document.querySelector('.coteudo')
    let button1 = document.querySelector('.button1')
    let button2 = document.querySelector('.button2')

    // Contato
    let contato = document.querySelector('.contato')
    let contatoTitulo = document.querySelector('.contato-titulo')
    let redes = document.querySelector('.redes')
    let rede = document.querySelectorAll('.rede')

    document.body.classList.toggle('.modo')

    if (document.body.classList.contains('.modo')) {
        //modo escuro
        //Cabeçario
        Body.style.background = '#0c1d39'
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

        ButtonMode.style.background = '#0c1d39'
        ButtonMode.style.color = '#f4f8fb'
        ButtonMode.innerHTML = '<i class="fa-solid fa-moon"></i> Escuro'
        ButtonMode.style.transition = '1s'

        //projetos
        tituloH1.style.color = '#f4f8fb'
        tituloH1.style.transition = '1s'

        DataProjeto.style.color = '#f4f8fb'
        DataProjeto.style.transition = '1s'

        if (tecnologias) tecnologias.forEach(c => c.style.background = '#4F82A9')

        if (tecnologias) tecnologias.forEach(c => c.style.transition = '1s')

        skill.style.background = '#4f82a9'
        skill.style.transition = '1s'
        
        conteudo.style.color = '#f4f8fb'
        conteudo.style.transition = '1s'

        button1.style.background = '#4F82A9'
        button1.style.transition = '1s'

        button2.style.background = '#4F82A9'
        button2.style.transition = '1s'

        contato.style.color = '#f4f8fb'
        contato.style.background = '#0c1d39'
        contato.style.transition = '1s'

        contatoTitulo.style.color = '#f4f8fb'
        contatoTitulo.style.transition = '1s'

        redes.style.color = '#f4f8fb'
        redes.style.background = '#0c1d39'

        if (rede) rede.forEach(c => c.style.color = '#f4f8fb')
    } else {
        //modo claro

        //Cabeçario
        Body.style.background = '#f4f8fb'
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

        ButtonMode.style.background = '#f4f8fb'
        ButtonMode.style.color = '#0c1d39'
        ButtonMode.innerHTML = '<i class="fa-solid fa-sun"></i> Claro'
        ButtonMode.style.transition = '1s'

        //projetos
        tituloH1.style.color = '#0c1d39'
        tituloH1.style.transition = '1s'

        DataProjeto.style.color = '#0c1d39'
        DataProjeto.style.transition = '1s'

        if (tecnologias) tecnologias.forEach(c => c.style.background = '#0c1d39')

        if (tecnologias) tecnologias.forEach(c => c.style.transition = '1s')

        skill.style.background = '#0c1d39'

        conteudo.style.color = '#0c1d39'
        conteudo.style.transition = '1s'

        button1.style.background = '#0c1d39'
        button1.style.transition = '1s'

        button2.style.background = '#0c1d39'
        button2.style.transition = '1s'

        contato.style.color = '#0c1d39'
        contato.style.background = '#f4f8fb'
        contato.style.transition = '1s'

        contatoTitulo.style.color = '#0c1d39'
        contatoTitulo.style.transition = '1s'

        redes.style.color = '#0c1d39'
        redes.style.background = '#f4f8fb'

        if (rede) rede.forEach(c => c.style.color = '#0c1d39')
    }
}