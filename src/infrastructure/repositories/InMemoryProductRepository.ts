import { Product } from "../../domain/product/Product";
// import type { ProductRepository } from "@domain/product/ProductRepository";
import type { ProductRepository } from "../../domain/product/ProductRepository"

export class InMemoryProductRepository implements ProductRepository {
  private readonly products = new Map<string, Product>();
  constructor() {
    this.products.set("1", new Product("1", "Laptop", 50000));

    this.products.set("2", new Product("2", "Keyboard", 1500));

    this.products.set("3", new Product("3", "Mouse", 800));

    this.products.set("4", new Product("4", "Monitor", 12000));
  }
  
  async add(product: Product): Promise<void> {
    this.products.set(product.id, product);
  }

  async update(product: Product): Promise<void> {
    this.products.set(product.id, product);
  }

  async delete(id: string): Promise<void> {
    this.products.delete(id);
  }

  async getById(id: string): Promise<Product | null> {
    return this.products.get(id) ?? null;
  }

  async getAll(): Promise<Product[]> {
    return Array.from(this.products.values());
  }
}
