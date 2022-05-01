import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn, Unique } from 'typeorm';
import { Board } from '../boards/board.entity';
// 유저 이름에 유니크한 값 주기!
// 방법 1: repository에서 findOne 이용하여 같은 이름의 데이터 확인 후 저장 (DB 조회, 삽입 2번의 트랜잭션)
// 방법 2: DB 레벨에서 같은 이름 존재 시 에러를 반환 (DB에 그냥 삽입하는 트랜잭션만 발생)
@Entity()
@Unique(['username']) // 위의 방법 2에 해당하는 코드
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  password: string;

  // Param 설명: (type, 접근방법, user 정보 조회 시 board 정보도 가져올지?)
  @OneToMany((type) => Board, (board) => board.user, { eager: true })
  boards: Board[];
}
