const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]
const form = document.querySelector('quote__form')

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})

