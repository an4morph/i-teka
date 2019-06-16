const $ = require("jquery");

module.exports = (modal, buttons, options = {}) => {
  const removeEl = () => {
    if (options.append) {
      $(`${modal} .modal-slide`).remove()
    }
  }
  
  $(buttons).each((index, btn) => {
    $(btn).on('click', (e) => {
      e.stopPropagation()
      $(modal).addClass('open')
      if (options.append) $(options.append).clone().addClass('modal-slide').appendTo(`${modal} .content`)
    })
  })

  // $(`${modal} .title`).append('<div class="close-modal">×</div>')

  $(`${modal} .overlay`).on('click', () => {
    $(modal).removeClass('open')
    removeEl()
  })
  $(`${modal} .close-modal`).on('click', (e) => {
    e.preventDefault()
    $(modal).removeClass('open')
    removeEl()
  })
}