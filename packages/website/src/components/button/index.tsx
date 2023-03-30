import type { JSX } from "solid-js";
import type { ButtonStateProps } from "../props";
import styles from "./button.module.scss";

type ButtonProps = JSX.HTMLAttributes<HTMLDivElement> & ButtonStateProps;

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
