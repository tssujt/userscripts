// ==UserScript==
// @name         MangaForFree Remove Offer iframes
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Automatically remove parent div elements containing iframe elements with title="offer" on mangaforfree.net
// @author       You
// @match        https://mangaforfree.net/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';

    // Function to remove offer iframes and their parent divs
    function removeOfferIframes() {
        const offerIframes = document.querySelectorAll('iframe[title="offer"]');
        offerIframes.forEach(iframe => {
            const parentDiv = iframe.closest('div');
            if (parentDiv) {
                console.log('Removing parent div containing offer iframe:', parentDiv);
                parentDiv.remove();
            } else {
                console.log('Removing offer iframe (no parent div found):', iframe);
                iframe.remove();
            }
        });
    }

    // Remove existing offer iframes when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', removeOfferIframes);
    } else {
        removeOfferIframes();
    }

    // Use MutationObserver to handle dynamically added iframes
    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            mutation.addedNodes.forEach(function(node) {
                if (node.nodeType === 1) { // Element node
                    // Check if the added node itself is an offer iframe
                    if (node.tagName === 'IFRAME' && node.getAttribute('title') === 'offer') {
                        const parentDiv = node.closest('div');
                        if (parentDiv) {
                            console.log('Removing parent div containing dynamically added offer iframe:', parentDiv);
                            parentDiv.remove();
                        } else {
                            console.log('Removing dynamically added offer iframe (no parent div found):', node);
                            node.remove();
                        }
                    }
                    // Check for offer iframes within the added node
                    if (node.querySelectorAll) {
                        const offerIframes = node.querySelectorAll('iframe[title="offer"]');
                        offerIframes.forEach(iframe => {
                            const parentDiv = iframe.closest('div');
                            if (parentDiv) {
                                console.log('Removing parent div containing offer iframe from added content:', parentDiv);
                                parentDiv.remove();
                            } else {
                                console.log('Removing offer iframe from added content (no parent div found):', iframe);
                                iframe.remove();
                            }
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
    setInterval(removeOfferIframes, 2000);

})();
