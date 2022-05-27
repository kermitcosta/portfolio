function renderComment(pageComments) {
  let commentSection = document.querySelector('#comment-section')
  commentSection.classList.remove('invisible')

  let commentDiv = document.querySelector('.main-comment')
  commentDiv.innerHTML = ''

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
    commentDiv.insertAdjacentHTML('afterbegin', newDiv)
  })
}
