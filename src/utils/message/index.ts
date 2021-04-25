import { formatMessage } from "./format-message";
import { getArgs } from "./get-args";
import { getFlags, Flags, getFlagsUnformatted } from "./get-flags";
import { sendAndDelete } from "./send-and-delete";

export const MessageUtil = {
	getArgs,
	getFlags,
	getFlagsUnformatted,
	sendAndDelete,
	formatMessage,
};

export { Flags };
