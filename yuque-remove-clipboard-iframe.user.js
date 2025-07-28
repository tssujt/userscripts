// ==UserScript==
// @name         Yuque Remove Clipboard iframes
// @namespace    https://github.com/tssujt
// @version      1.0
// @description  Automatically remove iframe elements with allow="clipboard-write" attribute on yuque.com
// @author       tssujt
// @match        https://www.yuque.com/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';

    // Function to remove clipboard-write iframes with dify title
    function removeClipboardIframes() {
        const clipboardIframes = document.querySelectorAll('iframe[allow*="clipboard-write"][title*="dify"]');
        clipboardIframes.forEach(iframe => {
            console.log('Removing iframe with clipboard-write permission and dify title:', iframe);
            iframe.remove();
        });
    }

    // Remove existing clipboard iframes when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', removeClipboardIframes);
    } else {
        removeClipboardIframes();
    }

    // Use MutationObserver to handle dynamically added iframes
    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            mutation.addedNodes.forEach(function(node) {
                if (node.nodeType === 1) { // Element node
                    // Check if the added node itself is a clipboard iframe with dify title
                    if (node.tagName === 'IFRAME' &&
                        node.getAttribute('allow') && node.getAttribute('allow').includes('clipboard-write') &&
                        node.getAttribute('title') && node.getAttribute('title').includes('dify')) {
                        console.log('Removing dynamically added iframe with clipboard-write permission and dify title:', node);
                        node.remove();
                    }
                    // Check for clipboard iframes within the added node
                    if (node.querySelectorAll) {
                        const clipboardIframes = node.querySelectorAll('iframe[allow*="clipboard-write"]');
                        clipboardIframes.forEach(iframe => {
                            console.log('Removing iframe with clipboard-write permission from added content:', iframe);
                            iframe.remove();
                        });
                    }
                }
            });
        });
    });

    // Start observing
    observer.observe(document.body || document.documentElement, {
        childList: true,
        subtree: true
    });

    // Also run periodically as a fallback
    setInterval(removeClipboardIframes, 2000);

})();
