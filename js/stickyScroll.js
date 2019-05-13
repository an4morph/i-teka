// const $ = require("jquery");
// require("jquery-sticky");
// const {
//   top_of_element,
//   bottom_of_element,
//   top_of_screen,
// } = require('./scrollUtils');

// module.exports = () => {
//   const maint = $('#drug-page__maintenance')
//   const maintBottom = bottom_of_element(maint)
//   const bannerRowTop = top_of_element($('#drug-page__banner-row'))
//   const maintTop = top_of_screen() + maint.outerHeight()

//   if (maintBottom >= bannerRowTop) {
//     maint.addClass('bottom')
//     maint.unstick()
//   } 

//   if (maint.hasClass('bottom') && maintBottom >= maintTop) {
//     maint.removeClass('bottom')
//     maint.sticky({ topSpacing: 128, zIndex: 12 })
//   }
// }