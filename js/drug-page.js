const $ = require("jquery");
require("jquery-sticky");
const {
  top_of_element,
  bottom_of_element,
  top_of_screen,
} = require('./scrollUtils');

const stickyMaintenance = () => {
  const maint = $('#drug-page__maintenance')
  const maintBottom = bottom_of_element(maint)
  const bannerRowTop = top_of_element($('#drug-page__banner-row'))
  const maintTop = top_of_screen() + maint.outerHeight()

  if (maintBottom >= bannerRowTop) {
    maint.addClass('bottom')
    maint.unstick()
  } 

  if (maint.hasClass('bottom') && maintBottom >= maintTop) {
    maint.removeClass('bottom')
    maint.sticky({ topSpacing: 128, zIndex: 12 })
  }
}

const highlightItem = () => {
  $('.drug-page .second-block .item').each((index) => {
    const el = $('.drug-page .second-block .item')[index]
    const top = top_of_screen()
    const id = `.drug-page #l${el.id}`
    $(id).removeClass('active')
    if (top_of_element($(el)) < top && bottom_of_element($(el)) > top) {
      $(id).addClass('active')
    }
  })
}

module.exports = () => {
  $(document).on("scroll", stickyMaintenance);
  $(document).on("scroll", highlightItem);
  $("#drug-page__secondary-header").sticky({ topSpacing: 83, zIndex: 11 });
  $("#drug-page__maintenance").sticky({ topSpacing: 128, zIndex: 12 });
}