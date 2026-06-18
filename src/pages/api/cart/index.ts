import type { APIRoute } from "astro";

import { cartService } from "../../../infrastructure/container";
import { GetCart } from "../../../application/usecases/cart/GetCart";

export const GET: APIRoute = async () => {
  try {
    const useCase = new GetCart(cartService);

    const cart = await useCase.execute();

    return new Response(JSON.stringify(cart), {
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
