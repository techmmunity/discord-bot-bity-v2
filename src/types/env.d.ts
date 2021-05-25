/* eslint-disable @typescript-eslint/naming-convention */

declare global {
	namespace NodeJS {
		interface ProcessEnv {
			NODE_ENV: "dev" | "production" | "homolog" | "test";
			DISCORD_TOKEN: string;
			MONGODB_URL: string;
		}
	}
}

// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
// eslint-disable-next-line prettier/prettier
export {};
