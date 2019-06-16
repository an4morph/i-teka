const $ = require("jquery");
const modal = require('./modal');

module.exports = (gallery) => {
  const count = 7
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
      modal('.image-modal', value, { append: $(value).children().first().addClass(`modal-slide-${i}`) })
    }
  })
  const arrows = `
    <div class="gallery-arrows">
      <img src="/img/icons/arrow-down-w.svg" class="left"/>
      <img src="/img/icons/arrow-down-w.svg" class="right"/>
    </div>
  `

  const changeSlide = (direction) => {
    const getIndex = (el) => Number($(el).attr('class').substring(12))

    const slideIndex = getIndex('.image-modal .content img')
    const nextSlideIndex = direction === 'left' ? slideIndex - 1 : slideIndex + 1
    const defaultSlide = direction === 'left' ? $(`.gallery .slide img`)[children.length - 2] : $(`.gallery .slide img`)[0]
    const nextSlide = $(`.gallery .slide img`)[nextSlideIndex] || defaultSlide
    
    $('.image-modal .content img').remove()
    $('.image-modal .content').append(`
      <img 
        src="${$(nextSlide).attr('src')}" 
        class="modal-slide-${getIndex(nextSlide)}" 
      />`)
  }

  $('.image-modal').append(arrows)
  $('.gallery-arrows img.left').on('click', () => changeSlide('left'))
  $('.gallery-arrows img.right').on('click', () => changeSlide('right'))


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