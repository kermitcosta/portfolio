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
    'JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma (protótipos, orientado a objeto, imperativo e, funcional). A linguagem permite páginas da Web interativas e, portanto, é uma parte essencial dos aplicativos da web. A grande maioria dos sites usa, e todos os principais navegadores têm um mecanismo JavaScript dedicado para executá-lo.',
  pros: 'Popularidade, Rapidez e Versatilidade.',
  cons: 'Segurança client-side, interpretações diferentes em browsers diferentes e pode ser desabilitado no navegador.',
  companies: 'AirBnb, Instagram, Discord, Figma, Ebay, Tinder.',
  site: 'https://www.javascript.com/',
  video: 'https://www.youtube.com/embed/Ri76yOpLrNg'
}

const html5 = {
  name: 'HTML5',
  definition:
    'HTML5 é uma linguagem de marcação para a Web e é uma tecnologia chave da Internet. É a quinta versão da linguagem HTML. Esta nova versão traz consigo importantes mudanças quanto ao papel do HTML no mundo da Web, através de novas funcionalidades como semântica e acessibilidade. Possibilita o uso de novos recursos antes possíveis apenas com a aplicação de outras tecnologias. Sua essência tem sido melhorar a linguagem com o suporte para as mais recentes multimídias, enquanto a mantém facilmente legível por seres humanos e consistentemente compreendida por computadores e outros dispositivos.',
  pros: 'Organização semântica, boa performance e experiência de usuário moderna.',
  cons: 'Requer navegadores modernos, necessita de outras linguagens para melhor estilização e armazenamento local de dados limitado.',
  companies: 'Udemy, Reddit, StackShare, BlaBlaCar, 9Gag, ViaVarejo.',
  site: 'https://www.w3.org/',
  video: 'https://www.youtube.com/embed/4dQtz1PpY9A'
}

const css3 = {
  name: 'CSS3',
  definition:
    'CSS3 é a última versão do Cascading Style Sheets, que é um mecanismo para adicionar estilo (cores, fontes, espaçamento, etc.) a um documento web. O código CSS pode ser aplicado diretamente nas tags ou ficar contido dentro das tags <style>. Também é possível, em vez de colocar a formatação dentro do documento, criar um link para um arquivo CSS que contém os estilos. Assim, quando se quiser alterar a aparência dos documentos vinculados a este arquivo CSS, basta modifica-lo.',
  pros: 'Reutilização de estilo para vários elementos, poucas linhas de código para customização (velocidade) e ajuda na responsividade.',
  cons: 'Pode haver problema de compatiblidade de navegadores, a velocidade da página é comprometida se o códico css for muito longo e pode produzir um código muito complexo dependendo do tamanho da aplicação.',
  companies:
    'ViaVarejo, MasterCard, ROBLOX, Sendcloud, Superchat, TradingView.',
  site: 'https://www.w3.org/Style/CSS/Overview.en.html',
  video: 'https://www.youtube.com/embed/229xfk3EEM8'
}

const bootStrap = {
  name: 'BootStrap',
  definition:
    'Bootstrap é um framework web com código-fonte aberto para desenvolvimento de componentes de interface e front-end para sites e aplicações web usando HTML, CSS e JavaScript, baseado em modelos de design para a tipografia, melhorando a experiência do usuário em um site amigável e responsivo. O Bootstrap é um dos projetos mais bem avaliados no site GitHub, com mais de 111 600 estrelas e 51 500 forks.',
  pros: 'Compatibilidade com os navegadores, rapidez para aplicar estilizações complexas e amigável aos iniciantes.',
  cons: 'Tira um pouco de originalidade dos projetos por apresentar componentes prontos, a semantica não é tão clara e é mais difícil de customizar para que vire um design original.',
  companies: 'Spotify, LinkedIn, Snapchat, Duolingo, Alibaba.com, Onefootball.',
  site: 'https://getbootstrap.com/',
  video: 'https://www.youtube.com/embed/zEi62PpFezU'
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
      techVideo.src = javaScript.video
      break

    case 'html5':
      modalTitle.textContent = html5.name
      techDefinition.textContent = html5.definition
      techPros.textContent = html5.pros
      techCons.textContent = html5.cons
      techProjects.textContent = html5.companies
      techPage.href = html5.site
      techVideo.src = html5.video
      break

    case 'css3':
      modalTitle.textContent = css3.name
      techDefinition.textContent = css3.definition
      techPros.textContent = css3.pros
      techCons.textContent = css3.cons
      techProjects.textContent = css3.companies
      techPage.href = css3.site
      techVideo.src = css3.video
      break

    case 'bootStrap':
      modalTitle.textContent = bootStrap.name
      techDefinition.textContent = bootStrap.definition
      techPros.textContent = bootStrap.pros
      techCons.textContent = bootStrap.cons
      techProjects.textContent = bootStrap.companies
      techPage.href = bootStrap.site
      techVideo.src = bootStrap.video
      break
  }
})
