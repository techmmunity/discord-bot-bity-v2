const { NODE_ENV } = process.env;

export const CONFIG = {
	version: "v1",
	prefix: NODE_ENV === "production" ? "bty " : "btt ",
	flagPrefix: "--",
	flagDelimiter: "'",
};
