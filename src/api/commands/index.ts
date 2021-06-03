import { InformationGateway } from "./information/information.gateway";
import { MessageGateway } from "./message/message.gateway";
import { ModerationGateway } from "./moderation/moderation.gateway";

export const COMMANDS = [InformationGateway, MessageGateway, ModerationGateway];
