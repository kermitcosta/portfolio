const errorMessage = document.querySelector('.error-message')
function formValidation(comment) {
  if (comment.name == '' || comment.email == '' || comment.message == '') {
    errorMessage.textContent = 'Preencha todos os campos'
    return false
  }
  return true
}
