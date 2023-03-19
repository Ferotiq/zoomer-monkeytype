import type { APIEvent } from "solid-start";
import { MonkeyResponse } from "~/api/monkey-response";

function notFound({ request }: APIEvent): MonkeyResponse<string> {
	const endpoint = request.url.replace(/^.+\/api\//, "/api/");

	return new MonkeyResponse({
		message: `Unknown API endpoint (${request.method} ${endpoint})`,
		status: 404,
	});
}

export const GET = notFound;
export const POST = notFound;
export const PUT = notFound;
export const DELETE = notFound;
export const PATCH = notFound;
