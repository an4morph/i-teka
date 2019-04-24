$(document).ready(function () {
    // customize selects with javascript
    ScrollReveal().reveal('.reveal', {
        delay: 200,
        duration: 1000,
        distance: '20%',
        origin: 'bottom',
        opacity: 0
    })
    $('#city-select').selectric({
        disableOnMobile: false,
        nativeOnMobile: false
    });
    $('#release-form').selectric({
        disableOnMobile: false,
        nativeOnMobile: false
    });
    $("header").sticky({ topSpacing: 0 });
    $("#maintenance").sticky({ topSpacing: 107, zIndex: 20 });

    $('#burger-icon').on('click', () => {
        $('#burger-menu').toggle('fast')
    });
    $('body').on('click', (e) => {
        //e.stopPropagation();
        const isIcon = document.getElementById('burger-icon') === e.target
        if (!isIcon) {
            $('#burger-menu').hide('fast')
        }
    });

    $('#logout-icon').on('click', () => {
        $('#logout-menu').toggle('fast')
    });
    $('body').on('click', (e) => {
        const isIcon = document.getElementById('logout-icon') === e.target
        if (!isIcon) {
            $('#logout-menu').hide('fast')
        }
    });


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
}


