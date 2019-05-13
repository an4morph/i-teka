const $ = require("jquery");

module.exports = {
  top_of_element: (el) => el.offset().top,
  bottom_of_element: (el) => el.offset().top + el.outerHeight(),
  bottom_of_screen: () => $(window).scrollTop() + $(window).innerHeight(),
  top_of_screen: () => $(window).scrollTop() + 140
}

// const {
//   top_of_element,
//   bottom_of_element,
//   bottom_of_screen,
//   top_of_screen,
// } = require('./utils/scroll');