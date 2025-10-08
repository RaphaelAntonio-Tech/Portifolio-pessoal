const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");

hamburger.addEventListener("click", () => nav.classList.toggle("active"));


function modo() {
    let hero = document.querySelector('.esquerda')
    let escuro = document.querySelector('.modo')
    let burguer = document.querySelector('.hamburger')
    let header = document.querySelector('.header')
    let button = document.querySelector('.entrarbtn')
    let direita = document.querySelector('.direita')
    let img = document.querySelector('.foto')
    
  

    document.body.classList.toggle('.modo')
    if ( document.body.classList.contains('.modo')) {
        hero.style.background = '#0C1D39'
        hero.style.color = '#F4F8FB'
        hero.style.transition = '1s'

    header.style.background = '#0C1D39'
    header.style.color = '#F4F8FB'
    header.style.transition = '1s'

    direita.style.background = '#4f82a9'
    direita.style.transition = '1s'

    img.style.background = '#0C1D39'
    img.style.transition = '1s'

    button.style.background = '#4f82a9'
    button.style.transition = '1s'

    escuro.style.background = '#0C1D39'
    escuro.style.color = '#F4F8FB'
    escuro.innerHTML = '<i class="fa-solid fa-moon"></i> Escuro'
    escuro.style.transition = '1s'
    
    burguer.style.transition = '1s'
    burguer.style.color = '#f4f8fb'

 } else {
    hero.style.background = '#f4f8fb'
    hero.style.color = '#0c1d39'

    header.style.background = '#f4f8fb'
    header.style.color = '#0c1d39'
    
    direita.style.background = '#0c1d39'
    
    img.style.background = '#4f82a9'
     
    button.style.background = '#0c1d39'
    
    escuro.style.background = '#f4f8fb'
    escuro.style.color = '#0c1d39'
    escuro.innerHTML = '<i class="fa-solid fa-sun"></i> Claro'

    burguer.style.color = '#0c1d39'
 }    
}

