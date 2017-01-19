const plaintextLink = function(title, url) {
    return `${title} ${url}`;
};

const markdownLink = function(title, url) {
    return `[${title}](${url})`;
};

const orgmodeLink = function(title, url)  {
    return `[[${url}][${title}]]`;
};

const onContextMenu = function(event) {
    const title = document.title;
    const url = window.location.href;
    alert(markdownLink(title, url));
}

document.addEventListener("contextmenu", onContextMenu, false);
