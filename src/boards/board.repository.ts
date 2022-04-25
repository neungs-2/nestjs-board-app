// DB와 관련된 일은 서비스가 아닌 Repository에서 처리 (Repository Pattern)
// 리포지포리는 엔터티 개체와 함께 작동하며 CRUD 등을 처리
// Controller <--> Service <--> Repository 의 구조

import { EntityRepository, Repository } from 'typeorm';
import { Board } from './board.entity';

@EntityRepository(Board)
export class BoardRepository extends Repository<Board> {}
