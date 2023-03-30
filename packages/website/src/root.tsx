// @refresh reload
import { Show, Suspense, type JSX } from "solid-js";
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
import styles from "./root.module.scss";
import { theme } from "./state/theme";

export default function Root(): JSX.Element {
	return (
		<Html lang="en">
			<Head>
				<Title>Monkeytype</Title>
				<Meta charset="utf-8" />
				<Meta name="viewport" content="width=device-width, initial-scale=1" />
				<Link
					id="favicon"
					rel="shortcut icon"
					type="image/x-icon"
					href="/images/favicon/favicon.ico"
				/>
				<Show when={theme() !== "custom"}>
					<Link rel="stylesheet" href={`/themes/${theme()}.css`} />
				</Show>
				<Link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/images/favicon/apple-touch-icon.png"
				/>
				<Link
					rel="mask-icon"
					href="/images/favicon/safari-pinned-tab.svg"
					color="#eee"
				/>
				<Meta name="msapplication-TileColor" content="#e2b714" />
				<Meta
					name="msapplication-config"
					content="/images/favicon/browserconfig.xml"
				/>
				<Meta id="metaThemeColor" name="theme-color" content="#e2b714" />
				<Link rel="manifest" href="/./manifest.json" />
				<Meta name="name" content="Monkeytype" />
				<Meta name="image" content="/images/mtsocial.png" />
				<Meta
					name="description"
					content="The most customizable typing website with a minimal design and a ton of features. Test yourself in various modes, track your progress and improve your speed."
				/>
				<Meta
					name="keywords"
					content="typing speed test, typing speedtest, typing test, speedtest, speed test, typing, test, typing-test, typing test, monkey-type, monkeytype, monkey type, monkey-types, monkeytypes, monkey types, types, monkey, type, miodec, wpm, words per minute, typing website, minimalistic, custom typing test, customizable, customisable, themes, random words, smooth caret, smooth, new, new typing site, new typing website, minimalist typing website, minimalistic typing website, minimalist typing test"
				/>
				<Meta name="author" content="Miodec" />
				<Meta
					property="og:title"
					content="Monkeytype | A minimalistic, customizable typing test"
				/>
				<Meta property="og:url" content="https://monkeytype.com/" />
				<Meta property="og:type" content="website" />
				<Meta
					property="og:image"
					content="https://monkeytype.com/images/mtsocial.png"
				/>
				<Meta
					property="og:description"
					content="A minimalistic, customisable typing website. Test yourself in various modes, track your progress and improve your typing speed."
				/>
				<Meta
					name="twitter:title"
					content="Monkeytype | A minimalistic, customizable typing test"
				/>
				<Meta
					name="twitter:image"
					content="https://monkeytype.com/images/mtsocial.png"
				/>
				<Meta name="twitter:card" content="summary_large_image" />
				<Meta name="darkreader-lock" />
				<Meta http-equiv="Cache-Control" content="no-store" />
			</Head>
			<Body class={styles.body}>
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
