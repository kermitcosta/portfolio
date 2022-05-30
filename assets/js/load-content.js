window.addEventListener('load', function () {
  fetch('/assets/pages/navbar.html')
    .then(response => response.text())
    .then(text => (document.querySelector('#pf-navbar').innerHTML = text))

  fetch('/assets/pages/home.html')
    .then(response => response.text())
    .then(text => (document.querySelector('#home').innerHTML = text))

  fetch('/assets/pages/about.html')
    .then(response => response.text())
    .then(text => (document.querySelector('#about').innerHTML = text))

  fetch('/assets/pages/qualification.html')
    .then(response => response.text())
    .then(text => (document.querySelector('#qualification').innerHTML = text))

  fetch('/assets/pages/experience.html')
    .then(response => response.text())
    .then(text => (document.querySelector('#experience').innerHTML = text))

  fetch('/assets/pages/contact.html')
    .then(response => response.text())
    .then(text => (document.querySelector('#contact').innerHTML = text))

  fetch('/assets/pages/portfolio.html')
    .then(response => response.text())
    .then(text => (document.querySelector('#portfolio').innerHTML = text))

  fetch('/assets/pages/footer.html')
    .then(response => response.text())
    .then(text => (document.querySelector('#footer').innerHTML = text))
})
