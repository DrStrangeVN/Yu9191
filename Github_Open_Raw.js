// ==UserScript==
// @name         GitHub Raw Link Opener
// @namespace    ios151
// @version      2.5
// @description  Enhance the GitHub raw link button.
// @author       baby
// @match        https://github.com/*
// @grant        none
// @run-at       document-end
// ==/UserScript==

(function() {
    'use strict';

    const isBlobPage = window.location.pathname.includes('/blob/');

    if (document.readyState === 'complete' || (document.readyState !== 'loading' && isBlobPage)) {
        init();
    } else {
        document.addEventListener('DOMContentLoaded', () => {
            //setTimeout延迟
            setTimeout(init, 500);
        });
    }

    function init() {
        if (isBlobPage) {

            const rawButton = createButton('打开 Raw', openRawLink);

            document.body.appendChild(rawButton);

            const scriptHubButton = createButton('打开 ScriptHub', openScriptHubLink);
            document.body.appendChild(scriptHubButton);
        }
    }

    function createButton(text, clickHandler) {
        const button = document.createElement('button');
        button.innerHTML = text;
        button.style.position = 'fixed';
        button.style.backgroundColor = '#30303355'; 
        button.style.color = '#eeeeee'; 
        button.style.border = 'none';
        button.style.padding = '8px 16px';
        button.style.borderRadius = '16px'; 
        button.style.cursor = 'pointer';

        if (text === '打开 Raw') {
            button.style.right = '20px';
            button.style.bottom = '50px'; 
        }

        if (text === '打开 ScriptHub') {
            button.style.left = '20px';
            button.style.bottom = '50px'; 
        }

        button.addEventListener('click', clickHandler);
        return button;
    }

    function openRawLink() {

        const rawUrl = window.location.href.replace('/blob', '').replace('github.com', 'raw.githubusercontent.com');
        
        window.open(rawUrl, '_blank');
    }

    function openScriptHubLink() {
        const rawUrl = window.location.href.replace('/blob', '').replace('github.com', 'raw.githubusercontent.com');
        const scriptHubUrl = `http://script.hub/convert/_start_/${rawUrl}.txt?type=plain-text&target=plain-text`;
        // 在新标签页中打开 ScriptHub 链接
        window.open(scriptHubUrl, '_blank');
    }
})();


