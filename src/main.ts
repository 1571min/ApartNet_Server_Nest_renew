import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { ConfigService } from '@nestjs/config'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  const swaggerConfig = new DocumentBuilder()
    .setTitle('apartmentNetworkAPI')
    .setVersion('1.0')
    .addTag('apartment')
    .build()
  const document = SwaggerModule.createDocument(app, swaggerConfig)
  SwaggerModule.setup('api', app, document)
  const configService = app.get(ConfigService)
  await app.listen(configService.get('APP.PORT'))
}
bootstrap()
