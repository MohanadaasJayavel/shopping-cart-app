import { z } from "zod";

export const CartItemSchema = z.object({
  productId: z.string(),
  quantity: z.number().min(1)
});

export type CartItemInput =
  z.infer<typeof CartItemSchema>;