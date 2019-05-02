require("jquery-sticky");
const $ = require("jquery");

module.exports = () => {
  $("header").sticky({ topSpacing: 0 });
}