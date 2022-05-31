// button select
const clearButton = document.querySelector('#clear-button')

clearButton.addEventListener('click', function () {
  // local storage cleared
  localStorage.clear()

  // comment array cleared
  pageComments.length = 0

  // set invisible class (display: none) to hide comment section
  let commentSection = document.querySelector('#comment-section')
  commentSection.classList.add('invisible')
})
