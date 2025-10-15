const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");

hamburger.addEventListener("click", () => nav.classList.toggle("active"));


function modo() {
    //Cabeçalho
    let header = document.querySelector('.header')
    let nav = document.querySelector('.nav')
    let NavList = document.querySelector('.nav-list')
    let ButtonMode = document.querySelector('.modo')
    let ItemsList = document.querySelectorAll('.items-list')
    // final
    let Container = document.querySelector('.container')
    let titulo = document.querySelector('.titulo')
    let rede = document.querySelectorAll('.rede')
    let conteudo = document.querySelector('.conteudo')

    document.body.classList.toggle('.modo')

    if (document.body.classList.contains('.modo')) {
        // modo escuro 
        //Cabeçalho
        header.style.background = '#0c1d39'
        header.style.color = '#f4f8fb'
        header.style.transition = '1s'

        nav.style.background = '#0c1d39'
        nav.style.color = '#f4f8fb'
        nav.style.transition = '1s'

        NavList.style.background = '#0c1d39'
        NavList.style.color = '#f4f8fb'
        NavList.style.transition = '1s'
        
        if (ItemsList) ItemsList.forEach(c => c.style.color = '#f4f8fb')

        ButtonMode.innerHTML = `<i class="fa-solid fa-moon"></i> Escuro`
        ButtonMode.style.background = '#0c1d39'
        ButtonMode.style.color = '#f4f8fb'
        ButtonMode.style.transition = '1s'

        //final
        Container.style.background = '#0c1d39'
        Container.style.color = '#f4f8fb'
        Container.style.transition = '1s'

        conteudo.style.color = '#f4f8fb'
        conteudo.style.transition = '1s'

        titulo.style.color = '#f4f8fb'
        titulo.style.transition = '1s'

        if (rede) rede.forEach(c => c.style.color = '#f4f8fb')
        if (rede) rede.forEach(c => c.style.transition = '1s')

    } else {
        // modo claro
        //Cabeçalho
        header.style.background = '#f4f8fb'
        header.style.color = '#0c1d39'
        header.style.transition = '1s'

        nav.style.background = '#f4f8fb'
        nav.style.color = '#0c1d39'
        nav.style.transition = '1s'

        NavList.style.background = '#f4f8fb'
        NavList.style.color = '#0c1d39'
        NavList.style.transition = '1s'
        
        if (ItemsList) ItemsList.forEach(c => c.style.color = '#0c1d39')
        if (ItemsList) ItemsList.forEach(c => c.style.transition = '1s')

        ButtonMode.innerHTML = `<i class="fa-solid fa-sun"></i> Claro`
        ButtonMode.style.background = '#f4f8fb'
        ButtonMode.style.color = '#0c1d39'
        ButtonMode.style.transition = '1s'

        //final
        Container.style.background = '#f4f8fb'
        Container.style.color = '#0c1d39'

        conteudo.style.color = '#0c1d39'
        conteudo.style.transition = '1s'

        titulo.style.color = '#0c1d39'
        titulo.style.transition = '1s'

        if (rede) rede.forEach(c => c.style.color = '#0c1d39')
        if (rede) rede.forEach(c => c.style.transition = '1s')

    }
}