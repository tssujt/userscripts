// ==UserScript==
// @name         Wikipedia Auto Switch to Simplified Chinese
// @namespace    https://github.com/tssujt
// @version      0.1
// @description  自动将维基百科页面切换到简体中文（中国大陆）
// @author       tssujt
// @match        *://*.wikipedia.org/*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    // 检查当前是否为维基百科页面
    if (window.location.hostname.includes('wikipedia.org')) {
        // 如果当前页面已经是简体中文，则不进行任何操作
        if (window.location.pathname.includes('/zh-cn/') === false) {
            // 等待语言面板加载
            setTimeout(() => {
                // 查找简体中文（中国大陆）链接
                const zhCNLink = document.querySelector('li.ca-variants-zh-Hans-CN a');
                if (zhCNLink) {
                    window.location.href = zhCNLink.href;
                }
            }, 1000);
        }
    }
})();
