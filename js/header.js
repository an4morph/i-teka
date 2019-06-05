require("jquery-sticky");
const $ = require("jquery");
const createDropdown = require('./utils/dropdown');

module.exports = () => {
  $("header").sticky({ topSpacing: 0 });
  
  $("header menu li.menu-item").each((index, item) => {
    $(item).hover(() => {
      $(item).find('.onhover').css('display', 'flex')
    }, () => {
      //console.log($(item).find('.onhover')[0])
    })

  })
}