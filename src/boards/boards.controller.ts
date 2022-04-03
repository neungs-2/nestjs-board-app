import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { Board } from './board.model';
import { BoardsService } from './boards.service';
import { CreateBoardDto } from './dto/create-board.dto';

// - Get에서 URL query string을 @Param()으로 받음
// - Post에서 Body를 @Body()로 받음
//    이때 전체를 가져오려면 괄호를 공백으로
//    특정 element를 가져오려면 괄호 안에 element 요소를 써줌
//    받아온 요소를 뒤의 변수에 넣어줌
// - Delete에서 return하는 것 없이 단순히 삭제만 한다면
//    Service는 void이고 Controller도 Service 실행만 하고 void

@Controller('boards')
export class BoardsController {
  constructor(private boardsService: BoardsService) {}

  @Get('/')
  getAllBoards(): Board[] {
    return this.boardsService.getAllBoards();
  }

  @Get('/:id')
  getBoardById(@Param('id') id: string): Board {
    return this.boardsService.getBoardById(id);
  }

  @Post()
  createBoard(@Body() createBoardDto: CreateBoardDto): Board {
    return this.boardsService.createBoard(createBoardDto);
  }

  @Delete('/:id')
  deleteBoard(@Param('id') id: string): void {
    this.boardsService.deleteBoard(id);
  }
}
