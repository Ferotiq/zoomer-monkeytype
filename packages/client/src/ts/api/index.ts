import { createTRPCClient } from "@trpc/client";
import type { inferHandlerInput } from "@trpc/server";
import type { AppRouter } from "server";
import { createResource } from "solid-js";
import superjson from "superjson";

export const apiURL =
  window.location.hostname === "localhost"
    ? "http://localhost:3005"
    : "https://api.monkeytype.com";

type AppQueries = AppRouter["_def"]["queries"];
type AppQueryKeys = keyof AppQueries;

export const client = createTRPCClient<AppRouter>({
  url: `${apiURL}/trpc`,
  transformer: superjson,
});

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function createTRPCQuery<TPath extends AppQueryKeys>(
  path: TPath,
  ...args: inferHandlerInput<AppQueries[TPath]>
) {
  return createResource(() => client.query(path, ...(<any>args)));
}
