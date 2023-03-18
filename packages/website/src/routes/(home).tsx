import type { User } from "@prisma/client";
import type { Component, Resource } from "solid-js";
import { refetchRouteData, useRouteData } from "solid-start";
import { createServerAction$ } from "solid-start/server";
import { logout } from "~/db/session";
import { useUser } from "~/db/use-user";

export function routeData(): Resource<User | undefined> {
	return useUser();
}

const Home: Component = () => {
	const user = useRouteData<typeof routeData>();
	const [, { Form }] = createServerAction$((f: FormData, { request }) =>
		logout(request)
	);

	return (
		<main class="w-full p-4 space-y-2">
			<h1 class="font-bold text-3xl">Hello {user()?.username}</h1>
			<h3 class="font-bold text-xl">Message board</h3>
			<button onClick={() => refetchRouteData}>Refresh</button>
			<Form>
				<button name="logout" type="submit">
					Logout
				</button>
			</Form>
		</main>
	);
};

export default Home;
