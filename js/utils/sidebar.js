const $ = require("jquery");

module.exports = (sidebar, button) => {
  $(button).on('click', () => {
    $(sidebar).addClass('open')
  });
  $(`${sidebar} .sidebar-overlay`).on('click', () => {
      $(sidebar).removeClass('open')
  })
  $(`${sidebar} .cross`).on('click', () => {
      $(sidebar).removeClass('open')
  })
}