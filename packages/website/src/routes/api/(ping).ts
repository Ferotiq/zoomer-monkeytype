import { MonkeyResponse } from "~/api/monkey-response";

const START_TIME = Date.now();
const VERSION = "0.0.0";

interface PingResponse {
	uptime: number;
	version: string;
}

export function GET(): MonkeyResponse<PingResponse> {
	return new MonkeyResponse({
		message: "ok",
		data: {
			uptime: Date.now() - START_TIME,
			version: VERSION,
		},
	});
}
