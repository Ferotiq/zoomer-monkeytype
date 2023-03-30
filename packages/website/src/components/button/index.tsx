import type { JSX } from "solid-js";
import styles from "./index.module.scss";

interface ButtonProps {
	children: JSX.Element;
}

export function Button(props: ButtonProps): JSX.Element {
	return <div class={styles.button}>{props.children}</div>;
}
