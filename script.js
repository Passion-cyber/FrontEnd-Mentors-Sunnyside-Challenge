const openButton = document.querySelector('.open-btn')
const closeButton = document.querySelector('.close-btn')
const navContainer = document.querySelector('nav')

openButton.addEventListener('click', () => {
    navContainer.classList.add('show')
})

closeButton.addEventListener('click', () => {
    navContainer.classList.remove('show')
})


//Scroll Reaveal
window.sr = ScrollReveal();
sr.reveal(".logo", {
  duration: 2000,
  origin: "top",
  distance: "100px",
});

sr.reveal("nav li", {
  duration: 2000,
  origin: "top",
  distance: "100px",
});

sr.reveal(".hero-container h1", {
  duration: 2000,
  origin: "top",
  distance: "200px",
});

sr.reveal(".icon", {
  duration: 2000,
  origin: "bottom",
  distance: "200px",
});