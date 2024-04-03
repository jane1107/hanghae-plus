# 프로젝트 개요

React 프로젝트에서 SEO 대응을 위한 최소 작업 대응

## 개발 환경 세팅

- create-react-app 환경
  > 참고 [create-react-app](https://create-react-app.dev/docs/getting-started/)

## SEO 대응

- [react-helmet](https://github.com/nfl/react-helmet) 패키지를 사용하여 메타태그 세팅
- [open graph protocol](https://ogp.me/) 태그 세팅
- twitter tag 세팅

## Favicon 세팅

[favicon-generator.org](https://www.favicon-generator.org/) 에서 생성

### 각 파일의 역할

- favicon.ico : url 왼쪽에 나타나는 아이콘
- manifest.json : 웹 어플리케이션을 다운로드(설치) 할 수 있도록 메타데이터를 제공
- android-icon\* : 안드로이드에서 어플리케이션이 사용할 아이콘 (ex. 모바일 웹에서 홈 화면에 추가 하면 보이는 아이콘)
- apple-icon\* : 아이폰에서 사용할 아이콘
- ms-icon\* : ms에서 사용할 아이콘

## SEO 스코어 분석

- 스코어 분석에 사용한 서비스 :

### 개선점

- XML Sitemaps 작성
- robot.txt 최적화
- 모바일 친화적 최적화
