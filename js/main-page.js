const $ = require("jquery");

const boxes = $('.main-page__content menu li .box')


boxes.each((i) => {
  //const isActive = boxes[i].hasClass('active')

  $(boxes[i]).hover((e) => {
      $(e.target).addClass('active')
    }, (e) => {
      $(e.target).removeClass('active')
  })
})




