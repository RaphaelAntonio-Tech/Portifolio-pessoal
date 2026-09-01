function openMenu() {
    let shadow = document.querySelector(".background")
    let navlistResponsive = document.querySelector('.navlist-responsive')
    shadow.style.display = 'block'

    navlistResponsive.style.left = '34%'

}

function closeMenu() {
    let shadow = document.querySelector('.background')
    let navlistResponsive = document.querySelector('.navlist-responsive')

    shadow.style.display = 'none'
    navlistResponsive.style.left = '100%'
}



function modo() {
    /*  ==========================================
     HEADER (CABEÇARIO)
     ================================================ */

    let body = document.querySelector('.body')
    let header = document.querySelector('.header')
    let Logo = document.querySelector('.logo')
    let navList = document.querySelectorAll('.item-list')
    let buttonMode = document.querySelector('.modo')
    let navlistResponsive = document.querySelector('.navlist-responsive')
    let buttonCloseHamburguer = document.querySelector('.closeHamburguer')
    let buttonHamburguer = document.querySelector('.hamburguer-menu')

    // == Apresentação == //

    let imagemP = document.querySelector('.img-apresentacao')
    let paragrafo = document.querySelector('.paragrafo')
    let buttonLinkedIn = document.querySelector('.button-linkedIn')
    let buttonInstragram = document.querySelector('.button-instagram')
    let buttonGithub = document.querySelector('.button-gitHub')

    // === Área do sobre === //

    let titleSobre = document.querySelectorAll('.h1-sobre')
    let pagrafoSobre = document.querySelectorAll('.p-sobre')
    let paragrafoSobre = document.querySelectorAll('.paragrafo-sobre')
    let mapa1 = document.querySelector('.troca-img1')
    let mapa2 = document.querySelector('.troca-img2')

    // === Área dos serviços === //
    let conteudoCard = document.querySelectorAll('.card-servico')
    let titleCard = document.querySelectorAll('.titulo-card')
    let paragrafoCard = document.querySelectorAll('.paragrafo-card')
    let listCard = document.querySelectorAll('.list-tech')
    let cardEmail = document.querySelector('.card-email-container')
    let  titleEmail = document.querySelector('.title-email')
    let paragrafoEmail = document.querySelector('.paragrafo-email')


    // === Projetos === //

    let CardProjeto = document.querySelectorAll('.card-projetos')
    let CardTitle = document.querySelectorAll('.card-title')
    let titulo = document.querySelector('.titulo')
    let conteudo = document.querySelector('.coteudo')

    // === Habilidades (oque eu faço) === //

    let TituloHabilidade = document.querySelector('.titulo-habilidade')
    let semiTituloHabilidade = document.querySelectorAll('.semi-titulo')
    let cardHabilidade = document.querySelectorAll('.card-habilidade')
    let serviços = document.querySelectorAll('.serviços')
    let containerh1 = document.querySelector('.container-h1')



    // === Contato === //

    let contato = document.querySelector('.contato')
    let contatoTitulo = document.querySelector('.contato-titulo')
    let rede = document.querySelectorAll('.rede')

    document.body.classList.toggle('.modo')

    if (document.body.classList.contains('.modo')) {
        // modo escuro

        // Área principal (topo)
        body.style.background = '#0C1D39'
        body.style.transition = '1s'

        header.style.background = '#0C1D39'
        header.style.transition = '1s'

        Logo.style.color = '#f4f8fb'
        Logo.style.transition = '1s'

        if (navList) navList.forEach(c => c.style.color = '#4f82a9');

        buttonMode.innerHTML = ` <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
	<path d="M0 0h512v512H0z" fill="none" />
	<path fill = '#f4f8fb'  fill-rule="evenodd" d="M277.333 405.333v85.333h-42.667v-85.333zm99.346-58.824l60.34 60.34l-30.17 30.17l-60.34-60.34zm-241.359 0l30.17 30.17l-60.34 60.34l-30.17-30.17zM256 139.353c64.422 0 116.647 52.224 116.647 116.647c0 64.422-52.225 116.647-116.647 116.647A116.427 116.427 0 0 1 139.352 256c0-64.423 52.225-116.647 116.648-116.647m0 42.666c-40.859 0-73.981 33.123-73.981 74.062a73.76 73.76 0 0 0 21.603 52.296c13.867 13.867 32.685 21.64 52.378 21.603zm234.666 52.647v42.667h-85.333v-42.667zm-384 0v42.667H21.333v-42.667zM105.15 74.98l60.34 60.34l-30.17 30.17l-60.34-60.34zm301.7 0l30.169 30.17l-60.34 60.34l-30.17-30.17zM277.332 21.333v85.333h-42.667V21.333z" />
</svg>
`
        buttonMode.style.background = '#0c1d39'
        buttonMode.style.transition = '1s'

        navlistResponsive.style.background = '#0C1D39'
        navlistResponsive.style.transition = '1s'

        buttonCloseHamburguer.style.fill = '#ffff'

        buttonHamburguer.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24">
	<path d="M0 0h24v24H0z" fill="none" />
	<path fill="#f4f8fb" d="M3 18v-2h18v2zm0-5v-2h18v2zm0-5V6h18v2z" />`
        buttonHamburguer.style.background = "#0c1d39"
        buttonHamburguer.style.transition = "1s"

        paragrafo.style.color = '#979CA6'
        paragrafo.style.transition = '1s'

        imagemP.style.background = '#4f82a9'
        imagemP.style.transition = '1s'

        buttonLinkedIn.style.backgroundColor = '#0c1d39'
        buttonLinkedIn.style.color = '#ffff'
        buttonLinkedIn.style.fill = '#ffff'
        buttonLinkedIn.style.transition = '1s'

        buttonInstragram.style.backgroundColor = '#0c1d39'
        buttonInstragram.style.color = '#ffff'
        buttonInstragram.style.fill = '#ffff'
        buttonInstragram.style.transition = '1s'

        buttonGithub.style.backgroundColor = '#0c1d39'
        buttonGithub.style.color = '#ffff'
        buttonGithub.style.fill = '#ffff'
        buttonGithub.style.transition = '1s'

        // === Área do sobre === //

        if (titleSobre) titleSobre.forEach(c => c.style.color = "#ffff")
        if (titleSobre) titleSobre.forEach(c => c.style.transition = '1s')

        if (pagrafoSobre) pagrafoSobre.forEach(c => c.style.color = '#979CA6')
        if (pagrafoSobre) pagrafoSobre.forEach(c => c.style.transition = '1s')

        if (paragrafoSobre) paragrafoSobre.forEach(c => c.style.color = '#979CA6');

        mapa1.src = "assets/image/mapa tech - dark.png"
        mapa2.src = "assets/image/mapa tech - dark.png"

        // === Área dos serviços === //
        if (conteudoCard) conteudoCard.forEach(c => c.style.background = '#1B3F64')
        if (conteudoCard) conteudoCard.forEach(c => c.style.border = '2px solid #4F82A9')

        if (titleCard) titleCard.forEach(c => c.style.color = '#F6FBFC')

        if (paragrafoCard) paragrafoCard.forEach(c => c.style.color = '#4f82a9')

        if (listCard) listCard.forEach(c => c.style.color = '#4f82a9')

        cardEmail.style.background = '#1b3f64'
        cardEmail.style.border = '2px solid #4f82a9'

        titleEmail.style.color = '#F6FBFC'
        
        paragrafoEmail.style.color = '#4f82a9'


    } else {
        //modo claro

        // Área principal (topo)
        body.style.background = '#f4f8fb'
        header.style.background = '#ffff'
        header.style.transition = '1s'

        Logo.style.color = '#0c1d39'
        Logo.style.transition = '1s'

        if (navList) navList.forEach(c => c.style.color = '#0c1d39');
        if (navList) navList.forEach(c => c.style.transition = '1s')   

        buttonMode.innerHTML = `  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M0 0h24v24H0z" fill="none" />
                        <path
                            d="M12.741 20.917a9.4 9.4 0 0 1-1.395-.105a9.141 9.141 0 0 1-1.465-17.7a1.18 1.18 0 0 1 1.21.281a1.27 1.27 0 0 1 .325 1.293a8.1 8.1 0 0 0-.353 2.68a8.27 8.27 0 0 0 4.366 6.857a7.6 7.6 0 0 0 3.711.993a1.242 1.242 0 0 1 .994 1.963a9.15 9.15 0 0 1-7.393 3.738M10.261 4.05a.2.2 0 0 0-.065.011a8.137 8.137 0 1 0 9.131 12.526a.22.22 0 0 0 .013-.235a.23.23 0 0 0-.206-.136a8.6 8.6 0 0 1-4.188-1.116a9.27 9.27 0 0 1-4.883-7.7a9.1 9.1 0 0 1 .4-3.008a.29.29 0 0 0-.069-.285a.18.18 0 0 0-.133-.057" />
                    </svg>`
        buttonMode.style.color = '#0c1d39'
        buttonMode.style.background = '#ffff'

        
        navlistResponsive.style.background = '#f6fafd'
        navlistResponsive.style.transition = '1s'

        buttonCloseHamburguer.style.fill = '#0c1d39'

        buttonHamburguer.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24">
	<path d="M0 0h24v24H0z" fill="none" />
	<path fill="#0c1d39" d="M3 18v-2h18v2zm0-5v-2h18v2zm0-5V6h18v2z" />`
        buttonHamburguer.style.background = "#ffff"
        buttonHamburguer.style.transition = "1s"


        imagemP.style.background = '#1C3E62'

        paragrafo.style.color = '#0c1d39a9'

        buttonLinkedIn.style.backgroundColor = '#f4f8fb'
        buttonLinkedIn.style.color = '#0c1d39a9'
        buttonLinkedIn.style.fill = '#0c1d39a9'


        buttonInstragram.style.backgroundColor = '#f4f8fb'
        buttonInstragram.style.color = '#0c1d39a9'
        buttonInstragram.style.fill = '#0c1d39a9'


        buttonGithub.style.backgroundColor = '#f4f8fb'
        buttonGithub.style.color = '#0c1d39a9'
        buttonGithub.style.fill = '#0c1d39a9'

        // === Área do sobre === //

        if (titleSobre) titleSobre.forEach(c => c.style.color = "#0C1D39")

        if (paragrafoSobre) paragrafoSobre.forEach(c => c.style.color = '#0c1d39a9');

        mapa1.src = "assets/image/mapa tech - light.png"
        mapa2.src = "assets/image/mapa tech - light.png"

        // === Área dos serviços === //
        if (conteudoCard) conteudoCard.forEach(c => c.style.background = '#FFFF')
        if (conteudoCard) conteudoCard.forEach(c => c.style.border = '2px solid #CED2Dd')

        if (titleCard) titleCard.forEach(c => c.style.color = '#0C1D39')

        if (paragrafoCard) paragrafoCard.forEach(c => c.style.color = '#0c1d39')

        if (listCard) listCard.forEach(c => c.style.color = '#0c1d39')

        cardEmail.style.background = '#FFFF'
        cardEmail.style.border = '2px solid #CED2Dd'

        titleEmail.style.color = '#0C1D39'
        
        paragrafoEmail.style.color = '#4f82a9'


      
    }
}

