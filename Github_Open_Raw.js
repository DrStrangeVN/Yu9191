// ==UserScript==
// @name         GitHub Raw Link Opener
// @namespace    ios151
// @version      1.6
// @description  Enhance the GitHub raw link button.
// @author       baby
// @match        https://github.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Check if the current page is a GitHub blob page
    const isBlobPage = window.location.pathname.includes('/blob/');
    
    // Wait for the DOM to be fully loaded
    if (document.readyState === 'complete' || (document.readyState !== 'loading' && !isBlobPage)) {
        init();
    } else {
        document.addEventListener('DOMContentLoaded', init);
    }

    function init() {
        if (isBlobPage) {
            
            const rawButton = document.createElement('button');
            rawButton.innerHTML = '<i class="fas fa-external-link-alt"></i> 打开 Raw';
            rawButton.style.position = 'fixed';
            rawButton.style.right = '20px';
            rawButton.style.bottom = '20px';
            rawButton.style.backgroundColor = '#333';
            rawButton.style.color = '#fff';
            rawButton.style.border = 'none';
            rawButton.style.padding = '8px 16px';
            rawButton.style.borderRadius = '5px';
            rawButton.style.cursor = 'pointer';
            rawButton.addEventListener('click', openRawLink);
            document.body.appendChild(rawButton);
        }
    }

    function openRawLink() {
     
        const rawUrl = window.location.href.replace('/blob', '').replace('github.com', 'raw.githubusercontent.com');

        window.open(rawUrl, '_blank');
    }
})();
