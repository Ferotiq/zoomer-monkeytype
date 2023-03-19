import type { User } from "@prisma/client";
import type { Resource } from "solid-js";
import { createServerData$ } from "solid-start/server";
import { getUser } from "./session";

export const useUser = (): Resource<User | undefined> =>
	createServerData$(async (_, { request }) => {
		const user = await getUser(request);
		return user ?? undefined;
	});
