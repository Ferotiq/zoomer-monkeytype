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

export const createRouter = (): ReturnType<typeof trpc.router<Context>> =>
  trpc.router<Context>();
