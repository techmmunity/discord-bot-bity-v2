import { InformationGateway } from "./information/information.gateway";
import { MessageGateway } from "./message/message.gateway";
import { ModerationGateway } from "./moderation/moderation.gateway";
import { SystemGateway } from "./system/system.gateway";

export const Commands = [
	InformationGateway,
	MessageGateway,
	ModerationGateway,
	SystemGateway,
];
