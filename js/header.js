require("jquery-sticky");
const $ = require("jquery");
const createDropdown = require('./utils/dropdown');

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
}