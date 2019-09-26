fetch('https://ghibliapi.herokuapp.com/films')
  .then(response => response.json())
  .then(data => {
    data.forEach(movie => {
      // Create a div with card class
      const card = document.createElement('div')
      card.setAttribute('class', 'card')

      // Create h1 and set title
      const h1 = document.createElement('h1')
      h1.textContent = movie.title

      // Create p and set description
      const p = document.createElement('p')
      p.textContent = movie.description

      // Append cards to container and add h1 and p to each card
      container.appendChild(card)
      card.appendChild(h1)
      card.appendChild(p)
    })
  })
  .catch(function () {
    const errorMessage = document.createElement('marquee')
    errorMessage.textContent = 'Ohno! it\'s not working'
    app.appendChild(errorMessage)
    console.log('An error has occured! Time to panic!')
  })

const app = document.getElementById('root')
const logo = document.createElement('img')
logo.src = 'logo.png'

const container = document.createElement('div')
container.setAttribute('class', 'container')

app.appendChild(logo)
app.appendChild(container)
