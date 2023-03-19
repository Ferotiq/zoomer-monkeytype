interface MonkeyResponseOptions<T> {
	message?: string;
	data?: T;
	status?: number;
}

export class MonkeyResponse<T> extends Response {
	public constructor(public options: MonkeyResponseOptions<T> = {}) {
		const { message = "ok", data = null, status = 200 } = options;

		super(
			JSON.stringify({
				message,
				data,
			}),
			{
				status,
				statusText: message,
			}
		);

		this.headers.set("Content-Type", "application/json");
	}
}
