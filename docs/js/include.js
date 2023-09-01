function innerHTML_file(elem, file, render) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE)
        {
            if (this.readyState == 4) {
                if (this.status == 200) {
                    if (render)
                        elem.innerHTML = render.render(this.responseText);
                    else
                        elem.innerHTML = this.responseText;
                }
                if (this.status == 404) {
                    elem.innerHTML = "Page not found.";
                }
            }
        }
    }
    xhr.open("GET", file, true);
    xhr.send();
}

function includeHTML(callback) {
    var target, file;
    target = document.getElementsByTagName("include");
    for (var i = 0; i < target.length; i++) {
        file = target[i].getAttribute("include-html");
        if (file) {
            innerHTML_file(target[i], file, null);
        }
    }
}

function includeMD() {
    var target, file;
    target = document.getElementsByTagName("markdown");
    for (var i = 0; i < target.length; i++) {
        file = target[i].getAttribute("include-md");
        if (file) {
            const md = new Remarkable()
            innerHTML_file(target[i], file, md);
        }
    }
}