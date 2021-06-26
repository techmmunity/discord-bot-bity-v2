import { InformationGateway } from "./information/information.gateway";
import { MessageGateway } from "./message/message.gateway";
import { ModerationGateway } from "./moderation/moderation.gateway";
import { UtilsGateway } from "./utils/utils.gateway";
export declare const COMMANDS: (typeof InformationGateway | typeof MessageGateway | typeof ModerationGateway | typeof UtilsGateway)[];
