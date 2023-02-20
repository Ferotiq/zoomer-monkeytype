import { createTRPCProxyClient, httpBatchLink } from "@trpc/client";
import type { AppRouter } from "server";
import superjson from "superjson";

export const apiURL =
  window.location.hostname === "localhost"
    ? "http://localhost:3005"
    : "https://api.monkeytype.com";

export const client = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({
      url: `${apiURL}/trpc`,
    }),
  ],
  transformer: superjson,
});
