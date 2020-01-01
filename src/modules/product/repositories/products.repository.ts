import { Injectable } from '@nestjs/common';
import { Op, where } from 'sequelize';
import { Product } from '../../../models/product.model';

@Injectable()
export class ProductsRepository {
  async getProducts(filter: string) {
    return await Product.findAll({
      where: {
        name: {
          [Op.iLike]: `%${filter}%`,
        },
      },
    });
  }
}
