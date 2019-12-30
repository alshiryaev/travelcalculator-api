import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { config } from 'dotenv';
import { Sequelize } from 'sequelize-typescript';
import { AppModule } from './app.module';
import { Ingredient, Product } from './models/data-models';
import { Food } from './models/food.model';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('/api');
  app.enableCors();

  const options = new DocumentBuilder()
    .setTitle('Travelcalculator API')
    .setDescription('Api for Travelcalculator App')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);

  const sequelize = new Sequelize(process.env.DATABASE_URL);
  sequelize.addModels([Product, Ingredient, Food]);


  await app.listen(5000);
}

config();
bootstrap();
