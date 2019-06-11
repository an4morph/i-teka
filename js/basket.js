const $ = require('jquery')

module.exports = () => {
  let counter = 0
  $('.custom-checkbox').each((ind, val) => {
    $(val).on('click', () => {
      if ($(val).hasClass('checked')) {
        $(val).find('.fill').css('display', 'none')
        $(val).removeClass('checked')

        if ($('#main-checkbox').hasClass('checked')) {
          $('#main-checkbox').find('.fill').css('display', 'none')
          $('#main-checkbox').removeClass('checked')
        }
      } else {
        $(val).find('.fill').css('display', 'flex')
        $(val).addClass('checked')
      }

      counter = $('.basket-cb.checked').length

      if (counter === 0) {
        $('.basket-modal .result button.disabled').css('display', 'flex')
        $('.basket-modal .result button.active').css('display', 'none')
      } else {
        $('.basket-modal .result button.disabled').css('display', 'none')
        $('.basket-modal .result button.active').css('display', 'flex')
      }

      if (counter % 10 === 1) {
        $('.basket-modal .result .subtext').text(`Выбран ${counter} препарат`)
      }
      else if (counter % 10 === 2 || 3 || 4) {
        $('.basket-modal .result .subtext').text(`Выбрано ${counter} препарата`)
      }
      else {
        $('.basket-modal .result .subtext').text(`Выбрано ${counter} препаратов`)
      }
    })
  })

  $('#main-checkbox').on('click', () => {
    $('.basket-cb').each((ind, val) => {
      if ($('#main-checkbox').hasClass('checked')) {
        if (!$(val).hasClass('checked')) $(val).trigger('click')
      } else {
        if ($(val).hasClass('checked')) $(val).trigger('click')
      }
    })
  })
}