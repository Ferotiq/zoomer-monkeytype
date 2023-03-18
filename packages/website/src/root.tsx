// @refresh reload
import { Suspense, type JSX } from "solid-js";
import {
	Body,
	ErrorBoundary,
	FileRoutes,
	Head,
	Html,
	Link,
	Meta,
	Routes,
	Scripts,
	Title,
} from "solid-start";
import "./root.scss";

export default function Root(): JSX.Element {
	return (
		<Html lang="en">
			<Head>
				<Title>Monkeytype</Title>
				<Meta charset="utf-8" />
				<Meta name="viewport" content="width=device-width, initial-scale=1" />
				<Link rel="icon" href="/images/favicon/favicon.ico" />
			</Head>
			<Body>
				<ErrorBoundary>
					<Suspense fallback={<div>Loading</div>}>
						<Routes>
							<FileRoutes />
						</Routes>
					</Suspense>
				</ErrorBoundary>
				<Scripts />
			</Body>
		</Html>
	);
}
