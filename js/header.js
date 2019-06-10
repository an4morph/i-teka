require("jquery-sticky");
const $ = require("jquery");
const Swiper = require("swiper");
require('swiper/dist/css/swiper.min.css')

module.exports = () => {
  $("header").sticky({ topSpacing: 0 });
  
  $("header menu li.menu-item").each((index, item) => {
    $(item).hover(() => {
      $(item).find('.onhover').css('display', 'flex')
      $(item).find('.transparent').css('display', 'flex')
    }, () => {
      $(item).find('.onhover').css('display', 'none')
      $(item).find('.transparent').css('display', 'none')
    })
  })

  var mySwiper = new Swiper.default('.swiper-container', {
    speed: 400,
    slidesPerView: 5,
    breakpoints: {
      510: {
        slidesPerView: 3,
      },
    }
  });   
  mySwiper.init();

  ['pharmacy', 'drugs', 'med-centers', 'doctors', 'med-services', 'diseases'].forEach(item => {
    const menuItem = $(`header .header-swiper .${item}`)
    const block = $(`header .add-menu.${item}`)
    const close = $(`header .add-menu.${item} .close`)
    const allBlocks = $(`header .add-menu`)
    const allMenus = $(`header .header-swiper .swiper-slide`)
    
    menuItem.on('click', () => {
      allMenus.each((i, val) => { $(val).removeClass('active') })
      allBlocks.each((i, val) => { $(val).hide() })
      menuItem.addClass('active')
      block.show()
      close.on('click', () => {
        block.hide()
        allMenus.each((i, val) => { $(val).removeClass('active') })
      })
    })
  })
}