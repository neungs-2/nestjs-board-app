import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { BoardStatusValidationPipe } from '../pipes/board-status-validation.pipe';
import { BoardStatus } from './board-status.enum';
import { Board } from './board.entity';
import { BoardsService } from './boards.service';
import { CreateBoardDto } from './dto/create-board.dto';

// - Get에서 URL query string을 @Param()으로 받음
// - Post에서 Body를 @Body()로 받음
//    이때 전체를 가져오려면 괄호를 공백으로
//    특정 element를 가져오려면 괄호 안에 element 요소를 써줌
//    받아온 요소를 뒤의 변수에 넣어줌
// - Delete에서 return하는 것 없이 단순히 삭제만 한다면
//    Service는 void이고 Controller도 Service 실행만 하고 void
// - Memory DB에서 Postgres로 변경하면서 return type이 Promise로 바뀌었음

@Controller('boards')
@UseGuards(AuthGuard()) // controller level에서 Guard 걸어주기 (인증된 유저만 이용 가능)
export class BoardsController {
  constructor(private boardsService: BoardsService) {}

  @Get()
  getAllBoards(): Promise<Board[]> {
    return this.boardsService.getAllBoards();
  }

  @Get('/:id')
  getBoardById(@Param('id') id: number): Promise<Board> {
    return this.boardsService.getBoardById(id);
  }

  @Post()
  @UsePipes(ValidationPipe)
  createBoard(@Body() createBoardDto: CreateBoardDto): Promise<Board> {
    return this.boardsService.createBoard(createBoardDto);
  }

  // ParseIntPipe: id가 숫자인지 validation을 위해 사용
  @Delete('/:id')
  deleteBoard(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.boardsService.deleteBoard(id);
  }

  @Patch('/:id/status')
  updateBoardStatus(
    @Param('id', ParseIntPipe) id: number,
    @Body('status', BoardStatusValidationPipe) status: BoardStatus,
  ): Promise<Board> {
    return this.boardsService.updateBoardStatus(id, status);
  }
  //   @Get('/')
  //   getAllBoards(): Board[] {
  //     return this.boardsService.getAllBoards();
  //   }

  //   @Get('/:id')
  //   getBoardById(@Param('id') id: string): Board {
  //     return this.boardsService.getBoardById(id);
  //   }

  //   @Post()
  //   @UsePipes(ValidationPipe) // 추가해줘야 DTO에 명시한대로 파이프 자동 동작
  //   createBoard(@Body() createBoardDto: CreateBoardDto): Board {
  //     return this.boardsService.createBoard(createBoardDto);
  //   }

  //   @Delete('/:id')
  //   deleteBoard(@Param('id') id: string): void {
  //     this.boardsService.deleteBoard(id);
  //   }

  //   @Patch('/:id/status')
  //   updateBoardStatus(
  //     @Param('id') id: string,
  // @Body('status', BoardStatusValidationPipe) status: BoardStatus,
  //   ) {
  //     return this.boardsService.updateBoardStatus(id, status);
  //   }
}
