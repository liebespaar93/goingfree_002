// function includeHTML() {
//     var file;
//     const tag_include = document.getElementsByTagName("include");
//     for (i = 0; i < tag_include.length; i++) {
//         elmnt = tag_include[i];
//         file = tag_include[i].getAttribute("include-html");
//         console.log(file);
//         if (file) {
//             const xhr_html = new XMLHttpRequest();
//             xhr_html.onreadystatechange = () => {
//                 if (xhr_html.readyState === XMLHttpRequest.DONE)
//                 {
//                     if (xhr_html.status == 200) {
//                     const res_html = xhr_html.responseText;
//                     elmnt.innerHTML = res_html;
//                     }
//                     else if (xhr_html.status == 404)
//                     {
//                         const res_html = xhr_html.responseText;
//                         elmnt.innerHTML = "404 pages"
//                     }
//                 }
//             }
//             xhr_html.open("GET", file, true);
//             xhr_html.send();
//         }
//     }
// }

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

    // const xhr_markdown = new XMLHttpRequest()

    // xhr_markdown.onreadystatechange = function () {
    //     if (xhr_markdown.readyState === XMLHttpRequest.DONE && xhr_markdown.status === 200) {
    //         const md = new Remarkable()
    //         const markdownContent = xhr_markdown.responseText
    //         const html = md.render(markdownContent)
    //         document.getElementById('markdown').innerHTML = html
    //     }
    // }
    // const url = './mdFiles/test.md'
    // xhr_markdown.open('GET', url, true)
    // xhr_markdown.send()
}