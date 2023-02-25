import { User } from "@prisma/client";
import { Resource } from "solid-js";
import { createServerData$, redirect } from "solid-start/server";
import { db } from ".";
import { getUser } from "./session";

export const useUser = (): Resource<User | undefined> =>
	createServerData$(async (_, { request }) => {
		const user = await getUser(db, request);

		if (!user) {
			throw redirect("/login");
		}

		return user;
	});
