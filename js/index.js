const $ = require("jquery");
const ScrollReveal = require("scrollreveal").default;
const DrugPage = require('./drug-page');
const Header = require('./header');
const createExpand = require("./utils/expand");
const createSidebar = require("./utils/sidebar");
const searchAutocomplete = require('./utils/search-autocomplete');
require("../scss/index.scss");
require("./utils/custom-selects");
require('bootstrap-scss/bootstrap-grid.scss');
require('slick-carousel');
require('slick-carousel/slick/slick.scss');
require('slick-carousel/slick/slick-theme.scss');
require('jquery-ui-dist/jquery-ui');
require('jquery-ui-dist/jquery-ui.css');

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
    const searchSource = ['abc', 'aaaaa', 'aaaaa1', 'aaaaa2', 'aaaaa3', 'cde', 'efg', 'ghi', 'ikl']
    RevealGlobal();
    $(".slider").slick({ dots: true });
    
    Header()
    if ($('.drug-page').length) DrugPage()
    if ($('.faq-page').length) {
        createExpand('.faq-item', '.faq-item h2')
    }
    if ($('.diseases-page').length) {
        searchAutocomplete('#diseases-page__search', searchSource)
        createExpand('.diseases-page .list .var', '.diseases-page .list .var h2')
    }
    if ($('.med-services-page').length) {
        searchAutocomplete('#med-services-page__search', searchSource)
        createExpand('.med-services-page .list .var', '.med-services-page .list .var h2')
    }
    if ($('.drugs-page').length) {
        searchAutocomplete('#drugs-page__search', searchSource)
        createExpand('.drugs-page .list .var', '.drugs-page .list .var h2')
    }
    if ($('.doctors-page').length) {
        searchAutocomplete('#doctors-page__search', searchSource)
        createExpand('.doctors-page .list .var', '.doctors-page .list .var h2')
    }
    if ($('.doctors-search-page').length) {
        createSidebar('.doctors-search-page-body .sort-sidebar', '#doctors-search__sort-btn')
        createSidebar('.doctors-search-page-body .filter-sidebar', '#doctors-search__filter-btn')
    }
    if ($('.pharmacy-page').length) {
        searchAutocomplete('#pharmacy-page__search', searchSource)
        createExpand('.pharmacy-page .list .var', '.pharmacy-page .list .var h2')
    }
    if ($('.pharmacy-search-page').length) {
        createSidebar('.pharmacy-search-page-body .sort-sidebar', '#pharmacy-search__sort-btn')
        createSidebar('.pharmacy-search-page-body .filter-sidebar', '#pharmacy-search__filter-btn')
    }
    if ($('.med-centers-page').length) {
        searchAutocomplete('#med-center-page__search', searchSource)
        createExpand('.med-centers-page .list .var', '.med-centers-page .list .var h2')
    }
});



