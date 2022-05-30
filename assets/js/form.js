const formButton = document.querySelector('#form-button')
const pageComments = []

formButton.addEventListener('click', function () {
  let form = document.querySelector('#comment-form')
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
