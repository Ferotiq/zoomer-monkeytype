import type { JSX } from "solid-js";
import { Page } from "~/components/page";
import styles from "./404.module.scss";

export default function NotFound(): JSX.Element {
	return (
		<Page class={styles.page}>
			<h1 class="title">Page Not Found</h1>
		</Page>
	);
}
