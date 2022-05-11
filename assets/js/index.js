// Menu //

//Show mobile version menu
function showMenu() {
  document.querySelector('.menu').style.display = 'block'
}

//Hide mobile version menu
function closeMenu() {
  document.querySelector('.menu').style.display = 'none'
}

//Activate menu based on section
const sections = document.querySelectorAll('section')
const navLi = document.querySelectorAll('nav ul li a')

window.addEventListener('scroll', () => {
  let current = ''
  sections.forEach(section => {
    const sectionTop = section.offsetTop
    const sectionHeight = section.clientHeight
    if (scrollY >= sectionTop - (sectionHeight - 90)) {
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

//Get GitHub Profile Picture
function getGitHubProfilePicture() {
  const url = 'https://api.github.com/users/kermitcosta'

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userPicture.src = data.avatar_url
    })
}

getGitHubProfilePicture()
