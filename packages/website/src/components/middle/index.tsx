import type { JSX } from "solid-js";
import styles from "./middle.module.scss";

type MiddleProps = JSX.HTMLAttributes<HTMLDivElement>;

export function Middle(props: MiddleProps): JSX.Element {
	return <div class={styles.middle}>{props.children}</div>;
}
