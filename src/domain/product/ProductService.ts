import { Product } from "./Product";
import type { ProductRepository } from "./ProductRepository";

export class ProductService {
  constructor(private readonly repository: ProductRepository) {}

  async create(product: Product): Promise<void> {
    const existing = await this.repository.getById(product.id);

    if (existing) {
      throw new Error("Product already exists");
    }

    await this.repository.add(product);
  }

  async update(product: Product): Promise<void> {
    const existing = await this.repository.getById(product.id);

    if (!existing) {
      throw new Error("Product not found");
    }

    await this.repository.update(product);
  }

  async delete(id: string): Promise<void> {
    const existing = await this.repository.getById(id);

    if (!existing) {
      throw new Error("Product not found");
    }

    await this.repository.delete(id);
  }

  async getById(id: string): Promise<Product | null> {
    return this.repository.getById(id);
  }

  async getAll(): Promise<Product[]> {
    return this.repository.getAll();
  }
}
