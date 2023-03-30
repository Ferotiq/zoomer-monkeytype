import type { JSX } from "solid-js";
import styles from "./index.module.scss";

type TextButtonProps = JSX.HTMLAttributes<HTMLDivElement>;

export function TextButton(props: TextButtonProps): JSX.Element {
	return <div class={styles["text-button"]}>{props.children}</div>;
}
