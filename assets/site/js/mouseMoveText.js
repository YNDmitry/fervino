var dance = {
  init: function () {
    this.dance()
  },

  dance: function () {
    var newText = '',
      h1 = $('h1'),
      text = h1.text(),
      i

    for (i = 0; i < text.length; i++) {
      newText += '<span>' + text.charAt(i) + '</span>'
    }

    h1.html(newText)

    h1.on('mouseenter mouseleave', 'span', function (e) {
      var span = $(this)

      if (e.type == 'mouseenter') {
        span
          .animate({
            textStrokeWidth: '1px',
          })
          .addClass('wave')
      } else if (e.type == 'mouseleave') {
        span
          .animate({
            textStrokeWidth: '0px',
          })
          .removeClass('wave')
      }
    })
  },
}

$(function () {
  dance.init()
})

let mover = document.querySelector('.animation-text')

mover.addEventListener('mousemove', function (event) {
  mousePosMove(event)
})

function mousePosMove(e) {
  let span = document.querySelector('.wave')
  var width = mover.clientWidth
  var x = e.clientX
  var y = e.clientY
  var oX = Math.floor((x / width) * 200)
  var oY = Math.floor((y / width) * 130)
  span.style.setProperty('background-position', -oX + '%' + ' ' + oY + 'px')
}
