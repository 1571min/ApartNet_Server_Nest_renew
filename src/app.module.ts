import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { MessageModule } from './message/message.module';
import { BoardModule } from './board/board.module';
import { CommentModule } from './comment/comment.module';

@Module({
  imports: [AuthModule, UserModule, MessageModule, BoardModule, CommentModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
