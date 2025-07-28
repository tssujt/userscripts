# Userscripts

A collection of useful Tampermonkey userscripts.

## Script List

### Wikipedia Auto Switch to Simplified Chinese

Automatically switches Wikipedia pages to Simplified Chinese (Mainland China) version.

- File: [wikipedia-zh-cn.user.js](https://github.com/tssujt/userscripts/raw/refs/heads/main/wikipedia-zh-cn.user.js)
- Function: When visiting any Wikipedia page, it automatically switches to Simplified Chinese (Mainland China) version if available
- Applicable sites: `*.wikipedia.org`

### GitHub Copy Short Sha

Adds a button to copy the short commit SHA on GitHub repository pages.

- File: [github-copy-short-sha.user.js](https://github.com/tssujt/userscripts/raw/refs/heads/main/github-copy-short-sha.user.js)
- Function: Adds a "Copy Short Sha" button next to the latest commit information on the main page of a GitHub repository. Clicking it copies the 7-character short SHA to the clipboard.
- Applicable sites: `*://github.com/*` (specifically repository pages)

### MangaForFree Remove Offer iframes

Automatically removes advertising iframe elements on MangaForFree website.

- File: [mangaforfree-remove-offer-iframe.user.js](https://github.com/tssujt/userscripts/raw/refs/heads/main/mangaforfree-remove-offer-iframe.user.js)
- Function: Automatically removes parent div elements containing iframe elements with title="offer" on mangaforfree.net
- Applicable sites: `https://mangaforfree.net/*`

### Yuque Remove Clipboard iframes

Automatically removes iframe elements with clipboard-write permission on Yuque website.

- File: [yuque-remove-clipboard-iframe.user.js](https://github.com/tssujt/userscripts/raw/refs/heads/main/yuque-remove-clipboard-iframe.user.js)
- Function: Automatically removes iframe elements with allow="clipboard-write" attribute on yuque.com to prevent unwanted clipboard access
- Applicable sites: `https://www.yuque.com/*`

## Installation

1. Install [Tampermonkey](https://www.tampermonkey.net/) browser extension
2. Click on the script link above
3. Click the "Install" button in the Tampermonkey page that opens

## Contributing

Feel free to submit Pull Requests to add new useful scripts or improve existing ones.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
