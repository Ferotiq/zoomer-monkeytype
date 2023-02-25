import { PrismaClient, User } from "@prisma/client";
import { Resource } from "solid-js";
import { createServerData$, redirect } from "solid-start/server";
import { getUser } from "./session";

export const useUser = (): Resource<User | undefined> =>
	createServerData$(async (_, { request }) => {
		const db = new PrismaClient();
		const user = await getUser(db, request);

		if (!user) {
			throw redirect("/login");
		}

		return user;
	});
