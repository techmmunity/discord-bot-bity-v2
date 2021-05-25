import { InformationGateway } from "./information/information.gateway";
import { MessageGateway } from "./message/message.gateway";
import { ModerationGateway } from "./moderation/moderation.gateway";
export declare const Commands: (typeof InformationGateway | typeof MessageGateway | typeof ModerationGateway)[];
