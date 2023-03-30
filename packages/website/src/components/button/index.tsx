import type { JSX } from "solid-js";
import styles from "./button.module.scss";

interface ButtonProps extends JSX.HTMLAttributes<HTMLDivElement> {
	children: JSX.Element;
}

export function Button(props: ButtonProps): JSX.Element {
	return (
		<div {...props} classList={{ ...props.classList, [styles.button]: true }}>
			{props.children}
		</div>
	);
}
