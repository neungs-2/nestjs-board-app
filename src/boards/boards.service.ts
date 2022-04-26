import { Injectable, NotFoundException } from '@nestjs/common';
import { BoardStatus } from './board-status.enum';
import { v1 as uuid } from 'uuid';
import { CreateBoardDto } from './dto/create-board.dto';
import { BoardRepository } from './board.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Board } from './board.entity';

@Injectable()
export class BoardsService {
  constructor(
    @InjectRepository(BoardRepository)
    private boardRepository: BoardRepository,
  ) {}

  async getBoardById(id: number): Promise<Board> {
    const found = await this.boardRepository.findOne(id);

    if (!found) {
      throw new NotFoundException(`Can't find Board with id ${id}`);
    }

    return found;
  }

  createBoard(createBoardDto: CreateBoardDto): Promise<Board> {
    return this.boardRepository.createBoard(createBoardDto);
  }

  async deleteBoard(id: number): Promise<void> {
    const result = await this.boardRepository.delete(id);

    if (result.affected === 0) {
      throw new NotFoundException(`Can't find Board with id ${id}`);
    }

    console.log('result', result);
  }

  async updateBoardStatus(id: number, status: BoardStatus): Promise<Board> {
    const board = await this.getBoardById(id);

    board.status = status;
    await this.boardRepository.save(board);

    return board;
  }
  //   private boards: Board[] = [];

  //   getAllBoards(): Board[] {
  //     return this.boards;
  //   }

  //   // Tip: Unique ID 줄때, MongoDB 등에서 알아서 지정해주지만 일단은 uuid 모듈 사용
  //   createBoard(createBoardDto: CreateBoardDto) {
  //     const { title, description } = createBoardDto;
  //     const board: Board = {
  //       id: uuid(),
  //       title,
  //       description,
  //       status: BoardStatus.PUBLIC,
  //     };

  //     this.boards.push(board);
  //     return board;
  //   }

  //   getBoardById(id: string): Board {
  //     const found = this.boards.find((board) => board.id === id);

  //     if (!found) {
  //       throw new NotFoundException(`Can't find Board with id: ${id}`); // NotFoundException으로 예외처리
  //     }

  //     return found;
  //   }

  //   deleteBoard(id: string): void {
  //     const found = this.getBoardById(id); // deleteBoard 시에도 id 조회 안되면 예외처리를 위해 추가
  //     this.boards = this.boards.filter((board) => board.id !== found.id);
  //   }

  //   updateBoardStatus(id: string, status: BoardStatus): Board {
  //     const board = this.getBoardById(id);
  //     board.status = status;
  //     return board;
  //   }
  // }
}
