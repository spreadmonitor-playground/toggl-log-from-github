class GithubTogglQR {
    constructor(settings) {
        this.projectIdMap = settings.projectIdMap;
        this.workspaceId = settings.workspaceId;

        try {
            this.renderStructure();
            this.qr = this.addQR();
        } catch (error) {
            console.error('Could not render toggl QR code!');
            console.error(error);
        }
    }

    renderStructure() {
        /** First we remove the previous QR code if one has been added already. */
        let existing = document.getElementById('github-toggl-qr-root');

        if (existing) {
            existing.parentNode.removeChild(existing);
            existing = null;
        }


        const qrUrlWrapper = document.createElement('a');
        qrUrlWrapper.id = 'github-toggl-qr-wrapper';

        const qrRoot = document.createElement('div');
        qrRoot.id = 'github-toggl-qr-root';
        qrRoot.classList.add('discussion-sidebar-item', 'sidebar-assignee', 'js-discussion-sidebar-item');

        const stylingDiv = document.createElement('div');
        stylingDiv.classList.add('js-issue-sidebar-form');
        qrRoot.appendChild(stylingDiv);

        const titleSpan = document.createElement('span');
        titleSpan.innerText = 'Toggl entry QR code';

        const qrContainer = document.createElement('div');
        qrContainer.id = 'qrContainer';
        qrContainer.style.height = '280px';
        qrContainer.style.width = '276px';
        qrContainer.style.padding = '10px';
        qrContainer.style.backgroundColor = 'white';

        stylingDiv.appendChild(titleSpan);
        stylingDiv.appendChild(qrContainer);
        qrUrlWrapper.appendChild(qrRoot)


        /** Append the final structure to the DOM */

        document.getElementById('partial-discussion-sidebar')?.prepend(qrUrlWrapper);
    }

    parseUrl(url) {
        const regex = /github\.com\/([a-zA-Z0-9\-]+)\/([a-zA-Z0-9\-]+)\/issues\/([0-9]+)/;
        const matches = url.match(regex);

        if (!matches) {
            throw new Error('URL parsing failed, not on a Github issue details page.');
        }

        return { repository: matches[2], issueNumber: Number.parseInt(matches[3], 10) };
    }

    addQR() {
        const pageDetails = this.parseUrl(location.href);
        const issueText = document.querySelector("#partial-discussion-header > div.gh-header-show > div > h1 > bdi").innerText
        const qrcode = new QRCode('qrContainer');
        this.url = 'https://track.toggl.com/timer/start?wid=' + this.workspaceId + '&desc=' + encodeURIComponent(issueText) + ' (%23' + pageDetails.issueNumber + ')&billable=' + this.projectIdMap[pageDetails.repository].billable + '&pid=' + this.projectIdMap[pageDetails.repository].id;
        qrcode.makeCode(this.url);
        const wrapper = document.getElementById('github-toggl-qr-wrapper');
        wrapper.href = this.url;

        return qrcode;
    }


}