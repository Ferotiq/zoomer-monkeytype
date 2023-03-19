import type { Component } from "solid-js";
import styles from "./home.module.scss";

// export function routeData(): Resource<User | undefined> {
// 	return useUser();
// }

const Home: Component = () => {
	// const user = useRouteData<typeof routeData>();
	// const [, { Form }] = createServerAction$((f: FormData, { request }) =>
	// 	logout(request)
	// );

	return (
		<main>
			<h1 class={styles.thing}>Some text</h1>
			{/* <h1 class="font-bold text-3xl">Hello {user()?.username}</h1>
			<h3 class="font-bold text-xl">Message board</h3>
			<button onClick={() => refetchRouteData}>Refresh</button>
			<Form>
				<button name="logout" type="submit">
					Logout
				</button>
			</Form> */}
		</main>
	);
};

export default Home;
