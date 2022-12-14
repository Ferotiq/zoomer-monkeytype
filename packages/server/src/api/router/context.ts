import type { PrismaClient } from "@prisma/client";
import type { IncomingMessage, ServerResponse } from "http";
import type { NodeHTTPCreateContextFnOptions } from "@trpc/server/adapters/node-http";
import * as trpc from "@trpc/server";
import { prisma } from "../db/client";

interface Context {
  req?: IncomingMessage;
  res?: ServerResponse;
  prisma: PrismaClient;
}

export const createContext = (
  options: NodeHTTPCreateContextFnOptions<IncomingMessage, ServerResponse>
): Context => {
  const req = options?.req;
  const res = options?.res;

  return {
    req,
    res,
    prisma,
  };
};

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const createRouter = () => trpc.router<Context>();
