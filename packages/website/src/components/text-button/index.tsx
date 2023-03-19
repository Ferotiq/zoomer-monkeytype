import type { Component, JSX } from "solid-js";
import styles from "./index.module.scss";

type TextButtonProps = JSX.HTMLAttributes<HTMLDivElement>;

export const TextButton: Component<TextButtonProps> = (props) => {
	return <div class={styles["text-button"]}>{props.children}</div>;
};
