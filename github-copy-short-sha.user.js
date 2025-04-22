// ==UserScript==
// @name         GitHub Copy Short Sha
// @namespace    https://github.com/tssujt
// @version      0.1
// @description  Copy short commit sha of current branch of GitHub repository
// @author       tssujt
// @match        *://github.com/*
// @grant        none
// @run-at       document-idle
// ==/UserScript==

(function () {
    'use strict';

    // Use a function to encapsulate the logic, making it easier to retry or delay
    function addCopyButton() {
        const commitDetailsDiv = document.querySelector('.repository-content div[data-testid="latest-commit"]');

        // Check if the target element exists
        if (commitDetailsDiv && commitDetailsDiv.parentNode) {
            const button = document.createElement('button');
            button.innerHTML = 'Copy Short Sha';
            // Add some basic styling to make it look more like GitHub buttons
            button.className = 'btn btn-sm ml-2';

            button.addEventListener('click', (event) => {
                event.preventDefault(); // Prevent any default action if it's inside a link
                const shaElement = document.querySelector('.repository-content div[data-testid="latest-commit-details"] span a');
                if (shaElement) {
                    const sha = shaElement.textContent.trim(); // Trim whitespace
                    navigator.clipboard.writeText(sha).then(() => {
                        console.log('Short SHA copied:', sha);
                        // Optional: Provide visual feedback
                        button.textContent = 'Copied!';
                        setTimeout(() => { button.textContent = 'Copy Short Sha'; }, 1500);
                    }).catch(err => {
                        console.error('Failed to copy SHA:', err);
                         // Optional: Provide error feedback
                        button.textContent = 'Error!';
                        setTimeout(() => { button.textContent = 'Copy Short Sha'; }, 1500);
                    });
                } else {
                    console.error('Could not find SHA element.');
                }
            });

            // Append the button next to the commit details div's parent
            commitDetailsDiv.parentNode.appendChild(button);
            console.log('Copy Short Sha button added.');
        } else {
            console.log('Target element for button not found yet.');
            // Optional: If it consistently fails, you might need to wait longer or use a MutationObserver
             setTimeout(addCopyButton, 500); // Retry after 500ms
        }
    }

    // Initial attempt to add the button
    // Check if it's a GitHub repository page (URL path has at least two parts: /user/repo)
    const pathParts = window.location.pathname.split('/').filter(Boolean);
    if (window.location.hostname === 'github.com' && pathParts.length >= 2) {
         // Wait a little bit after document-idle, as GitHub might still be rendering
        setTimeout(addCopyButton, 500);
    }
})();
