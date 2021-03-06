const $ = require("jquery");
const ScrollReveal = require("scrollreveal").default;
const DrugPage = require('./drug-page');
const Header = require('./header');
const createExpand = require("./utils/expand");
const createSidebar = require("./utils/sidebar");
const modal = require("./utils/modal");
const basket = require("./basket");
const map = require("./map");
const Swiper = require("swiper");
const gallery = require("./utils/gallery");
const searchAutocomplete = require('./utils/search-autocomplete');
require("../scss/index.scss");
require("../lib/mask-plugin/dist/jquery.mask");
require("./utils/custom-selects");
require('bootstrap-scss/bootstrap-grid.scss');
require('slick-carousel');
require('slick-carousel/slick/slick.scss');
require('slick-carousel/slick/slick-theme.scss');
require('jquery-ui-dist/jquery-ui');
require('jquery-ui-dist/jquery-ui.css');


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
    $(`.booking-modal .title`).append('<div class="close-modal">×</div>')
    $(`.house-call-modal .title`).append('<div class="close-modal">×</div>')
    modal('.report-modal', '.report-btn')
    modal('.booking-modal', '.booking-btn')
    modal('.basket-modal', '.basket-btn')
    modal('.schedule-modal', '.schedule-btn')
    modal('.phones-modal', '.phones-btn')
    modal('.house-call-modal', '.house-call-btn')
    //=========== Gallery GLOBAL ============//
    gallery('.gallery')
    //=========== Slider GLOBAL ============//
    $(".slider").slick({
        dots: true
    });
    //=========== Sidebars GLOBAL ============//
    createSidebar('.sort-sidebar', '.sort-btn')
    createSidebar('.filter-sidebar', '.filter-btn')
    createSidebar('.header-sidebar', '#header-burger')

    basket()

    /////// masks //////
    $('input[name="date"]').mask('00/00/0000')
    $('input[name="time"]').mask('00:00')
    $('input[name="phone"]').mask('+7(000)000-00-00')

    const reportBtn = $('.report-modal button:nth-child(2)')
    reportBtn.prop('disabled', true)
    $('input[name=report]').on('click', () => {
        reportBtn.css('color', '#555555')
        reportBtn.prop('disabled', false)
    })

    map()




    if ($('.drug-page').length) DrugPage()

    if ($('.faq-page').length) {
        createExpand('.faq-item', '.faq-item h2')
    }

    if ($('.drugs-result-page').length) {
        var btnsSwiper = new Swiper.default('.btns-swiper-container', {
            slidesPerView: 'auto',
            spaceBetween: 15,
            slideClass: 'btns-swiper-slide',
            wrapperClass: 'btns-swiper-wrapper',
        });
        btnsSwiper.init();
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

    if ($('.pharmacy-page').length) {
        searchAutocomplete('#pharmacy-page__search', searchSource)
        createExpand('.pharmacy-page .list .var', '.pharmacy-page .list .var h2')
    }

    if ($('.med-centers-page').length) {
        searchAutocomplete('#med-center-page__search', searchSource)
        createExpand('.med-centers-page .list .var', '.med-centers-page .list .var h2')
    }
});