import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, //no additional data apart from that in dto can be added , it get stripped of before getting processed
      // forbidNonWhitelisted , this can also be used
    }),
  ); // setting validation pipes globally
  await app.listen(3000);
}
bootstrap();
