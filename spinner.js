;(function( ui, $, undefined ) {
    "use strict";

    var _spinnerContainer = '#spinner_container',
        _spinner = 'div.spinner',
        _innerHTML = "<div id='spinner_container'><div class='spinner'>";

    for(var i=1;i<13;i++) {
        _innerHTML += "<div class=bar" + i + "></div>";
    }

    _innerHTML += "</div></div>";

    function start(delay) {
        $(_spinnerContainer).fadeIn();
        setTimeout(function() { $(_spinner).show(); }, delay || 999);
    }

    function stop() {
        $(_spinnerContainer).fadeOut();
        $(_spinner).fadeOut();
    }

    ui.Spinner = function() {
        $(_spinnerContainer).remove();

        return {
            start: function(delay) {
                start(delay);
            },
            stop: function() {
                stop();
            },
            innerHTML: function() {
                return _innerHTML;
            }
        };
    };

})( window.ui = ( window.ui || {} ), window.jQuery );