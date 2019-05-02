require("selectric");
const $ = require("jquery");

$('#city-select').selectric({
  disableOnMobile: false,
  nativeOnMobile: false
});
$('#release-form').selectric({
  disableOnMobile: false,
  nativeOnMobile: false
});

$('#burger-icon').on('click', () => {
  $('#burger-menu').toggle('fast')
});
$('body').on('click', (e) => {
  //e.stopPropagation();
  const isIcon = document.getElementById('burger-icon') === e.target
  if (!isIcon) {
      $('#burger-menu').hide('fast')
  }
});

$('#logout-icon').on('click', () => {
  $('#logout-menu').toggle('fast')
});
$('body').on('click', (e) => {
  const isIcon = document.getElementById('logout-icon') === e.target
  if (!isIcon) {
      $('#logout-menu').hide('fast')
  }
});