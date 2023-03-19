import type { Component, JSX } from "solid-js";
import { Bottom } from "../bottom";
import { Middle } from "../middle";
import { Top } from "../top";

type PageProps = JSX.HTMLAttributes<HTMLDivElement>;

export const Page: Component<PageProps> = (props) => {
	return (
		<>
			<Top />
			<Middle>{props.children}</Middle>
			<Bottom />
		</>
	);
};
