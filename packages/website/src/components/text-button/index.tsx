import type { JSX } from "solid-js";
import type { ButtonStateProps } from "../props";
import styles from "./text-button.module.scss";

type TextButtonProps = JSX.HTMLAttributes<HTMLDivElement> & ButtonStateProps;

export function TextButton(props: TextButtonProps): JSX.Element {
	return <div class={styles["text-button"]}>{props.children}</div>;
}