// todos os projetos

function AllProject() {
    const Professionalstudies = document.querySelectorAll('.Professionalstudies')
    const Studies = document.querySelectorAll('.studies')
    const Professional = document.querySelectorAll('.Professional')

    if (Professionalstudies) Professionalstudies.forEach(c => c.style.display = "block")

    if (Studies) Studies.forEach(c => c.style.display = "block")
        
    if (Professional) Professional.forEach(c => c.style.display = "block")    
}

function ProjectStudies() {
    const Professionalstudies = document.querySelectorAll('.Professionalstudies')
    const Studies = document.querySelectorAll('.studies')
    const Professional = document.querySelectorAll('.Professional')

    if (Professionalstudies) Professionalstudies.forEach(c => c.style.display = "none")

    if (Studies) Studies.forEach(c => c.style.display = "block")
        
    if (Professional) Professional.forEach(c => c.style.display = "none")    
}

function ProjectProfessional () {
    const Professionalstudies = document.querySelectorAll('.Professionalstudies')
    const Studies = document.querySelectorAll('.studies')
    const Professional = document.querySelectorAll('.Professional')

    if (Professionalstudies) Professionalstudies.forEach(c => c.style.display = "none")

    if (Studies) Studies.forEach(c => c.style.display = "none")
        
    if (Professional) Professional.forEach(c => c.style.display = "block")    
}


function Professionalstudies() {
    const Professionalstudies = document.querySelectorAll('.Professionalstudies')
    const Studies = document.querySelectorAll('.studies')
    const Professional = document.querySelectorAll('.Professional')

    if (Professionalstudies) Professionalstudies.forEach(c => c.style.display = "block")

    if (Studies) Studies.forEach(c => c.style.display = "none")
        
    if (Professional) Professional.forEach(c => c.style.display = "none")    
}