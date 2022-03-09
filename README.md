# **Nest.js Practice - 게시판 APP 구현**

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

<br>

## **Structure**

![image](https://user-images.githubusercontent.com/60606025/157282908-6f0c1537-c40f-42c4-b2e4-d896d2ce9e17.png)

<br>

## **Documents**

[Nest.JS 기본요소](https://github.com/neungs-2/nestjs-board-app/blob/main/document/nest.js-%EA%B8%B0%EB%B3%B8%EC%9A%94%EC%86%8C.md)

[CRUD 구현]()

[Pipe 이용]()

[Postgres & TypeORM 연동]()

[데이터베이스를 이용한 CRUD 구현]()

[인증기능 구현하기]()

[게시물에 접근하는 권한 처리]()

[로그 남기기]()

[설정 및 마무리]()

<br>

## **Installation**

```bash
# Nest.js CLI 설치
$ npm i -g @nestjs/cli

# Nest.js 새로운 프로젝트 생성
$ nest new <project-name> [option]

# Example
$ nest new nestjs-board-app

$ mkdir nestjs-board-app
$ cd nestjs-board-app
$ nest new ./
```

## **Running the app**

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## **Test**

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## **Generate**

```bash
$ nest g <module/controller/service> <name> [option]
# nest: using nest cli
# g: generate
# module/controller/service: schematic that i want to create
# name: name of the schematic
# option: option (example: `-no--spec` => 테스트 코드 생성 X)
```
