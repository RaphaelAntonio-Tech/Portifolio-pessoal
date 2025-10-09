const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");

hamburger.addEventListener("click", () => nav.classList.toggle("active"));


function modo() {
  // Cabeçario 
  let header = document.querySelector('.header')
  let escuro = document.querySelector('.modo')
  let nav = document.querySelector('.nav')
  let navList = document.querySelector('.nav-list')


  // Apresentação
  let sobre = document.querySelector('.sobre')
  let buttonContainer = document.querySelector('.button')
  let traço = document.querySelector('.traço')
  let inderlane = document.querySelector('.inderlane')

  document.body.classList.toggle('.modo')
  if (document.body.classList.contains('.modo')) {

    // Modo escuro

    // Cabeçario
    header.style.background = '#0C1D39'
    header.style.color = '#f4f8fb'
    header.style.transition = '1s'

    escuro.style.background = '#0C1D39'
    escuro.style.color = '#F4F8FB'
    escuro.innerHTML = '<i class="fa-solid fa-moon"></i> Escuro'
    escuro.style.transition = '1s'

    nav.style.color = '#f4f8fb'
    nav.style.transition = '1s'

    navList.style.background = '#0c1d39'
    navList.style.transition = '1s'



    // Apresentação
    sobre.style.background = '#0c1d39'
    sobre.style.color = '#f4f8fb'
    sobre.style.transition = '1s'

    buttonContainer.style.background = '#4f82a9'
    buttonContainer.style.transition = '1s'

    traço.style.background = '#f4f8fb'

    inderlane.style.background = '#f4f8fb'

  } else {

    // Modo Claro

    // Cabeçario
    header.style.background = '#f4f8fb'
    header.style.color = '#0c1d39'
    header.style.transition = '1s'

    escuro.style.background = '#f4f8fb'
    escuro.style.color = '#0c1d39'
    escuro.innerHTML = '<i class="fa-solid fa-sun"></i> Claro'

    nav.style.color = '#0c1d39'

    navList.style.background = '#f4f8fb'
    navList.style.transition = '1s'

    // Apresentação
    sobre.style.background = '#f4f8fb'
    sobre.style.color = '#0c1d39'

    buttonContainer.style.background = '#0c1d39'

    traço.style.background = '#0c1d39'

    traço.style.background = '#0c1d39'

  }
}