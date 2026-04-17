// ==UserScript==
// @name         Fuck Elpais
// @namespace    http://tampermonkey.net/
// @version      v1.0.3
// @description  Removes ElPais paywall and reloads game scripts
// @author       Freak404
// @match        https://elpais.com/juegos/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=elpais.com
// @license      GNU GPLv3
// @grant        none
// @run-at document-end
// ==/UserScript==

(function() {
    'use strict';
    let retries = 50;

    const intervalID = setInterval(_ => {
        const match = document.querySelector("#ctn_freemium_article");
        if(match) {
            window.PMCompassHidePaywallLayer();
            var elem = document.createElement("script");
            elem.src = "https://cdn-elpais.smartgames.media/script.js?v="+Math.random().toString(36).substring(2, 10);
            document.body.appendChild(elem);
        };

        retries--;
        if(retries == 0 || match) clearInterval(intervalID);
    }, 100);;
})();
