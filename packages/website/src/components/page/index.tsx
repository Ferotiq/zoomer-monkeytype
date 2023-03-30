import type { JSX } from "solid-js";
import { Bottom } from "../bottom";
import { Middle } from "../middle";
import { Top } from "../top";
interface PageProps {
	class: string;
	children: JSX.Element;
}

export function Page(props: PageProps): JSX.Element {
	return (
		<>
			<Top />
			<Middle>
				<main class={props.class}>{props.children}</main>
			</Middle>
			<Bottom />
		</>
	);
}
