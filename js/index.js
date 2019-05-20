const $ = require("jquery");
const ScrollReveal = require("scrollreveal").default;
const DrugPage = require('./drug-page');
const FAQPage = require('./faq');
const Header = require('./header');
require("../scss/index.scss");
require("./utils/custom-selects");
require('bootstrap-scss/bootstrap-grid.scss');

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
    RevealGlobal()
    
    Header()
    if ($('.drug-page').length) DrugPage()
    if ($('.faq-page').length) FAQPage()
});



