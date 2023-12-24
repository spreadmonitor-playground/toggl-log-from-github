# toggl-log-from-github

Start logging in toggl by scanning a QR code/clicking on it on a GitHub issue page.

## Installation

### Prerequesities

You need the [Tampermonkey][tampermonkey] browser extension installed. You can install it for the following browsers:

- Google Chrome - [download using Chrome](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)
- Mozilla Firefox - [download using Firefox](https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/)
- Safari - [download using Safari](https://safari-extensions.apple.com/details/?id=net.tampermonkey.safari-G3XV72R5TC)
- Microsoft Edge (Chromium) - [download using Edge](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)
- Microsoft Edge - [download using Edge](https://www.microsoft.com/store/apps/9NBLGGH5162S)
- and some [others][tampermonkey]

### Script installation

You can install this script via clicking the install button below or via manually copying the [content of the installation script](https://github.com/spreadmonitor-playground/toggl-log-from-github/blob/develop/src/install.user.js) to an empy script
created in the Trampermonkey dashboard.

[![install-url][badge-svg]][install-url]

### Configuration

After installation you need to add your Toggl workspace id (a 7-digit ID that you can obtain by clicking on Settings. It will appear in your url.) to the init script and define the mapping between the Toggl project IDs and github repo names.

[tampermonkey]: https://www.tampermonkey.net/
[install-url]: https://cdn.jsdelivr.net/gh/spreadmonitor-playground/toggl-log-from-github@latest/src/install.user.js
[badge-svg]: https://badgen.net/badge/tampermonkey/install
