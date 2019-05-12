const ScrollReveal = require("scrollreveal").default;
const $ = require("jquery");
const createDropdown = require('./dropdown');
const stickyScroll = require('./stickyScroll');
require("jquery-sticky");
require("../scss/index.scss");
require("./custom-selects");
require('bootstrap-scss/bootstrap-grid.scss');


$(document).ready(function () {
    window.sr = ScrollReveal({ reset: true })
    ScrollReveal().reveal('.reveal', {
        delay: 150,
        duration: 1000,
        distance: '20%',
        origin: 'bottom',
        opacity: 0
    })

    const boxes = $('.main-page__content menu li .box')
    boxes.each((i) => {
        $(boxes[i]).hover((e) => {
            $(e.target).addClass('active')
        }, (e) => {
            $(e.target).removeClass('active')
        })
    })
    
    $(document).on("scroll", stickyScroll);
    $("header").sticky({ topSpacing: 0 });
    $("#drug-page__secondary-header").sticky({ topSpacing: 83, zIndex: 11 });
    $("#drug-page__maintenance").sticky({ topSpacing: 128, zIndex: 12 });

    ///////////////////////////
    createDropdown('#burger1-icon', '#burger1-menu')
    createDropdown('#burger2-icon', '#burger2-menu')
    createDropdown('#logout-icon', '#logout-menu')
    ///////////////////////


    
    
    //smoothscroll
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");
        
        $('a').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');
      
        var target = this.hash,
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top - 140
        }, 500, 'swing', function () {
            if(history.pushState) {
                history.pushState(null, null, target);
            }
            else {
                location.hash = target;
            }
            $(document).on("scroll", onScroll);
        });
    });
});



