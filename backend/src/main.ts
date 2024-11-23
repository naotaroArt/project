import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const PORT = process.env.PORT || 3000;
  const app = await NestFactory.create(AppModule);

  // Настройка Swagger
  const config = new DocumentBuilder()
    .setTitle('My API')
    .setDescription('API documentation for my project')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/api/docs', app, document);

  app.enableCors({
    origin: 'http://localhost:4200', // Укажите URL вашего фронтенда
    methods: 'GET,POST,PUT,DELETE',  // Разрешенные HTTP методы
  });

  await app.listen(PORT, () => console.log(`Server started on port = ${PORT}`));
}
bootstrap();
