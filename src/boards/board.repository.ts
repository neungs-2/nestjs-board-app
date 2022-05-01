// DB와 관련된 일은 서비스가 아닌 Repository에서 처리 (Repository Pattern)
// 리포지포리는 엔터티 개체와 함께 작동하며 CRUD 등을 처리
// Controller <--> Service <--> Repository 의 구조

import { EntityRepository, Repository } from 'typeorm';
import { User } from '../auth/user.entity';
import { BoardStatus } from './board-status.enum';
import { Board } from './board.entity';
import { CreateBoardDto } from './dto/create-board.dto';

@EntityRepository(Board)
export class BoardRepository extends Repository<Board> {
  async createBoard(createBoardDto: CreateBoardDto, user: User): Promise<Board> {
    const { title, description } = createBoardDto;
    const board = this.create({
      title,
      description,
      status: BoardStatus.PUBLIC,
      user,
    });

    await this.save(board);
    return board;
  }
}
