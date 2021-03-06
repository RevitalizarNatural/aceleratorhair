(function() {
    'use strict';

    function bindEvent(element, eventName, eventHandler) {
        if (element.addEventListener) {
            element.addEventListener(eventName, eventHandler, false);
        } else if (element.attachEvent) {
            element.attachEvent('on' + eventName, eventHandler);
        }
    }

    function iframeInit() {
        var links = document.querySelectorAll('[data-target-url]');
        for (var i = 0; i < links.length; i++) {
            var href = links[i].getAttribute('data-target-url');
            links[i].setAttribute('href', href);
            links[i].setAttribute('target', '_top');
        }
    }

    function sendIframeMessage(message) {
        window.parent.postMessage(message, '*');
    }

    function sendIframeHeightMessage() {
        var message = {
            action: 'iframe_height',
            height: document.body.clientHeight
        };
        sendIframeMessage(message);
    }

    function sendIframeLoadedMessage() {
        var message = {
            action: 'iframe_loaded',
        };
        sendIframeMessage(message);
    }
    bindEvent(window, 'message', function(e) {
        switch (e.data.action) {
            case 'iframe_init':
                iframeInit();
                break;
            case 'iframe_height':
                sendIframeHeightMessage();
                break;
        }
    });
    window.addEventListener('load', sendIframeLoadedMessage);
})();