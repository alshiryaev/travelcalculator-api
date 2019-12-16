import { NestFactory } from '@nestjs/core';
import { config } from 'dotenv';
import { Sequelize } from 'sequelize-typescript';
import { AppModule } from './app.module';
import { Ingredient, Product } from './models/data-models';

async function bootstrap() {
  const sequelize = new Sequelize(process.env.DATABASE_URL);
  sequelize.addModels([Product, Ingredient]);

  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('/api');
  app.enableCors();
  await app.listen(5000);
}

config();
bootstrap();
