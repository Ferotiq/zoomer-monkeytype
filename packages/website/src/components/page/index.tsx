import type { JSX } from "solid-js";
import { Bottom } from "../bottom";
import { Middle } from "../middle";
import { Top } from "../top";
import styles from "./page.module.scss";
interface PageProps {
	class: string;
	children: JSX.Element;
}

export function Page(props: PageProps): JSX.Element {
	return (
		<>
			<Top />
			<Middle>
				<main classList={{ [props.class]: true, [styles.page]: true }}>
					{props.children}
				</main>
			</Middle>
			<Bottom />
		</>
	);
}
