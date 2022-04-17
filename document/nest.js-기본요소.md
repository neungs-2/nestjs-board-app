# **Nest JS 기본요소**

- [Nest JS 기본 구조](#1)
- [Nest JS 로직 흐름](#2)
- [Module](#3)
- [Controller](#4)
- [Service](#5)
- [DTO](#6)
- [Nest JS Pipe](#7)

<br>

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

Nest CLI 모듈 생성 명령어: `nest g module <name> [option]`

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

<br>

Nest CLI 컨트롤러 생성 명령어: `nest g controller <name> [option]`
<br> Option 예시: `--no-spec`, `--dry-run` 등

<br>

- **Controller**는 들어오는 요청을 받고 클라이언트에 응답을 반환하는 역할
- `@Controller([경로])` 데코레이터로 클래스를 데코레이션하여 정의
- **Service**에서 로직을 처리하고 **Controller**에서는 `Request`, `Response` 처리

<br>

**_Handler_**

- 핸들러는 `@Get`, `@Post`, `@Delete` 등과 같은 데코레이터로 장식
  된 컨트롤러 클래스 내의 단순한 메서드
- Client에서 보낸 값들을 Handler에서 받는 법

  - **Express.js**
    - `app.post('/', (res, req) => { console.log(req.body) })`
    - **Express**에서는 bodyParser를 이용하여 req.body 식으로 받아왔음
  - **Nest.js**

    - **Nest**에서는 `@Body() body`를 이용해서 가져옴
    - 전체 Body가 아닌 개별 요소를 받으려면 `@Body('title') title: string` 처럼 괄호 안에 명시
      <br>

      ```ts
        @Post()
        createBoard(@Body() body, @Body('title') title: string): Board {
          console.log('body', body);
          console.log('title', title);
        }
      ```

<br>

---

<br>

## Nest JS Service<a id="5"></a>

<br>

Nest CLI 서비스 생성 명령어: `nest g service <name> [option]`

<br>

- **Service**는 _데이터 처리_ 및 _비즈니스 로직 처리_ 담당
  - 컨트롤러에서 데이터의 유효성 체크
  - DB에 아이템을 생성
  - 기타 다양한 처리
- `@Injectable()` 데코레이터로 감싸져서 모듈에 제공
  - 이 때, 서비스 인스턴스는 애플리케이션 전체에서 사용 가능

<br>

**_Provider_**

- Provider는 종속성으로 주입하여 사용하는 개념
  - Provider 패턴은 전역(루트)에 데이터를 넣고 빼와서 사용하는 객체
- Nest 클래스(서비스, 리포지토리, 팩토리, 핼퍼 등)은 프로바이더로 취급
- module 파일에서 Provider를 등록하여 사용
  - Service 생성 시 module의 Provider에 Service 등록

<br>

**_Dependency Injection_**; 종속성 주입

- Service를 Controller에서 이용할 수 있는 방법
  - Controller에서 Service 모듈 **import**
  - Controller 클래스의 **constructor에 주입**
  - `this.xxxService.<method name>` 식으로 사용
- Service에 정의한 메소드를 Controller에서 사용

<br>

**접근 제한자를 사용하여 소스 간단하게 하기**

- **접근 제한자를 생성자 파라미터에 선언** 시 접근 제한자가 사용된 **생성자 파라미터는 암묵적으로 클래스 프로퍼티로 선언**

```ts
// 접근 제한자 없이 작성한 소스
@Controller('boards')
export class BoardsController {
  boardsService: BoardsService;

  constructor(boardsService: BoardsService) {
    this.boardsService = boardsService;
  }
}

// 접근 제한자로 간단히 작성
@Controller('boards')
export class BoardsController {
  constructor(private boardsService: BoardsService) {}
}
```

---

<br>

## Data Transfer Object(DTO)<a id="6"></a>

- **계층간 데이터 교환**을 위한 객체
- **DB에서 데이터**를 얻어 **Service나 Controller 등으로 보낼 때 사용**하는 객체
- 데이터가 **네트워크를 통해 전송되는 방법을 정의**하는 객체
- interface나 class를 이용해서 정의 (Nest에서는 **Class** 추천)
  - **Class**는 ES6 표준의 일부로 컴파일된 JS에서 실제 엔티티로 유지
  - **Interface**는 TS의 일부로 트랜스 파일 중에 제거되어 Nest에서 참조 불가
  - 파이프 같은 기능을 런타임에서 사용할 수 있으므로 런타임 시 사용가능한 **Class 추천**
- **DTO 사용 이유**
  - 효율적인 데이터 유효성 체크
  - 코드를 더 안정적으로 만들어 줌
  - **Typescript의 타입**으로도 사용됨

---

<br>

## Nest JS Pipe<a id="7"></a>

- 파이프는 @Injectable() 데코레이터로 주석이 달린 클래스
- **data transformation**과 **data validation**을 위해 사용
- 컨트롤러 경로 처리기(Router Handler)에 의해 처리되는 인수에 대해 작동
- Nest는 메소드 호출 직전 파이프 삽입, 파이프는 메소드를 향하는 인수를 수신하고 작동

<br>

***Data Transformation***
- 입력 데이터를 원하는 형식으로 변환
- ex) 숫자를 받고 싶은데 문자열 형식 데이터 입력 시 파이프에서 숫자로 자동 변환

<br>

***Data Validation***
- 입력 데이터를 평가하고 유효한 경우 그대로 전달, 유효하지 않은 경우 예외 발생
- ex) 입력 데이터 크기가 10글자 이하여야 하는데 초과 시 에러 발생

<br>

### **Pipe 사용법(Binding Pipes)**
- *핸들러 레벨*, *파라미터 레벨*, *글로벌 레벨* 3가지로 Binding 방법이 나눠짐

<br>

***Handler-level Pipes***
- 핸들러 레벨에서 `@UsePipes()` 데코레이터를 이용
- 핸들러 내부 모든 파라미터(title, description)에 파이프 적용
```ts
@Post()
@UsePipes(pipe)
createBoard(
  @Body('title') title,
  @Body('description') description
) {
  // ...
}
```

<br>

***Parameter-level Pipes***
- 파라미터 레벨의 파이프로 특정 파라미터에만 적용
- 아래의 경우 title만 파라미터 파이프가 적용
```ts
@Post()
createBoard(
  @Body('title', ParameterPipe) title,
  @Body('description') description
) {
  // ...
}
```

<br>

***Global-level Pipes***
- 애플리케이션 레벨의 파이프로 클라이언트에서 들어오는 모든 요청에 적용
- `app.useGlobalPipes(GlobalPipes)`식으로 사용
- 가장 상단 영역인 **main.ts**에 위치
```ts
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(GlobalPipes);
  await app.listen(3000);
}
bootstrap();
```

<br>

### **Built-in Pipes**
- Nest JS에서 기본적으로 만들어놓은 6가지의 파이프
  - ValidationPipe
  - ParseIntPipe
  - ParseBoolPipe
  - ParseArrayPipe
  - ParseUUIDPipe
  - DefaultValuePipe
