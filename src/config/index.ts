const { NODE_ENV } = process.env

export const Config = {
	version: "v1",
	prefix: NODE_ENV === "production" ? "bty " : "btt ",
	flagPrefix: "--",
	flagDelimiter: "'",
};
