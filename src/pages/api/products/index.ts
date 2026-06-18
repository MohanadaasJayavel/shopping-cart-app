import type { APIRoute } from "astro";
import { v4 as uuid } from "uuid";

import { productService } from "../../../infrastructure/container";

import { AddProduct } from "../../../application/usecases/product/AddProduct";
import { GetProduct } from "../../../application/usecases/product/GetProduct";

import { ProductSchema } from "../../../types/productSchema";

export const GET: APIRoute = async () => {
  try {
    const useCase = new GetProduct(productService);

    const products = await useCase.all();

    return new Response(JSON.stringify(products), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({
        error: error instanceof Error ? error.message : "Unknown error",
      }),
      {
        status: 500,
      },
    );
  }
};

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();

    const validated = ProductSchema.parse(body);

    const useCase = new AddProduct(productService);

    const product = await useCase.execute(
      uuid(),
      validated.name,
      validated.price,
    );

    return new Response(JSON.stringify(product), {
      status: 201,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({
        error: error instanceof Error ? error.message : "Unknown error",
      }),
      {
        status: 400,
      },
    );
  }
};
