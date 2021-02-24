import { Controller, Get, Param } from '@nestjs/common'
import { BoardService } from './board.service'
import { Public } from '../../common/meta.deco'

@Controller('board')
export class BoardController {
  constructor(private readonly boardService: BoardService) {}

  @Public()
  @Get(':boardId')
  async getBoard(@Param('boardId') boardId: number) {
    return await this.boardService.findOne(boardId)
  }
}
