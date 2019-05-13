const $ = require("jquery");

module.exports = (elShown, elHidden) => {
  $(elShown).on('click', (e) => {
    e.stopPropagation()
    $(elHidden).toggle('fast')
  });
  $('body').on('click', (e) => {
      const isIcon = document.getElementById(elShown) === e.target
      if (!isIcon) {
          $(elHidden).hide('fast')
      }
  });
}