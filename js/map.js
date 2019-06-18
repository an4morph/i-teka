const $ = require("jquery");
const {
  top_of_element,
  bottom_of_element,
  top_of_screen,
  bottom_of_screen
} = require('./utils/scroll');

module.exports = () => {
  let flag = false

  $(document).on("scroll", () => {
    const mapBottom = bottom_of_element($('.map'))
    const mapTop = top_of_element($('.map'))
    const intrTop = top_of_element($('.intresting'))


    if (mapBottom >= intrTop) {
      $('.map').addClass('non-fix')
      $('.map-col').css({
        'display': 'flex',
        'align-items': 'flex-end',
        'padding-left': '0',
        'padding-right': '0',
      })
    }
    if ($('.map').hasClass('non-fix') && intrTop > bottom_of_screen()) {
      $('.map').removeClass('non-fix')
    }
  });
}