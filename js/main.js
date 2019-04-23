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
            'scrollTop': $target.offset().top - 120
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
    var scrollPos = $(document).scrollTop() + 120;
    let links = []
    
    $('.drug-page__anchor').each(function () {
        var currLink = $(this);
        var ref = $(`a[href="#${currLink.attr("id")}"]`);
        const start = currLink.position().top
        const end = currLink.next('p').position().top + currLink.next('p').outerHeight(true)
        links.push({ id: currLink.attr("id"), start, end, ref })
    });

    const isContain = (scrollPos) => {
        let obj = null
        links.forEach(link => {
            link.ref.removeClass("active");
            if (link.start <= scrollPos && link.end >= scrollPos) {
                obj = link
            }
        })
        return obj
    }

    const currLink = isContain(scrollPos)
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


