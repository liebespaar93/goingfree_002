

# hi
## test


---

이제 부터 마크다운이 됩니다

![랑크](./img/photo/cat.jpg)


# 프레임 워크 구연
## file-render
  - 깊은 파일까지 렌더링 가능하게 만들어 준다.
  ``` js
  function innerHTML_file(elem, file, render) {
      var xhr = new XMLHttpRequest();
      var markdown_len;
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
                          elem.innerHTML = this.responseText;
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
  ```
## include
  - html 파일을 추가하여 랜더링 해준다
  ```html
	<include include-html="./pages/header/nav.html"></include>
  ```
  파일을 참고 해준다
  ``` js
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
  ```
## markdown
  ```html
    <markdown include-md="./mdFiles/test.md"></markdown>
  ```
  ``` js
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
  ```
# code block 꾸미기
  ## 코드 language 추가해주기
  ``` css
  :root{
      --code-language-shadow : #000;
  }
  markdown pre {
      position: relative;
      background-color: #aaa;
      border-radius: 10px;
      overflow: hidden;
      margin: 10px;
  }
  markdown pre code {
      position: relative;
      display: block;
      width: 100%;
      overflow-x:scroll;
  }
  markdown pre code[class="language-bash"]::before {
      content: "bash";
      color: #fff;
      text-shadow: 0px 0px 2px var(--code-language-shadow),0px 0px 2px var(--code-language-shadow);
      position: relative;
      display: block;
      background-color: #444444;
      width: 100px;
      text-align: center;
      border-radius: 0% 0% 120px 0%;
  }
  ```


# 링크
## 깃허브 doc
[깃허브 doc action](https://docs.github.com/ko/actions)

# git Action 예시
``` bash
├── .github
│   ├── workflows
│   │   ├── main.yml
│   │   └── test.yml
│   └── workflow.md
└── README.md
```
### yaml 예시 파일
```yml  title='action.yml'
name: learn-github-actions
run-name: ${{ github.actor }} is learning GitHub Actions
on: [push]
jobs:
  check-bats-version:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '14'
      - run: npm install -g bats
      - run: bats -v
```
---
## 마크다운
[마크다운](https://www.markdownguide.org/basic-syntax/)  
[마크다운 Mermaid](http://mermaid.js.org/syntax/timeline.html) 

