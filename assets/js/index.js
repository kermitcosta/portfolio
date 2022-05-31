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

//localStorage check to load comments
function checkStorage() {
  let loadedComments
  if (localStorage.length > 0) {
    loadedComments = JSON.parse(localStorage.getItem('comments'))
    loadedComments.forEach(comment => {
      pageComments.push(comment)
    })
    //renders the comments (comment-render.js)
    renderComment(pageComments)
  }
}

//Reveal effect
window.addEventListener('scroll', reveal)

function reveal() {
  let reveals = document.querySelectorAll('.reveal')

  for (let i = 0; i < reveals.length; i++) {
    {
      let windowHeight = window.innerHeight
      let revealTop = reveals[i].getBoundingClientRect().top
      let revealPoint = 250

      if (revealTop < windowHeight - revealPoint) {
        reveals[i].classList.add('active-reveal')
      } else {
        reveals[i].classList.remove('active-reveal')
      }
    }
  }
}
