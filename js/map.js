const $ = require("jquery");
const {
  top_of_element,
  bottom_of_element,
  top_of_screen,
  bottom_of_screen
} = require('./utils/scroll');

module.exports = () => {
  $('.map-btn').on('click', () => {
    $('.map').addClass('open')
  })
  $('.map-close-btn').on('click', () => {
    $('.map').removeClass('open')
  })
  $(document).on("scroll", () => {
    const mapBottom = bottom_of_element($('.map'))
    const mapTop = top_of_element($('.map'))
    const intrTop = top_of_element($('.intresting'))


    if (mapBottom >= intrTop) {
      $('.map').addClass('non-fix')
      $('.map-col').addClass('non-fixed-map')
      // $('.map-col').css({
      //   'display': 'flex',
      //   'align-items': 'flex-end',
      //   'padding-left': '0',
      //   'padding-right': '0',
      // })
    }
    if ($('.map').hasClass('non-fix') && intrTop > bottom_of_screen()) {
      $('.map').removeClass('non-fix')
      $('.map-col').removeClass('non-fixed-map')
    }
  });
}