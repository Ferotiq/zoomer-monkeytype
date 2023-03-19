import type { Component, JSX } from "solid-js";
import styles from "./index.module.scss";

interface ButtonProps {
	children: JSX.Element;
}

export const Button: Component<ButtonProps> = (props) => {
	return <div class={styles.button}>{props.children}</div>;
};
