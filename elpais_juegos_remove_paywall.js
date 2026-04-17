// ==UserScript==
// @name         Fuck Elpais
// @namespace    http://tampermonkey.net/
// @version      1.0.5
// @description  Removes ElPais paywall and reloads game scripts
// @author       mriberadev
// @match        https://elpais.com/juegos/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=elpais.com
// @license      GNU GPLv3
// @grant        none
// @run-at document-end
// ==/UserScript==

(function() {
    'use strict';
    let retries = 10;

    const intervalID = setInterval(_ => {
        const match = document.querySelector("#ctn_freemium_article");
        if(match) {
            window.PMCompassHidePaywallLayer();
        }

        retries--;
        if(retries == 0 || match) {
            var elem = document.createElement("script");
            elem.src = "https://cdn-elpais.smartgames.media/script.js?v="+Math.random().toString(36).substring(2, 10);
            document.body.appendChild(elem);
            clearInterval(intervalID);
        }
    }, 100);;
})();
