import type { JSX } from "solid-js";
import { Bottom } from "../bottom";
import { Middle } from "../middle";
import { Top } from "../top";

type PageProps = JSX.HTMLAttributes<HTMLDivElement>;

export function Page(props: PageProps): JSX.Element {
	return (
		<>
			<Top />
			<Middle>{props.children}</Middle>
			<Bottom />
		</>
	);
}
