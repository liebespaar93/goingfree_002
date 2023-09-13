# liebespaar93.github.io



# tag 커스텀
## include 
### include-md
- 'include-md' attribute 를 사용하여 '.md' 파일을 remarkable.js 라이브러리를 사용해 랜더링 해준다.
### include-html
- 'include-html' attribute를 사용하여 '.html' 파일을 넣어준다.
- <span style="color:yellow">주의</span>  
    외부 파일에 \<body\> 테그로 묶여 있어야 합니다.
    ``` bash title='Tree'
    ├── mdfile
    │   └── info.md
    ├── pages
    │   └── nav.html
    └── index.html
    ```
    ``` markdown title='/mdfile/info.md'
    # 마크다운 입니다
    ## info.md 파일을 불러옵니다
    ```

    ``` html title='/pages/nav.html'
    <body>
        <p> nav.html입니다 </p>
    </body>
    ```

    ``` html title='index.html'
    <html>
    <body>
        <include include-html='/pages/nav'></include>
        <include include-md='/mdfile/info.md'></include>
    <body>
    </html>
    ```

