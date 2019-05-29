const $ = require("jquery");

module.exports = (page, modal, buttons) => {
  $(buttons).each((index, btn) => {
    console.log(page, modal, buttons)
    $(btn).on('click', () => {
      $(modal).addClass('open')
    })
  })

  $(`${page} ${modal} .overlay`).on('click', () => {
    $(modal).removeClass('open')
  })
  $(`${page} ${modal} .close-modal`).on('click', (e) => {
    e.preventDefault()
    $(modal).removeClass('open')
  })
}