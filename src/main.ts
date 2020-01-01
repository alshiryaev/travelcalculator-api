import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { config } from 'dotenv';
import { Sequelize } from 'sequelize-typescript';
import { AppModule } from './app.module';
import { Food } from './models/food.model';
import { Product } from './models/product.model';
import { Ingredient } from './models/ingredient.model';
import { Recipe } from './models/recipe.model';
import { TravelType } from './models/travel-type.model';
import { FoodTravelType } from './models/food-traveltypes.model';
import { DayTimeType } from './models/daytime-type.model';
import { FoodDayTime } from './models/food-daytimes.model';

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
  sequelize.addModels([
    Product,
    Ingredient,
    Food,
    Recipe,
    TravelType,
    FoodTravelType,
    DayTimeType,
    FoodDayTime,
  ]);

  await app.listen(5000);
}

config();
bootstrap();
