import type { JSX } from "solid-js";
import { Page } from "~/components/page";
import styles from "./test.module.scss";

// export function routeData(): Resource<User | undefined> {
// 	return useUser();
// }

export function Test(): JSX.Element {
	// const user = useRouteData<typeof routeData>();
	// const [, { Form }] = createServerAction$((f: FormData, { request }) =>
	// 	logout(request)
	// );

	return (
		<Page>
			<main class={styles.page}>thing</main>
		</Page>
	);

	/* <h1 class="font-bold text-3xl">Hello {user()?.username}</h1>
			<h3 class="font-bold text-xl">Message board</h3>
			<button onClick={() => refetchRouteData}>Refresh</button>
			<Form>
				<button name="logout" type="submit">
					Logout
				</button>
			</Form> */
}

export default Test;
