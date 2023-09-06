function innerHTML_file(elem, file, render) {
    var xhr = new XMLHttpRequest();
    var markdown_len, include_len;
    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (this.readyState == 4) {
                if (this.status == 200) {
                    if (render)
                        elem.innerHTML = render.render(this.responseText);
                    else
                    {
                        include_len = document.getElementsByTagName("include").length
                        markdown_len = document.getElementsByTagName("markdown").length
                        // elem.innerHTML = this.responseText;
                        $(elem).html(this.responseText);
                        if (markdown_len < document.getElementsByTagName("markdown").length)
                            includeMD();
                        if (include_len < document.getElementsByTagName("include").length)
                            includeHTML();
                    }
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

function includeHTML() {
    var target, file;
    target = document.getElementsByTagName("include");
    for (var i = 0; i < target.length; i++) {
        file = target[i].getAttribute("include-html");
        if (file && !target[i].classList.contains('include-load')) {
            innerHTML_file(target[i], file, null);
            target[i].classList.add('include-load')
        }
    }
}

function includeMD() {
    var target, file;
    target = document.getElementsByTagName("markdown");
    for (var i = 0; i < target.length; i++) {
        file = target[i].getAttribute("include-md");
        if (file && !target[i].classList.contains('include-load')) {
            const md = new Remarkable()
            innerHTML_file(target[i], file, md);
            target[i].classList.add('include-load')
        }
    }
}

function include() {
    includeHTML();
}