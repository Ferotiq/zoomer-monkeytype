import { exampleRouter } from "./routes/example";
import { trpc } from "./trpc";

export const appRouter = trpc.mergeRouters(exampleRouter);
export type AppRouter = typeof appRouter;
