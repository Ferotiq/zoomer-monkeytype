import type { JSX } from "solid-js";
import styles from "./key.module.scss";

interface KeyProps {
	key: string;
}

export function Key(props: KeyProps): JSX.Element {
	return <div class={styles.key}>{props.key}</div>;
}
