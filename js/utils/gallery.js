const $ = require("jquery");
const modal = require('./modal');

module.exports = (gallery) => {
  const count = 4
  const children = $(gallery).children()
  const remain = children.length - count
  const moreBtn = $(`${gallery} .more`)

  const hideChildren = () => {
    children.each((i, value) => {
      const last = children.length - 1
      if (i > count - 2 && i !== last) $(value).hide()
    })
  }
  const showChildren = () => {
    children.each((i, value) => {
      const last = children.length - 1
      if (i > count - 2 && i !== last) $(value).show()
    })
  }

  children.each((i, value) => {
    const last = children.length - 1
    if (i !== last) {
      modal('', '.image-modal', value, { append: $(value).children().first() })
    }
  })


  if (children.length > count + 1) {
    moreBtn.css('display', 'flex')
    moreBtn.html(`+${remain}`)
    hideChildren()
  }

  moreBtn.on('click', (e) => {
    const self = $(e.target)

    if (self.hasClass('more')) {
      self.html('Скрыть')
      self.addClass('less').removeClass('more')
      showChildren()
    }
    else {
      self.html(`+${remain}`)
      self.addClass('more').removeClass('less')
      hideChildren()
    }
  })
}