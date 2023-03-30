import type { JSX } from "solid-js";
import styles from "./index.module.scss";

type MiddleProps = JSX.HTMLAttributes<HTMLDivElement>;

export function Middle(props: MiddleProps): JSX.Element {
	return <div class={styles.middle}>{props.children}</div>;
}
