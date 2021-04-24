import { formatMessage } from "./format-message";
import { getArgs } from "./get-args";
import { getFlags, Flags } from "./get-flags";
import { sendAndDelete } from "./send-and-delete";

export const MessageUtil = {
	getArgs,
	getFlags,
	sendAndDelete,
	formatMessage,
};

export { Flags };
