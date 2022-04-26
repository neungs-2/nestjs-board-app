# TypeORM (Object Relational Mapping)

## **TypeORM 이란?**

- node.js에서 실행되고 Typescript로 작성된 객체 관계형 매퍼 라이브러리
- TypeORM은 MySQL, MsSQL Server, PostgreSQL, MariaDB, SQLite, Oracle 등 여러 DB 지원

<br>

## **ORM(Object Relational Mapping)이란?**

- OOP의 객체와 관계형 데이터베이스의 데이터를 자동으로 변형 및 연결(매핑)하는 작업
- ORM을 이용한 개발은 객체와 DB의 변형에 유연하게 사용 가능

<br>

**_TypeORM vs Pure Javascript_**

```js
const boards = board.find({title: 'Hello', status: 'PUBLIC'});

db.query(SELECT * FROM boards WHERE title = "Hello" AND status = "PUBLIC",
  (err, res) => {
    if (err) {
      throw new Error('Error');
    }
    boards = result.rows;
  }
);
```

<br>

## **TypeORM 특징과 이점**

- 모델을 기반으로 데이터베이스 테이블 체계를 자동으로 생성
- 데이터베이스에서 개체를 쉽게 삽입, 업데이트 및 삭제 가능
- 테이블 간 매핑 (1:1, 1:N, M:N)
- 간단한 CLI 명령 제공

<br>

## **remove() vs delete()**

- 둘 다 아이템 삭제를 위한 메서드
- `remove()`는 아이템 존재 시 제거, 없거나 제거하지 못하면 **404 Error** 발생
- `remove()`는 하나의 아이템 제거 시 2번 DB에 접근 ( 아이템 유무 + 아이템 제거 )
- `delete()`는 아이템이 존재 시 제거, 없으면 아무런 영향 없음
