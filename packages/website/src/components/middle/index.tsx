import type { Component, JSX } from "solid-js";
import styles from "./index.module.scss";

type MiddleProps = JSX.HTMLAttributes<HTMLDivElement>;

export const Middle: Component<MiddleProps> = (props) => {
	return <div class={styles.middle}>{props.children}</div>;
};
