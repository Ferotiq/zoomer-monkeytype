import type { User } from "@prisma/client";
import { Resource } from "solid-js";
import { createServerData$, redirect } from "solid-start/server";
import { getUser } from "./session";

export const useUser = (): Resource<User | undefined> =>
	createServerData$(async (_, { request }) => {
		const user = await getUser(request);

		if (user === null) {
			throw redirect("/login");
		}

		return user;
	});
