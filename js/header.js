require("jquery-sticky");
const $ = require("jquery");
const createDropdown = require('./utils/dropdown');

module.exports = () => {
  $("header").sticky({ topSpacing: 0 });
  createDropdown('#burger1-icon', '#burger1-menu')
  createDropdown('#burger2-icon', '#burger2-menu')
  createDropdown('#logout-icon', '#logout-menu')
}