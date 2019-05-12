const ScrollReveal = require("scrollreveal").default;
const $ = require("jquery");
const createDropdown = require('./dropdown');
const DrugPage = require('./drug-page');
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

    $("header").sticky({ topSpacing: 0 });
    createDropdown('#burger1-icon', '#burger1-menu')
    createDropdown('#burger2-icon', '#burger2-menu')
    createDropdown('#logout-icon', '#logout-menu')


    // const boxes = $('.main-page__content menu li .box')
    // boxes.each((i) => {
    //     $(boxes[i]).hover((e) => {
    //         $(e.target).addClass('active')
    //     }, (e) => {
    //         $(e.target).removeClass('active')
    //     })
    // })

    DrugPage()



    
    
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



