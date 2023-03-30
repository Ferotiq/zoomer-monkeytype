import type { JSX } from "solid-js";
import styles from "./button.module.scss";

type ButtonProps = JSX.HTMLAttributes<HTMLDivElement>;

export function Button(props: ButtonProps): JSX.Element {
	return (
		<div {...props} classList={{ ...props.classList, [styles.button]: true }}>
			{props.children}
		</div>
	);
}
