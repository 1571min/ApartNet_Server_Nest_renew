import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { AuthModule } from './modules/auth/auth.module'
import { UserModule } from './modules/user/user.module'
import { MessageModule } from './modules/message/message.module'
import { BoardModule } from './modules/board/board.module'
import { CommentModule } from './modules/comment/comment.module'
import { ConfigModule, ConfigService } from '@nestjs/config'
import configOption from './config/configOption'
import { TypeOrmModule } from '@nestjs/typeorm'
import { join } from 'path'

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configOption]
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get('DB.HOST'),
        port: configService.get('DB.PORT'),
        username: configService.get('DB.USERNAME'),
        password: configService.get('DB.PASSWORD'),
        database: configService.get('DB.DATABASE'),
        entities: [join(__dirname, '/modules/**/*.entity.js')],
        synchronize: false
      })
    }),
    AuthModule,
    UserModule,
    MessageModule,
    BoardModule,
    CommentModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
