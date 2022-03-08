# **Nest JS 기본요소**

- [Nest JS 기본 구조](#1)
- [Nest JS 로직 흐름](#2)
- [Module](#3)
- [Controller](#4)
- [Service](#5)

## Nest JS 기본 구조<a id="1"></a>

- **eslintrc.js**
  - ESLint 관련 설정 파일
  - TS 쓰는 가이드라인, 문법 오류 알림 등

<br>

- **prettierrc**
  - Prettier 관련 설정 파일
  - 코드 형식을 맞추는데 사용

<br>

- **nest-cli.json**
  - nest 프로젝트를 위한 설정을 하는 json 파일

<br>

- **tsconfig.json**
  - Typescript 컴파일 설정을 하는 json 파일

<br>

- **tsconfig.build.json**
  - Build 시 필요한 설정을 하는 json 파일
  - "excludes"에 빌드 시 필요 없는 파일 명시

<br>

- **package.json**
  - 현재 프로젝트에 관한 정보와 패키지 매니저(npm, yarn)를 통해 설치한 모듈들의 의존성을 관리하는 파일

<br>

- src
  - **main.ts**
    - 앱을 생성하고 실행
  - **app.module.ts**
    - 앱 모듈 정의

---

<br>

## Nest JS 로직 흐름<a id="2"></a>

![image](https://user-images.githubusercontent.com/60606025/157290264-84863c70-03b9-4dec-a904-71c4de7e1f7c.png)

![image](https://user-images.githubusercontent.com/60606025/157287190-d55843f3-11a1-455c-9584-af06deecb237.png)

- Client 요청이 Server 진입점을 통해 라우터로 전달
- **Router**가 요청을 알맞은 **Controller**로 전달
- **Controller**에서 요청을 받아서 비즈니스 로직을 **Service**에서 처리 후 반환

<br>

**_코드 예시_**

```js
// Server 진입점
app.use('/api/user', require('./routes/user'));

// routes/user.route.js
router.get('/', userController.getUser);

// controllers/users.js
export const getUsers = async (req, res) => {
  let users = db.getUsers();
  return users;
};
```
---

<br>

## Nest JS Module<a id="3"></a>

<br>

Nest CLI 모듈 생성 명령어: `nest g module [name]`

<br>

- `@Module()` 데코레이터로 주석이 달린 클래스
- 모듈은 밀접하게 관련된 **기능 집합**으로 구성 요소를 구성
  - 같은 기능에 해당하는 것들은 하나의 모듈 폴더 안에 넣어서 사용
- 각 응용 프로그램에는 Nest가 사용하는 **시작점**인 **루트 모듈** 존재
- 모듈은 기본적으로 **싱글톤**
  - 여러 모듈 간 공급자의 동일한 인스턴스를 공유

<br>

- 모듈 생성 시 `app.module.ts`에 등록해야 함
- Nest CLI 사용 시 자동 등록

---

<br>

## Nest JS Controller<a id="4"></a>
---

<br>

## Nest JS Service<a id="5"></a>