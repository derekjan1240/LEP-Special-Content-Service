import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(8084, () => {
    Logger.log('Special Content Service is running on port 8084!');
  });
}
bootstrap();
