window.preso = (function() {
  var preso = window.impress(),
  intv = setInterval( preso.next, 10000 );

  preso.speed = function(speed) {
    intv && clearInterval(intv);
    intv = setInterval( preso.next, speed * 1000)
  };

  preso.stop = function() {
    intv && clearInterval(intv);
  };

  return preso;
})();
