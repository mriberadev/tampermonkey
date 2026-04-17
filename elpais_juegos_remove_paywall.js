// ==UserScript==
// @name         Fuck Elpais
// @description  Removes ElPais paywall and reloads game scripts
// @namespace    http://tampermonkey.net/
// @version      2026-04-16
// @description  try to take over the world!
// @author       You
// @match        https://elpais.com/juegos/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=elpais.com
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
