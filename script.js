const head = document.querySelector("head");
const userAgent = navigator.userAgent.toLowerCase();

function addLink(path) {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = path;

    head.appendChild(link);
}

const isWindows = userAgent.indexOf("windows") !== -1;
const isFirefox = userAgent.indexOf("firefox") !== -1;

if (!isFirefox && isWindows) {
    addLink("./scrollbar.css");
}