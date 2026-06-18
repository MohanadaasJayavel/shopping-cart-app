import { ProductService } from "@domain/product/ProductService";
import { CartService } from "@domain/cart/CartService";

import { InMemoryProductRepository }
from "./repositories/InMemoryProductRepository";

import { InMemoryCartRepository }
from "./repositories/InMemoryCartRepository";

export const productRepository =
  new InMemoryProductRepository();

export const cartRepository =
  new InMemoryCartRepository();

export const productService =
  new ProductService(
    productRepository
  );

export const cartService =
  new CartService(
    cartRepository
  );