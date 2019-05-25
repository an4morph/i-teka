const $ = require("jquery");
const ScrollReveal = require("scrollreveal").default;
const DrugPage = require('./drug-page');
const FAQPage = require('./faq');
const Header = require('./header');
const createExpand = require("./utils/expand");
require("../scss/index.scss");
require("./utils/custom-selects");
require('bootstrap-scss/bootstrap-grid.scss');
require('slick-carousel');
require('slick-carousel/slick/slick.scss');
require('slick-carousel/slick/slick-theme.scss');
require('jquery-ui-dist/jquery-ui');

const RevealGlobal = () => {
    window.sr = ScrollReveal({ reset: true })
    ScrollReveal().reveal('.reveal', {
        delay: 150,
        duration: 1000,
        distance: '20%',
        origin: 'bottom',
        opacity: 0,
        reset: false
    })
}


$(document).ready(function () {
    RevealGlobal();
    $(".slider").slick({
        dots: true
    });
    $('#diseases-page__search').autocomplete({
        source: ['abc', 'cde', 'efg', 'ghi', 'ikl'],
        appendTo: '#diseases-page__search-vars'
    })
    
    Header()
    if ($('.drug-page').length) DrugPage()
    if ($('.faq-page').length) FAQPage()
    if ($('.diseases-page').length) {
        createExpand('.diseases-page .list .var', '.diseases-page .list .var h2')
    }
    if ($('.med-services-page').length) {
        createExpand('.med-services-page .list .var', '.med-services-page .list .var h2')
    }
    if ($('.drugs-page').length) {
        createExpand('.drugs-page .list .var', '.drugs-page .list .var h2')
    }
    if ($('.doctors-page').length) {
        createExpand('.doctors-page .list .var', '.doctors-page .list .var h2')
    }
});



