// Menu //

//Função para mostrar o menu na versão mobile
function showMenu() {
  document.querySelector('.menu').style.display = 'block'
}

//Função para fechar o menu na versão mobile
function closeMenu() {
  document.querySelector('.menu').style.display = 'none'
}

//Ativar menu quando muda a seção
const sections = document.querySelectorAll('section')
const navLi = document.querySelectorAll('nav ul li a')

window.addEventListener('scroll', () => {
  let current = ''
  sections.forEach(section => {
    const sectionTop = section.offsetTop
    const sectionHeight = section.clientHeight
    if (scrollY >= sectionTop - sectionHeight) {
      current = section.getAttribute('id')
    }
  })
  navLi.forEach(a => {
    a.classList.remove('active')
    if (a.classList.contains(current)) {
      a.classList.add('active')
    }
  })
})
