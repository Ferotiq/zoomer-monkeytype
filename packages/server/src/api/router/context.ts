import type { inferAsyncReturnType } from "@trpc/server";
import type { NodeHTTPCreateContextFnOptions } from "@trpc/server/adapters/node-http";
import type { IncomingMessage, ServerResponse } from "http";
import { prisma } from "../db/client";

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const createContext = (
  options: NodeHTTPCreateContextFnOptions<IncomingMessage, ServerResponse>
) => {
  const req = options?.req;
  const res = options?.res;

  return {
    req,
    res,
    prisma,
  };
};

export type Context = inferAsyncReturnType<typeof createContext>;
