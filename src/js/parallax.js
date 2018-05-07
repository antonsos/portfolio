(function() {
  var parallaxContainer = document.querySelector('.parallax');
  var layers = document.querySelectorAll('.parallax__item');

  var moveLayers = function (e) {
    var initialX = (window.innerWidth / 2) - e.pageX;
    var initialY = (window.innerHeight / 2) - e.pageY;

    [].slice.call(layers).forEach(function (layer, i) {
      if (i & 1) {
        var positionX = -initialX / 100;
        var positionY = -initialY / 100;
      } else {
        var positionX = initialX / 100;
        var positionY = initialY / 100;
      }
      var layerStyle = layer.style;
      var transformString = 'translate3d(' + positionX + 'px ,' + positionY + 'px , 0)';

      layerStyle.transform = transformString;
    });
  }

  parallaxContainer.addEventListener('mousemove', moveLayers, false);
})();