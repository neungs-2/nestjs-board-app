# Passport and Jwt

## **JWT (Json Web Token)**

- 정보를 JSON 개체로 안전하게 전송하기 위한 개방형 표준 (RFC 7519)
- **JSON 포멧**을 이용하여 사용자 속성을 저장하는 Claim 기반의 **Web Token**

<br>

**_JWT 구조_**

- JWT는 `Header` + `Payload` + `Signature` 구조
- 각 부분은 **JSON 형태**이고 **Base64Url**로 인코딩 된 구조

<br>

- **Header**
  - `typ` + `alg` 로 구성
  - **typ**: 토큰의 타입을 지정 (JWT)
  - **alg**: 알고리즘 방식을 지정

<br>

- **Payload**
  - 사용할 정보의 조각인 **Claim** 존재
  - Claim은 3가지로 나뉨

<br>

- **Registered Claim**(등록된 클레임): 토큰 정보를 표현하기 위한 데이터
  - _iss_: 토큰 발급자 (issuer)
  - _sub_: 토큰 제목 (subject)
  - _aud_: 토큰 대상자 (audience)
  - _exp_: 토큰 만료시간 (expiration)
  - _nbf_: 토큰 활성 날짜 (not before)
  - _iat_: 토큰 발급 시간 (issued at)
  - _jti_: 토큰 식별자 (JWT ID)

<br>

- **Public Claim**(공개 클레임)
  - 사용자 정의 클레임
  - 공개용 정보를 위해 사용
  - 충돌 방지를 위해 URI 포맷을 사용
  - `{ "https://jwt.techfulness.com": true }`

<br>

- **Private Claim**(비공개 클레임)
  - 사용자 정의 클레임
  - 서버와 클라이언트 사이에 임의로 지정한 정보를 저장
  - `{ "token_type": access }`

<br>

- **Signature**
  - 토큰을 인코딩하거나 유효성 검증 시 사용하는 고유한 암호화 코드
  - Header와 Payload를 각각 Base64Url로 인코딩한 값을 비밀키를 이용해 Header에서 정의한 알고리즘으로 해싱을 하고 다시 Base64Url로 인코딩하여 생성

<br>

## **JWT 단점 및 고려사항**

- **Self-contained**: 토큰 자체에 정보를 담고 있기 때문에 보안에 취약할 수 있음
- **토큰 길이**: 정보가 많아질수록 토큰의 길이가 늘어나 네트워크 부하를 줄 수 있음
- **Stateless**: JWT는 상태를 저장하지 않아서 생성 후 제어가 불가하기 때문에 꼭 토큰 만료 시간을 설정
- **Tore Token**: 토큰은 클라이언트 측에서 관리하므로 토큰을 저장해야 함
