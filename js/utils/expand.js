const $ = require("jquery");

module.exports = (el, openEl) => {
  $(el).each((index) => {
    const item = $($(el)[index])
    const title = $($(openEl)[index])
    title.on('click', () => {
      item.toggleClass('open')
      item.toggleClass('close')
    })
  })
}