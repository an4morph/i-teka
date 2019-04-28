const $ = require("jquery");
require("selectric");

$('#city-select').selectric({
  disableOnMobile: false,
  nativeOnMobile: false
});
$('#release-form').selectric({
  disableOnMobile: false,
  nativeOnMobile: false
});