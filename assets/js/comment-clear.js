const clearButton = document.querySelector('#clear-button')

clearButton.addEventListener('click', function () {
  localStorage.clear()

  pageComments.length = 0

  let commentSection = document.querySelector('#comment-section')
  commentSection.classList.add('invisible')
})
