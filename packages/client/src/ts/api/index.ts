import { createTRPCClient } from "@trpc/client";
import superjson from "superjson";
import type { AppRouter } from "server";
import type { inferHandlerInput } from "@trpc/server";
import { createResource } from "solid-js";

export const apiURL = ["localhost", "127.0.0.1"].includes(
  window.location.hostname
)
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
