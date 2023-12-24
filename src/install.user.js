// ==UserScript==

// @name          SM - Toggl QR generator
// @description   Add toggl tracking QR code to GitHub issues.
// @author        Spreadmonitor
// @namespace     spreadmonitor

// @version       0.1b
// @downloadURL   https://cdn.jsdelivr.net/gh/spreadmonitor-playground/toggl-log-from-github@latest/src/install.user.js

// @noframes
// @run-at        document-end
// @match         https://github.com/**/issues/*

// @require       https://canvasjs.com/assets/script/canvasjs.min.js
// @require       https://cdn.rawgit.com/davidshimjs/qrcodejs/gh-pages/qrcode.min.js
// @require       https://cdn.jsdelivr.net/gh/spreadmonitor-playground/toggl-log-from-github@latest/src/main.js

// ==/UserScript==

(function () {
    'use strict';


    /**
     * A mapper object for pairing Github project names to Toggl project IDs and billable status.
     *
     * Note: One Github project maybe tracked in multiple Toggl projects. This is not handled
     * currently.
     */
    const projectIdMap = {
        'repo_name': { 'id': 1234567, 'billable': 'true' },
    };

    const workspaceId = ''

    new GithubTogglQR({ projectIdMap, workspaceId });
})();
