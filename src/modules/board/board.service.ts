import { Injectable } from '@nestjs/common'
import { BoardRepository } from './board.repo'

@Injectable()
export class BoardService {
  constructor(private readonly boardRepository: BoardRepository) {}

  async findOne(boardId: number) {
    return await this.boardRepository.findOne(boardId)
  }
}
