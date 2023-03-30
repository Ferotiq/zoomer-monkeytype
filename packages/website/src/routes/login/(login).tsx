import { Show, type JSX, type Resource } from "solid-js";
import { useParams, useRouteData } from "solid-start";
import { FormError } from "solid-start/data";
import {
	createServerAction$,
	createServerData$,
	redirect,
} from "solid-start/server";
import { Page } from "~/components/page";
import { prisma } from "~/db";
import { createUserSession, getUser, login, register } from "~/db/session";
import styles from "./login.module.scss";

function validateUsername(username: unknown): string | null {
	if (typeof username !== "string" || username.length < 3) {
		return `Usernames must be at least 3 characters long`;
	}

	return null;
}

function validatePassword(password: unknown): string | null {
	if (typeof password !== "string" || password.length < 6) {
		return `Passwords must be at least 6 characters long`;
	}

	return null;
}

export function routeData(): Resource<object | undefined> {
	return createServerData$(async (_, { request }) => {
		if ((await getUser(request)) !== null) {
			throw redirect("/");
		}
		return {};
	});
}

export default function Login(): JSX.Element {
	const data = useRouteData<typeof routeData>();
	const params = useParams();

	const [loggingIn, { Form }] = createServerAction$(async (form: FormData) => {
		const loginType = form.get("loginType");
		const username = form.get("username");
		const password = form.get("password");
		const redirectTo = form.get("redirectTo") ?? "/";
		if (
			typeof loginType !== "string" ||
			typeof username !== "string" ||
			typeof password !== "string" ||
			typeof redirectTo !== "string"
		) {
			throw new FormError(`Form not submitted correctly.`);
		}

		const fields = { loginType, username, password };
		const fieldErrors = {
			username: validateUsername(username),
			password: validatePassword(password),
		};
		if (Object.values(fieldErrors).some(Boolean)) {
			throw new FormError("Fields invalid", { fieldErrors, fields });
		}

		switch (loginType) {
			case "login": {
				const user = await login({ username, password });
				if (user === null) {
					throw new FormError(`Username/Password combination is incorrect`, {
						fields,
					});
				}
				return createUserSession(`${user.id}`, redirectTo);
			}
			case "register": {
				const userExists = await prisma.user.findUnique({
					where: { username },
				});
				if (userExists !== null) {
					throw new FormError(`User with username ${username} already exists`, {
						fields,
					});
				}
				const user = await register({ username, password });
				if (user === null) {
					throw new FormError(
						`Something went wrong trying to create a new user.`,
						{
							fields,
						}
					);
				}
				return createUserSession(`${user.id}`, redirectTo);
			}
			default: {
				throw new FormError(`Login type invalid`, { fields });
			}
		}
	});

	return (
		<Page class={styles.page}>
			<h1 class={styles.heading}>Login</h1>
			<Form class={styles.form}>
				<input
					class={styles.input}
					type="hidden"
					name="redirectTo"
					value={params.redirectTo ?? "/"}
				/>
				<fieldset class={styles["login-type"]}>
					<legend>Login or Register?</legend>
					<label>
						<input
							class={styles.input}
							type="radio"
							name="loginType"
							value="login"
							checked={true}
						/>{" "}
						Login
					</label>
					<label>
						<input
							class={styles.input}
							type="radio"
							name="loginType"
							value="register"
						/>{" "}
						Register
					</label>
				</fieldset>
				<div>
					<label for="username-input">Username</label>
					<input class={styles.input} name="username" placeholder="kody" />
				</div>
				<Show when={loggingIn.error?.fieldErrors?.username}>
					<p class={styles.alert} role="alert">
						{loggingIn.error.fieldErrors.username}
					</p>
				</Show>
				<div>
					<label for="password-input">Password</label>
					<input
						class={styles.input}
						name="password"
						type="password"
						placeholder="twixrox"
					/>
				</div>
				<Show when={loggingIn.error?.fieldErrors?.password}>
					<p class={styles.alert} role="alert">
						{loggingIn.error.fieldErrors.password}
					</p>
				</Show>
				<Show when={loggingIn.error}>
					<p class={styles.alert} role="alert" id="error-message">
						{loggingIn.error.message}
					</p>
				</Show>
				<button class={styles.submit} type="submit">
					{data() !== null ? "Login" : ""}
				</button>
			</Form>
		</Page>
	);
}
