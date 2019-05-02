const $ = require("jquery");

module.exports = () => {
  const boxes = $('.main-page menu li .box')

  boxes.each((i) => {
    $(boxes[i]).hover((e) => {
        $(e.target).addClass('active')
      }, (e) => {
        $(e.target).removeClass('active')
    })
  })
}


