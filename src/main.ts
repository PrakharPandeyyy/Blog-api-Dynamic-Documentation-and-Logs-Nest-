import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, //no additional data apart from that in dto can be added , it get stripped of before getting processed
      // forbidNonWhitelisted , this can also be used
      transform: true, // tranforms the incoming request to the instance of dto class after validation
    }),
  ); // setting validation pipes globally

  /*
   *Swagger COnfiguration for api documentation
   */
  const config = new DocumentBuilder()
    .setTitle('NestJs Blog Api')
    .setDescription('Use the base API URL as http://localhost:3000')
    .setTermsOfService('https://localhost:3000/terms-of-service')
    // .setLicense('MIT LICENSE') to set license
    .addServer('http://localhost:3000')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  /*
   *
   */

  await app.listen(3000);
}
bootstrap();
