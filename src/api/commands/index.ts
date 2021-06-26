import { InformationGateway } from "./information/information.gateway";
import { MessageGateway } from "./message/message.gateway";
import { ModerationGateway } from "./moderation/moderation.gateway";

import { UtilsGateway } from "./utils/utils.gateway";

export const COMMANDS = [
	InformationGateway,
	MessageGateway,
	ModerationGateway,
	UtilsGateway,
];
