const formButton = document.querySelector('#form-button')
const pageComments = []

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

  let commentSection = document.querySelector('#comment-section')
  commentSection.classList.remove('invisible')

  pageComments.push(newComment)
  // localStorage.setItem('Comentários', pageComments)

  renderComment(pageComments)

  form.reset()
})
