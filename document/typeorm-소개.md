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

db.query(SELECT * FROM boards WHERE title = "Hello" AND status = "PUBLIC", (err, res))
```
