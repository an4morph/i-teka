const $ = require("jquery");

module.exports = () => {
  $('.faq-item').each((index) => {
    const item = $($('.faq-item')[index])
    const title = $($('.faq-item h2')[index])
    title.on('click', () => {
      item.toggleClass('open')
      item.toggleClass('close')
    })
  })
}