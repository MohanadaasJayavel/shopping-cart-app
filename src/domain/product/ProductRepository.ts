import { Product } from "./Product";

export interface ProductRepository {
  add(product: Product): Promise<void>;

  update(product: Product): Promise<void>;

  delete(id: string): Promise<void>;

  getById(id: string): Promise<Product | null>;

  getAll(): Promise<Product[]>;
}