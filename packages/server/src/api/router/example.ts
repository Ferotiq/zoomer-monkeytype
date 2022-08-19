import { z } from "zod";
import { createRouter } from "./context";

export const exampleRouter = createRouter().query("hello", {
  input: z
    .object({
      text: z.string().nullish(),
    })
    .nullish(),
  async resolve({ ctx, input }) {
    const example = await ctx.prisma.example.create({ data: {} });

    return {
      greeting: `Hello ${input?.text ?? example.id ?? "world"}!`,
    };
  },
});
