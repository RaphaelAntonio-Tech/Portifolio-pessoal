const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");

hamburger.addEventListener("click", () => nav.classList.toggle("active"));



function modo() {
    // Cabeçário (topo)
    let header = document.querySelector('.header')
    let button = document.querySelector('.modo')
    let navL = document.querySelector('.nav')
    let imagemP = document.querySelector('.img')
    let h1 = document.querySelector('.txtp')
    let paragrafo = document.querySelector('.paragrafo')
    let buttonP = document.querySelector('.buttonPrincipal')
    let body = document.querySelector('.body')
    let Navlist = document.querySelector('.nav-list')

    //Projetos
    let CardProjeto = document.querySelectorAll('.card-projetos')
    let CardTitle = document.querySelectorAll('.card-title')
    let titulo = document.querySelector('.titulo')
    let conteudo = document.querySelector('.coteudo')

    // Habilidades (oque eu faço)
    let TituloHabilidade = document.querySelector('.titulo-habilidade')
    let semiTituloHabilidade = document.querySelectorAll('.semi-titulo')
    let cardHabilidade = document.querySelectorAll('.card-habilidade')
    let serviços = document.querySelectorAll('.serviços')
    let containerh1 = document.querySelector('.container-h1')
    let Vercel = document.querySelector('.Vercel')

    let imagemTroca1 = document.querySelector('.imagem-troca1')
    let imagemTroca2 = document.querySelector('.imagem-troca2')
    let imagemTroca3 = document.querySelector('.imagem-troca3')
    let imagemTroca4 = document.querySelector('.imagem-troca4')
    let imagemTroca5 = document.querySelector('.imagem-troca5')
    let imagemTroca6 = document.querySelector('.imagem-troca6')

    // Contato 
    let contato = document.querySelector('.contato')
    let contatoTitulo = document.querySelector('.contato-titulo')
    let rede = document.querySelectorAll('.rede')

    document.body.classList.toggle('.modo')

    if (document.body.classList.contains('.modo')) {
        // modo escuro

        // Área principal (topo)
        button.innerHTML = `<i class="fa-solid fa-moon"></i>Escuro`
        button.style.color = '#f4f8fb'
        button.style.background = '#0c1d39'
        button.style.transition = '1s'

        Navlist.style.background = '#0c1d39'

        body.style.background = '#0c1d39'
        body.style.transition = '1s'

        navL.style.color = '#f4f8fb'
        navL.style.transition = '1s'

        buttonP.style.background = '#4F82A9'
        buttonP.style.transition = '1s'

        header.style.background = '#0C1D39'
        header.style.color = '#F4F8FB'
        header.style.transition = '1s'

        paragrafo.style.color = '#979CA6'
        paragrafo.style.transition = '1s'

        imagemP.style.background = '#4f82a9'
        imagemP.style.transition = '1s'

        //Projetos
        if (CardProjeto) CardProjeto.forEach(c => c.style.background = '#f4f8fb');

        conteudo.style.background = '#0c1d39'
        conteudo.style.transition = '1s'

        h1.style.color = '#F4F8FB'
        h1.style.transition = '1s'

        titulo.style.color = '#f4f8fb'

        if (CardTitle) CardTitle.forEach(c => c.style.color = '#0c1d39')

        // Habilidades (oque eu faço)

        if (cardHabilidade) cardHabilidade.forEach(c => c.style.color = '#f4f8fb')

        if (cardHabilidade) cardHabilidade.forEach(c => c.style.background = '#1a3d63')

        if (semiTituloHabilidade) semiTituloHabilidade.forEach(c => c.style.color = '#f4f8fb')

        if (serviços) serviços.forEach(c => c.style.background = '#1a3d63')
        if (serviços) serviços.forEach(c => c.style.color = '#f4f8fb')

        TituloHabilidade.style.color = '#f4f8fb'

        containerh1.style.color = '#f4f8fb'

        imagemTroca1.src = 'image/estrutura modo escuro.png'
        imagemTroca2.src = 'image/Visual modo escuro.png'
        imagemTroca3.src = 'image/Ajustes modo escuro.png'
        imagemTroca4.src = 'image/criação modo escuro.png'
        imagemTroca5.src = 'image/Responsividade modo escuro.png'
        imagemTroca6.src = 'image/Interatividade modo escuro.png'


        // Contato
        contato.style.color = '#f4f8fb'

        contatoTitulo.style.color = '#f4f8fb'

        if (rede) rede.forEach(c => c.style.color = '#f4f8fb')

    } else {
        //modo claro

        // Área principal (topo)
        header.style.background = '#f4f8fb'
        header.style.color = '#0c1d39'

        button.innerHTML = `<i class="fa-solid fa-sun"></i>Claro`
        button.style.color = '#0c1d39'
        button.style.background = '#f4f8fb'

        Navlist.style.background = '#f4f8fb'
        Navlist.style.transition = '1s'

        navL.style.color = '#0c1d39'
        navL.style.transition = '1s'

        body.style.background = '#f4f8fb'

        buttonP.style.background = '#0c1d39'

        imagemP.style.background = '#1C3E62'

        h1.style.color = '#4f82a9'

        paragrafo.style.color = '#0c1d39'

        //Projetos
        titulo.style.color = '#0c1d39'

        TituloHabilidade.style.color = '#0c1d39'

        conteudo.style.background = '#f4f8fb'

        if (CardProjeto) CardProjeto.forEach(c => c.style.background = '#99A0A5');

        if (CardTitle) CardTitle.forEach(c => c.style.color = '#f4f8fb')


        // Habilidades (oque eu faço)
        if (cardHabilidade) cardHabilidade.forEach(c => c.style.color = '#0c1d39')

        if (cardHabilidade) cardHabilidade.forEach(c => c.style.background = '#f4f8fb')

        if (semiTituloHabilidade) semiTituloHabilidade.forEach(c => c.style.color = '#0c1d39')

        if (serviços) serviços.forEach(c => c.style.background = '#f4f8fb')
        if (serviços) serviços.forEach(c => c.style.color = '#0c1d39')

        containerh1.style.color = '#0c1d39'
        
        imagemTroca1.src = "image/estrutura.png"
        imagemTroca2.src = "image/Visual.png"
        imagemTroca3.src = "image/Ajustes.png"
        imagemTroca4.src = "image/criação.png"
        imagemTroca5.src = "image/Responsividade.png"
        imagemTroca6.src = "image/Interatividade.png" 

        // Contato
        contato.style.color = '#0c1d39'

        contatoTitulo.style.color = '#0c1d39'

        if (rede) rede.forEach(c => c.style.color = '#0c1d39')
    }
}
