const ScrollReveal = require("scrollreveal").default;

module.exports = () => {
  ScrollReveal().reveal('.reveal', {
    delay: 200,
    duration: 1000,
    distance: '20%',
    origin: 'bottom',
    opacity: 0
  })
}