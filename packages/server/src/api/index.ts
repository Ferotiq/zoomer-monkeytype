import express from "express";
import cors from "cors";
import { appRouter } from "./router";
import { createContext } from "./router/context";
import * as trpcExpress from "@trpc/server/adapters/express";

const app = express();

app.use(cors());

app.use(
  "/trpc",
  trpcExpress.createExpressMiddleware({
    router: appRouter,
    createContext,
  })
);

const PORT = parseInt(process.env.PORT ?? "3005");

export const start = (): void => {
  app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
};
