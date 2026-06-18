import { z } from "zod";

export const ProductSchema = z.object({
  name: z.string().min(1),
  price: z.number().positive()
});

export type ProductInput =
  z.infer<typeof ProductSchema>;