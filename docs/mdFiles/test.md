# hi
## test


---

이제 부터 마크다운이 됩니다

![랑크](./img/photo/cat.jpg)

이제 다됫다
# 링크
### 깃허브 doc
[깃허브 doc action](https://docs.github.com/ko/actions)

---
### 마크다운
[마크다운](https://www.markdownguide.org/basic-syntax/)  
[마크다운 Mermaid](http://mermaid.js.org/syntax/timeline.html) 

---
# git_action
git action 사용법



# action 이란 
Git 이벤트가 발생할때 작업하는 것

## 구성
### workflow
- yaml파일로 만들어진 이벤트에 따라 실행 되는것
### event
- 깃 레포지토리에 무언가 이벤트가 생겼을때 
### jobs
- yml 파일에 써저있는 해야할 일
### action
- 뭐 이건.. 그냥 액션 그자체
### runner
- 워크플로우 os 선택하는거 같은 느낌

### 위치
- ``` .github/workflows/ ``` 에 만든다 



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