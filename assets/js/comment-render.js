// renders comments dynamically
function renderComment(pageComments) {
  // select comment section and remove invisible class (display: none)
  let commentSection = document.querySelector('#comment-section')
  commentSection.classList.remove('invisible')

  // before loading, empty innerHTML content to avoid duplicate comments
  let commentDiv = document.querySelector('.main-comment')
  commentDiv.innerHTML = ''

  // insert new div with comments for each array item
  pageComments.forEach(comment => {
    let newDiv = `
      <div class="col">
        <div class="card border-light box-shadow-complete">
          <div class="card-body">
            <h5 class="card-title">${comment.name}</h5>
            <p class="card-text">${comment.message}</p>
            <p class="card-text"><small class="text-muted">${comment.email}</small></p>
          </div>
        </div>
      </div>
    `
    // insert as first child to keep comments in chronological order
    commentDiv.insertAdjacentHTML('afterbegin', newDiv)
  })
}
