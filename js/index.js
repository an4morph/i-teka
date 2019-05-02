require("../scss/index.scss");
require('bootstrap-scss/bootstrap-grid.scss');

const $ = require("jquery");
const MainPage = require("./pages/main-page");
const DrugPage = require("./pages/drug-page");
const Header = require("./components/header");
const Selects = require("./components/selects");
const Maintenance = require("./components/maintenance");


$(document).ready(function () {
    MainPage()
    //Maintenance()
    DrugPage()
    Header()
    Selects()


    $("#maintenance").sticky({ topSpacing: 107, zIndex: 20 });
    $(document).on("scroll", onScroll);
    
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

    const onScroll = () => {
      const top_of_element = (el) => el.offset().top;
      const bottom_of_element = (el) => el.offset().top + el.outerHeight();
      const bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
      const top_of_screen = $(window).scrollTop() + 140;
  
      let links = []
      
      $('.drug-page__anchor').each(function () {
          var currLink = $(this);
          var ref = $(`a[href="#${currLink.attr("id")}"]`);
          const start = top_of_element(currLink)
          const end = bottom_of_element(currLink.next('p'))
          links.push({ id: currLink.attr("id"), start, end, ref })
      });
  
      const isContain = (top_of_screen) => {
          let obj = null
          links.forEach(link => {
              link.ref.removeClass("active");
              if (link.start <= top_of_screen && link.end >= top_of_screen) {
                  obj = link
              }
          })
          return obj
      }
  
      const currLink = isContain(top_of_screen)
      if (currLink) {
          const hash = `#${currLink.id}`
          if(history.pushState) {
              history.pushState(null, null, hash);
          }
          else {
              location.hash = hash;
          }
  
          currLink.ref.addClass("active");
      }
  
  
      const isStopMaintenance =  bottom_of_element($('.first-section')) - bottom_of_element($('#maintenance'))
      const isStartMaintenance = top_of_screen - top_of_element($('#maintenance'))
      
      if (isStopMaintenance < 0) {
          $('#maintenance').addClass('bottom')
          $('#maintenance').unstick()
      } 
  
      if ($('#maintenance').hasClass('bottom') && isStartMaintenance < 0) {
          $('#maintenance').removeClass('bottom')
          $('#maintenance').sticky({ topSpacing: 107, zIndex: 20 })
      }
});



