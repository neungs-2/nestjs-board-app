# Configuration 개요

## **설정(Configuration)이란?**

- 소스 코드 내에서 개발 환경이나 운영 환경에 따라 다르게 코드를 넣어줘야 할 때가 있음
- 혹은 노출되면 안되는 코드 존재
- 위와 같은 코드들은 설정 파일을 따로 만들어서 보관

<br>

## **설정 파일**

- 설정 파일은 runtime 도중 바뀌지 않고 애플리케이션 시작 시 로드가 되어 값을 정의
- 설정 파일은 여러가지 파일 형식 사용
  - XML
  - JSON
  - YAML
  - 환경변수

<br>

**_Codebase vs Environment Variable(환경변수)_**

- XML, JSON, YAML은 **Codebase**에 해당
- **Codebase**: 일반적으로 Port 같이 노출되어도 상관 없는 정보들
- **환경변수**: 비밀번호나 API Key 같은 노출되면 안되는 정보들

<br>

## **설정을 위한 모듈**

- **Window**에서는 `win-node-env`를 설치해야 함
  - Window에서는 기본적으로 환경변수를 지원하지 않기 때문
  - `npm install -g win-node-env`
- **Config** 모듈 설치 (window, mac 모두)
  - `npm install config --save`
