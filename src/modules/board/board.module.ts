import { Module } from '@nestjs/common'
import { BoardService } from './board.service'
import { TypeOrmModule } from '@nestjs/typeorm'
import { BoardRepository } from './board.repo'
import { APP_GUARD } from '@nestjs/core'
import { JwtAuthGuard } from '../auth/jwt-auth.guard'
import { BoardController } from './board.controller'

@Module({
  imports: [TypeOrmModule.forFeature([BoardRepository])],
  controllers: [BoardController],
  providers: [
    BoardService,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard
    }
  ],
  exports: [BoardService]
})
export class BoardModule {}
