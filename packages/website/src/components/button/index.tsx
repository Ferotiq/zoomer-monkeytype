import type { JSX } from "solid-js";
import styles from "./button.module.scss";

interface ButtonProps extends JSX.HTMLAttributes<HTMLDivElement> {
	disabled?: boolean;
	active?: boolean;
}

export function Button(props: ButtonProps): JSX.Element {
	return (
		<div
			{...props}
			classList={{
				...props.classList,
				[styles.disabled]: props.disabled ?? false,
				[styles.active]: props.active ?? false,
				[styles.button]: true,
			}}
		>
			{props.children}
		</div>
	);
}
