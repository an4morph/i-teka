const $ = require("jquery");
const ScrollReveal = require("scrollreveal").default;
const DrugPage = require('./drug-page');
const Header = require('./header');
const createExpand = require("./utils/expand");
const createSidebar = require("./utils/sidebar");
const modal = require("./utils/modal");
const gallery = require("./utils/gallery");
const searchAutocomplete = require('./utils/search-autocomplete');
require("../scss/index.scss");
require("./utils/custom-selects");
require('bootstrap-scss/bootstrap-grid.scss');
require('slick-carousel');
require('slick-carousel/slick/slick.scss');
require('slick-carousel/slick/slick-theme.scss');
require('jquery-ui-dist/jquery-ui');
require('jquery-ui-dist/jquery-ui.css');


// вся логика разделена постранично, чтобы на каждой 
// странице генерились уникальные события

$(document).ready(function () {
    const searchSource = ['abc', 'aaaaa', 'aaaaa1', 'aaaaa2', 'aaaaa3', 'cde', 'efg', 'ghi', 'ikl']
    ScrollReveal().reveal('.reveal', {
        delay: 150,
        duration: 1000,
        distance: '20%',
        origin: 'bottom',
        opacity: 0,
        reset: false
    })
    Header()


    //=========== Modals GLOBAL ============//
    modal('.report-modal', '.report-btn')
    modal('.booking-modal', '.booking-btn')
    modal('.house-call-modal', '.house-call-btn')
    //=========== Gallery GLOBAL ============//
    gallery('.gallery')
    //=========== Slider GLOBAL ============//
    $(".slider").slick({ dots: true });




    if ($('.drug-page').length) DrugPage()
    if ($('.faq-page').length) {
        createExpand('.faq-item', '.faq-item h2')
    }

    //=========================================== DISEASES (Заболевания) ===========================================//
    if ($('.diseases-page').length) {
        searchAutocomplete('#diseases-page__search', searchSource)
        createExpand('.diseases-page .list .var', '.diseases-page .list .var h2')
    }


    //=========================================== MED SERVICES (Процедуры) ===========================================//
    if ($('.med-services-page').length) {
        searchAutocomplete('#med-services-page__search', searchSource)
        createExpand('.med-services-page .list .var', '.med-services-page .list .var h2')
    }


    //=========================================== DRUGS (Лекарства) ===========================================//
    if ($('.drugs-page').length) {
        searchAutocomplete('#drugs-page__search', searchSource)
        createExpand('.drugs-page .list .var', '.drugs-page .list .var h2')
    }


    //=========================================== DOCTORS (Врачи) ===========================================//
    if ($('.doctors-page').length) {
        searchAutocomplete('#doctors-page__search', searchSource)
        createExpand('.doctors-page .list .var', '.doctors-page .list .var h2')
    }
    if ($('.doctors-item-page').length) {
        // no js
    }
    if ($('.doctors-search-page').length) {
        createSidebar('.doctors-search-page-body .sort-sidebar', '#doctors-search__sort-btn')
        createSidebar('.doctors-search-page-body .filter-sidebar', '#doctors-search__filter-btn')
    }
    

    //=========================================== PHARMACY (Аптеки) ===========================================//
    if ($('.pharmacy-page').length) {
        searchAutocomplete('#pharmacy-page__search', searchSource)
        createExpand('.pharmacy-page .list .var', '.pharmacy-page .list .var h2')
    }
    if ($('.pharmacy-item-page').length) {
        // no js
    }
    if ($('.pharmacy-search-page').length) {
        createSidebar('.pharmacy-search-page-body .sort-sidebar', '#pharmacy-search__sort-btn')
        createSidebar('.pharmacy-search-page-body .filter-sidebar', '#pharmacy-search__filter-btn')
    }


    //=========================================== MED CENTERS (Клиники) ===========================================//
    if ($('.med-centers-page').length) {
        searchAutocomplete('#med-center-page__search', searchSource)
        createExpand('.med-centers-page .list .var', '.med-centers-page .list .var h2')
    }
    if ($('.med-centers-item-page').length) {
        //
    }
    if ($('.med-centers-search-page').length) {
        createSidebar('.med-centers-search-page-body .sort-sidebar', '#med-centers-search__sort-btn')
        createSidebar('.med-centers-search-page-body .filter-sidebar', '#med-centers-search__filter-btn')
    }
});



