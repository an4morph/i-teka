const $ = require("jquery");

module.exports = (el, source) => {
  $(el).autocomplete({
    source,
    appendTo: `${el}-vars`
  })
}