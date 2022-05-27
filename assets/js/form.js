const formButton = document.querySelector('#form-button')
const pageComments = []

function checkStorage() {
  let loadedComments
  if (localStorage.length > 0) {
    loadedComments = JSON.parse(localStorage.getItem('comments'))
    loadedComments.forEach(comment => {
      pageComments.push(comment)
    })
    renderComment(pageComments)
  }
}

formButton.addEventListener('click', function () {
  let form = document.querySelector('form')
  let formName = document.querySelector('.form-name').value
  let formEmail = document.querySelector('.form-email').value
  let formMessage = document.querySelector('.form-message').value

  let newComment = {
    name: formName,
    email: formEmail,
    message: formMessage
  }

  if (formValidation(newComment)) {
    pageComments.push(newComment)
    localStorage.setItem('comments', JSON.stringify(pageComments))

    errorMessage.textContent = ''

    renderComment(pageComments)

    form.reset()
  }
})
