const $ = require("jquery");
const ScrollReveal = require("scrollreveal").default;
const DrugPage = require('./drug-page');
const FAQPage = require('./faq');
const Header = require('./header');
require("../scss/index.scss");
require("./utils/custom-selects");
require('bootstrap-scss/bootstrap-grid.scss');
require('slick-carousel');
require('slick-carousel/slick/slick.scss');
require('slick-carousel/slick/slick-theme.scss');

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
    
    Header()
    if ($('.drug-page').length) DrugPage()
    if ($('.faq-page').length) FAQPage()
});



