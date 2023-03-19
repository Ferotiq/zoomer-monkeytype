import type { Component } from "solid-js";
import styles from "./index.module.scss";

interface KeyProps {
	key: string;
}

export const Key: Component<KeyProps> = (props) => {
	return <div class={styles.key}>{props.key}</div>;
};
