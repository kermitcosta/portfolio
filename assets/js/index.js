//Get GitHub Profile Picture
function getGitHubProfilePicture() {
  const url = 'https://api.github.com/users/kermitcosta'

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userPicture.src = data.avatar_url
    })
}

getGitHubProfilePicture()

//Reveal effect
window.addEventListener('scroll', reveal)

function reveal() {
  let reveals = document.querySelectorAll('.reveal')

  for (let i = 0; i < reveals.length; i++) {
    {
      let windowHeight = window.innerHeight
      let revealTop = reveals[i].getBoundingClientRect().top
      let revealPoint = 250

      if (revealTop < windowHeight - revealPoint) {
        reveals[i].classList.add('active-reveal')
      } else {
        reveals[i].classList.remove('active-reveal')
      }
    }
  }
}

// Tech Description
const javaScript = {
  name: 'JavaScript',
  definition:
    'JavaScript is most known as the scripting language for Web pages, but used in many non-browser environments as well such as node.js or Apache CouchDB. It is a prototype-based, multi-paradigm scripting language that is dynamic,and supports object-oriented, imperative, and functional programming styles.',
  pros: 'Flexível, Rápido, Leve',
  cons: 'Con1, con2, con3',
  companies: 'AirBnb, Instagram, Discord, Figma, ebay, Tinder',
  site: 'https://www.javascript.com/'
}

const html5 = {
  name: 'HTML5',
  definition:
    'HTML5 is a core technology markup language of the Internet used for structuring and presenting content for the World Wide Web. As of October 2014 this is the final and complete fifth revision of the HTML standard of the World Wide Web Consortium (W3C). The previous version, HTML 4, was standardised in 1997.',
  pros: 'Compatibilidade, Modernidade e Portabilidade',
  cons: 'Con1, con2, con3',
  companies: 'Udemy, Reddit, StackShare, BlaBlaCar, 9Gag, ViaVarejo',
  site: 'https://www.w3.org/'
}

const css3 = {
  name: 'CSS3',
  definition:
    'CSS3 is the latest evolution of the Cascading Style Sheets language and aims at extending CSS2.1. It brings a lot of long-awaited novelties, like rounded corners, shadows, gradients, transitions or animations, as well as new layouts like multi-columns, flexible box or grid layouts. Experimental parts are vendor-prefixed and should either be avoided in production environments, or used with extreme caution as both their syntax and semantics can change in the future.',
  pros: 'Customizável, ',
  cons: 'Con1, con2, con3',
  companies: 'ViaVarejo, MasterCard, ROBLOX, Sendcloud, Superchat, TradingView',
  site: 'https://www.w3.org/Style/CSS/Overview.en.html'
}

const bootStrap = {
  name: 'BootStrap',
  definition:
    'Bootstrap is the most popular HTML, CSS, and JS framework for developing responsive, mobile first projects on the web. Bootstrap is a tool in the Front-End Frameworks category of a tech stack. Bootstrap is an open source tool with 157.3K GitHub stars and 76.7K GitHub forks.',
  pros: 'Compatibilidade, Modernidade e Portabilidade',
  cons: 'Con1, con2, con3',
  companies: 'Spotify, LinkedIn, Snapchat, Duolingo, Alibaba.com, Onefootball',
  site: 'https://getbootstrap.com/'
}

const techModal = document.getElementById('techModal')
techModal.addEventListener('show.bs.modal', function (event) {
  let button = event.relatedTarget

  let clicked = button.getAttribute('data-bs-tech')

  // Update the modal's content.
  let modalTitle = techModal.querySelector('.modal-title')

  switch (clicked) {
    case 'javaScript':
      modalTitle.textContent = javaScript.name
      techDefinition.textContent = javaScript.definition
      techPros.textContent = javaScript.pros
      techCons.textContent = javaScript.cons
      techProjects.textContent = javaScript.companies
      techPage.href = javaScript.site
      break

    case 'html5':
      modalTitle.textContent = html5.name
      techDefinition.textContent = html5.definition
      techPros.textContent = html5.pros
      techCons.textContent = html5.cons
      techProjects.textContent = html5.companies
      techPage.href = html5.site
      break

    case 'css3':
      modalTitle.textContent = css3.name
      techDefinition.textContent = css3.definition
      techPros.textContent = css3.pros
      techCons.textContent = css3.cons
      techProjects.textContent = css3.companies
      techPage.href = css3.site
      break

    case 'bootStrap':
      modalTitle.textContent = bootStrap.name
      techDefinition.textContent = bootStrap.definition
      techPros.textContent = bootStrap.pros
      techCons.textContent = bootStrap.cons
      techProjects.textContent = bootStrap.companies
      techPage.href = bootStrap.site
      break
  }
})
