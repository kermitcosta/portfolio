// selec form button
const formButton = document.querySelector('#form-button')
// initializes comment array empty
const pageComments = []

// hear the click on the submit button to post the comment
formButton.addEventListener('click', function () {
    // selection of all form inputs
    let form = document.querySelector('#comment-form')
    let formName = document.querySelector('.form-name').value
    let formEmail = document.querySelector('.form-email').value
    let formMessage = document.querySelector('.form-message').value

    //creates an object with the input data
    let newComment = {
        name: formName,
        email: formEmail,
        message: formMessage
    }

    // check input validation (form-validation.js)
    if (formValidation(newComment)) {
        //add object to array
        pageComments.push(newComment)

        //add object to localStorage
        localStorage.setItem('comments', JSON.stringify(pageComments))

        //clear error messages
        errorMessage.textContent = ''

        //render comments (comment-render.js)
        renderComment(pageComments)

        //clear all form fields
        form.reset()
    }
})

//character counter
const text_max = 200
$('#count_message').html('0 / ' + text_max)

$('#floatingTextarea').keyup(function () {
    var text_length = $('#floatingTextarea').val().length

    $('#count_message').html(text_length + ' / ' + text_max)
})
