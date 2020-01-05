import { Injectable } from '@nestjs/common';
import { Op } from 'sequelize';
import { v4 } from 'uuid';
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

  async addProduct(product: any) {
    const addProduct = {id: v4(), ...product};
    const newProduct = Product.create(addProduct);
    (await newProduct).save();
  }

  async deleteProduct(id: string) {
    await Product.destroy({where: {id}});
  }
}
